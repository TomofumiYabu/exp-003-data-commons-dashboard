# EXP-003 final experiment report

Completed: 2026-09-18 (Asia/Tokyo). Plan v1.1.

**Experiment result: PARTIAL. Deployment and Phase 6 verification: PASS.** The data-to-public-app workflow is complete. The overall research comparison remains partial because the web-only baseline recovered only 30 of 90 requested cells and was not a blinded, independently prompted trial. No deployment work remains blocked.

- Dashboard: https://tomofumiyabu.github.io/exp-003-data-commons-dashboard/
- Public repository: https://github.com/TomofumiYabu/exp-003-data-commons-dashboard
- Verified web release: 68b09668f6657ea348ba55e668e4c125843634bf
- Successful release deployment: https://github.com/TomofumiYabu/exp-003-data-commons-dashboard/actions/runs/35356506106

## Phase results

| Phase | Result |
|---|---|
| 0-B | Prior connection PASS accepted; no repeat retrieval for deployment |
| 0-C | PASS: repository/files reviewed and secret scans passed |
| 1 MCP research | PASS: all nine country-indicator pairs; 84/90 requested cells |
| 2 Analysis | PASS: three chart choices, six traced findings, limitations |
| 3 Static app | PASS: HTML/CSS/JS, static JSON/CSV, three charts |
| 4 Web baseline | Comparison recorded; research coverage and trial validity PARTIAL |
| 5 GitHub Pages | PASS: public repository, main branch, Actions deployment, HTTPS |
| 6 Verification/report | PASS: public rendering, data equality, sources, mobile layout, console and evidence |

## Research result and MCP vs web comparison

World Bank WDI facets were selected consistently across Japan, Kenya and Mexico. Population covers 2015–2024; life expectancy and under-five mortality cover 2015–2023. Six requested health observations for 2024 are missing; none were imputed. Mortality is defined as death before the fifth birthday per 1,000 live births, resolving the misleading MCP display name. Underlying estimates originate with UN IGME. No separate UN-specific graph or exact WDI release vintage was established.

MCP coverage was 84/90 (93.33%) across 9/9 country-indicator pairs. Web coverage was 30/90 (33.33%) across 6/9 pairs. Paired checks found 24 exact population matches, four life-expectancy matches at displayed precision and two differences in an older report. Version differences are plausible but unproven. Raw-to-public consistency was 84/84; this does not establish independent accuracy for all 84 source estimates. No unsupported or imputed values were introduced.

The baseline shared prior context, did not replay an identical isolated prompt, and used different source vintages. Two official health-definition pages supplemented the MCP arm. Consequently H1–H3 have exploratory evidence, not a controlled demonstration of general MCP superiority. See baseline_comparison.md and the row-level evidence/web/baseline.json and checks.json.

## Main findings

| Measure | Japan | Kenya | Mexico | Period |
|---|---:|---:|---:|---|
| Population relative change | −2.49% | +19.84% | +8.09% | 2015–2024 |
| Life expectancy absolute change | +0.25 years | +1.37 years | +0.64 years | 2015–2023 |
| Under-five mortality relative reduction | 14.29% | 15.82% | 22.84% | 2015–2023 |

Mexico life expectancy was 74.53 years in 2019, 69.75 in 2021 and 75.07 in 2023. These descriptive statements refer only to the frozen World Bank WDI snapshot and do not identify causes. All six findings have indicator/country/year trace mappings in analysis.md and web/data/dataset.json. Full precision is retained in JSON; the display rounds health values to at most two decimals.

## Autonomous completion and human interventions

