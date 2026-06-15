#!/usr/bin/env node
/**
 * SessionStart hook — trust-posture banner surfacing.
 *
 * Landed by item-7 (GH #15) hook-cluster propagation. co-education had no
 * session-start.js (its prior SessionStart was an inline settings.json echo,
 * which is preserved alongside this hook — see settings.json). This harness is
 * the merge target the substrate's posture-banner-snippet.js describes: it
 * builds the operator-facing posture banner and pushes it into the session's
 * additionalContext so the agent reads its current trust ceiling at start.
 *
 * Surfacing only. The trust-posture ENFORCEMENT (detect-violations,
 * validate-bash-command, journal-write-guard, destructive-op-guard) runs
 * independently of this banner.
 *
 * Dependency: lib/posture.js ONLY. Fail-open on any error or timeout.
 *
 * Exit codes: 0 = success (continue); 1 = non-blocking error (continue).
 */

const path = require("path");
const posture = require(path.join(__dirname, "lib", "posture.js"));

const TIMEOUT_MS = 10000;

const _timeout = setTimeout(() => {
  console.log(JSON.stringify({ continue: true }));
  process.exit(1);
}, TIMEOUT_MS);

function buildPostureBanner(cwd) {
  posture.pruneViolations(cwd);
  const p = posture.readPosture(cwd);
  const counts = posture.countRecent(cwd);
  const graceActive = (p.grace || [])
    .map(
      (g) =>
        `${g.type} (rule ${g.rule}, until ${String(g.until || "").slice(0, 10)})`,
    )
    .join("; ");
  const banner =
    `[TRUST-POSTURE] ${p.level}` +
    (p.since ? ` since ${p.since.slice(0, 10)}` : "") +
    ` — ${counts.total} violation(s) in last ${posture.WINDOW_DAYS}d` +
    ` (${counts.unadjudicated} awaiting probe adjudication,` +
    ` ${counts.confirmed} confirmed, ${counts.retired} retired)` +
    (graceActive ? ` | grace windows: ${graceActive}` : "");
  const additionalContext =
    banner +
    "\nPosture ladder: L1 (observed) … L5 (delegated); rules/trust-posture.md " +
    "defines the ceiling. Downgrades are automatic; only a human may upgrade. " +
    (counts.unadjudicated > 0
      ? `${counts.unadjudicated} recorded violation(s) await probe adjudication at the next /cc-audit (step 15, where wired).`
      : "No violations awaiting adjudication.");
  return { banner, additionalContext };
}

let input = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  clearTimeout(_timeout);
  try {
    let cwd = process.env.CLAUDE_PROJECT_DIR || process.cwd();
    try {
      const parsed = JSON.parse(input || "{}");
      if (typeof parsed.cwd === "string" && parsed.cwd) cwd = parsed.cwd;
    } catch {
      // malformed stdin — fall back to env/cwd, still emit the banner
    }
    const { banner, additionalContext } = buildPostureBanner(cwd);
    // stderr for the human; additionalContext for the agent.
    process.stderr.write(banner + "\n");
    console.log(
      JSON.stringify({
        continue: true,
        hookSpecificOutput: {
          hookEventName: "SessionStart",
          additionalContext,
        },
      }),
    );
    process.exit(0);
  } catch {
    console.log(JSON.stringify({ continue: true }));
    process.exit(1);
  }
});
