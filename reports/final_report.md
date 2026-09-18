# EXP-003 final report — deployment in progress

Plan v1.1; frozen retrieval date 2026-09-18. Current result: PARTIAL, pending GitHub Pages publication and Phase 6 public verification.

Phases 0-B, 0-C, 1, 2 and 3 passed. Phase 4 comparison is recorded with partial web-only research coverage (30/90 cells) and non-blinded protocol limitations. Phase 5 is resuming after user-resolved authentication and repository-trust stops. No Phase 6 PASS is claimed yet.

MCP data: World Bank WDI via Data Commons; Japan, Kenya and Mexico; population 2015–2024, life expectancy and under-five mortality 2015–2023. All 84 public observations match the raw response data, with six missing 2024 health cells and no imputation. Three local charts, nine series, six traced findings, source definitions and limitations were verified.

Main findings: population changed −2.49% in Japan, +19.84% in Kenya and +8.09% in Mexico during 2015–2024. Life expectancy increased by 0.25, 1.37 and 0.64 years respectively during 2015–2023. Under-five mortality declined by 14.29%, 15.82% and 22.84% respectively. These describe this frozen snapshot and do not establish causation. See analysis.md.

Web baseline: 24 population observations match exactly; four life-expectancy observations agree at displayed precision; two differ in an older source report. No full mortality series was recovered. See baseline_comparison.md for source URLs, measurements and limitations. The prior context and unmatched data vintages prevent a controlled superiority claim.

Routine decision requests and manual technical/research interventions: zero. Authentication/security stops: two, resolved by the user outside the research workflow. Prior local preview recovery succeeded; web retrieval recovery was partial; shell execution recovered using an approved execution route. Only a command-scoped trust exception for the specific workspace is permitted; no global/system Git configuration changes were made.

Public repository scope: dashboard, statistical data, build/verification scripts, reports, selected source evidence and screenshots. Operational handoff notes and full external search-page dumps are retained locally. Pages publishes only web/. No tokens or client credential configuration are included.

Reproducibility and follow-up: retain the frozen dataset and returned facet IDs; do not infer an exact WDI release or a separate UN graph. Repeat a future comparison in isolated sessions with identical prompts, equal budgets, randomized order and version-matched reference data. Add uncertainty intervals and source-vintage records where available.