- Final autonomous completion: **YES within the plan's authentication/security exclusions**. Research evaluation remains PARTIAL as above.
- Numbered phases passed autonomously: five (1, 2, 3, 5, 6); Phase 0-C also passed. Phase 4 ran autonomously but returned partial research coverage.
- Routine/unplanned decision requests: **0**.
- Manual research/technical interventions: **0**.
- Authentication/security STOP events: **2**. The user completed GitHub authentication/destination authorization, then authorized a repository-specific command-scoped Git trust exception. These are excluded security interventions, not autonomous technical successes.
- No new STOP after the scoped authorization. No global/system Git trust configuration was changed; no wildcard or parent-directory trust was used.
- Recovery episodes: local preview startup (successful); web retrieval (partial); shell helper failure (recovered via approved execution); browser selector mismatch (recovered using the actual summary element); mobile label readability (fixed); cached browser assets (resolved with versioned asset URLs). GitHub Actions deployments themselves succeeded without workflow repair.
- MCP research: 13 tool calls, plus two supplementary official-page opens. Web baseline: 28 operations in eight batched calls, 96.167 seconds recorded. Whole-experiment timing and exhaustive tool counts were not instrumented and are not retrospectively invented.

## Phase 5 publication and safety review

Authenticated personal owner was obtained using gh api user --jq .login. A dedicated public repository was created at the explicitly authorized name. Repository-local configuration initially contained only standard core settings; hooks were inactive sample files only, with no effective custom hooksPath or fsmonitor. The staged allowlist was reviewed; no symlinks, submodules, credential files or client configuration were included.

The repository publishes the dashboard, public statistical data, reproducibility scripts, reports, selected evidence and screenshots. Operational authentication/handoff notes and full external search-page dumps remain local and ignored. Pages uploads **only web/**. The browser fetches only its local static dataset; it never contacts Data Commons or an authenticated API. No tokens or credentials were printed, inspected, copied or stored. Repeated heuristic secret scans found no suspected credentials; this is a scoped check rather than a guarantee against every possible secret format. The final scan evidence is saved alongside deployment records.

Initial publication was dc6b2b6. Mobile scrollable charts were added in ababbdc; asset URLs were versioned in 68b0966. The frozen statistical dataset was unchanged throughout deployment. The initial, mobile-fix and asset-refresh Actions runs succeeded. Subsequent report/evidence commits do not change the web dataset.

## Phase 6 verification

| Check | Evidence/result |
|---|---|
| Public HTTP | 200 for HTML, CSS, JS, dataset JSON and observation CSV |
| Hosted/local equality | All five files byte-identical, SHA-256 values saved |
| Frozen dataset | 84 observations, nine series; all match raw MCP observations and source facets |
| Chart correctness | Three SVG charts; all 84 rendered labels and plot coordinates verified against data |
| Findings/source links | Six findings agree with saved text; three correct World Bank indicator links |
| Missing values | Six explicit Missing cells; no interpolation/extrapolation |
| Comparison control | Life expectancy table switched correctly; previous mortality table checks also passed |
| Responsive layout | 390×844 test: page width 375, no page-level overflow; three 720px charts scroll inside 317px containers |
| Browser console | No warnings or errors recorded |
| Screenshots | Public desktop, mobile and preview images saved |
| Reproducibility | Build/raw-data verifier, hosted verifier and captured-browser verifier pass |
| Repository | Reviewed changes committed and pushed; final cleanliness checked after the report commit |

Dataset SHA-256: `f6d99650485a7820a8bd49a7e55040029680823c0f0789e0b1b15399b1a2e687`.

Evidence: evidence/deployment/http-verification.json, browser-verification.json, chart-checks.json, responsive-console.json, action-result.json, publication-review.md, and evidence/screenshots/public-*.png. Raw MCP evidence remains in data/raw/. Complete local operational history is retained outside the public Git snapshot.

## Limitations and follow-up candidates

National aggregates hide within-country variation. Source revisions and missing release identifiers limit vintage matching. No uncertainty intervals or causal models were estimated; indicator periods differ. The web baseline is incomplete and non-blinded. Successful publication does not resolve those research limitations.

Follow-up experiments: independent counterbalanced arms with identical prompts and equal budgets; version-matched source validation; direct public API retrieval as a third arm; explicit verification of UN-specific provenance; and uncertainty/source-vintage capture. H4's permitted autonomous delivery and H5's data-to-app workflow are demonstrated, while research-comparison hypotheses remain qualified.
