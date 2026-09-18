# Phase 4 — Web-only baseline comparison

Result: comparison recorded; **baseline research coverage PARTIAL**. No MCP calls were used during this phase. MCP was not physically removed from client configuration. Same ongoing Codex task/model/reasoning setting and countries/indicators/requested years, but not an independent or blinded run. The same research goal was applied; an identical isolated prompt was not replayed. No model-setting change was made or inferred.

## Measured outputs

| Metric | MCP arm | Web search/page-text arm |
|---|---|---|
| Requested annual cells | 90 | 90 |
| Retrieved cells | 84 (93.33%) | 30 (33.33%), including rounded and older-release values |
| Country × indicator pairs with any value | 9/9 | 6/9 |
| Full available multiyear series | 9 | Population: 3 series covering 2015–2021 plus 2024 |
| Raw-to-published consistency | 84/84 exact | Retained separately; not published as MCP data |
| Cross-arm checks | 24 population cells exact; 4 life cells agree at displayed precision; 2 life cells differ | Same paired comparison; agreement is not independent proof of accuracy |
| Source traceability | Variable → country → facet → WDI URL, all 9 series | Per-row source URL/year/precision retained; older report vintage explicit |
| Unsupported values introduced | 0 detected | 0 accepted without evidence; mismatched sex/age/year results rejected |
| Manual research interventions | 0 | 0 |
| Routine decision requests | 0 | 0 |
| Research operations | 3 searches + 1 metadata call + 9 series calls = 13 MCP calls | 14 queries + 10 page opens + 4 finds = 28 web operations, in 8 batched tool calls |
| Elapsed time | Exact arm timing not instrumented; not scored | Start/end timestamps in evidence/web/baseline.json; includes agent reasoning and evidence work |
| Output completeness | Data, facets, changes, findings and dashboard | Partial data and comparison, no complete health series |

## Evidence and interpretation

- [DataBank population table](https://databank.worldbank.org/id/b389cb5f) provides 2015–2021 annual values for all three countries. All 21 match the MCP snapshot.
- [World Bank country summary](https://data.worldbank.org/?locations=1W-JP-KE-NG-MX) supplies 2024 population (three exact matches) and rounded 2023 life expectancy (three precision-compatible matches). These were available through indexed page text; a direct open returned HTTP 429.
- [Older DataBank report](https://databank.worldbank.org/embed/Macroeconomics-Workshop/id/fef9176d), marked updated 2023-09-11, gives 2015 life expectancy: Japan 83.79, Kenya 61.89, Mexico 74.68. Japan agrees when rounded; Kenya and Mexico differ from the MCP snapshot (62.279 and 74.431). Different data vintages are a plausible explanation, not proven by this comparison. Do not score these automatically as hallucinations or MCP errors.
- Gender portal search results were female-only and excluded. Generic DataBank pages listed countries in selector menus without identifying the displayed series' country; these were also excluded.
- Filtered indicator pages failed or did not expose annual values in page text. Recovery tried focused searches, unfiltered official pages and WDI thematic tables. The population thematic table covers 2000 and 2025, outside the request. A health thematic page failed.
- An additional search using MCP-observed health values produced no qualifying records and biases independence further; its results were rejected. This is logged rather than treated as a clean controlled trial.

The baseline was reduced to the verified recoverable subset after these attempts. No API download, MCP fallback, invented year or imputed value was used to inflate web-only coverage. This run demonstrates easier structured extraction for the selected MCP route, but does not establish a general MCP advantage, statistical significance, or a fair timing comparison. A fresh, isolated counterbalanced trial with equal budgets and version-matched data remains necessary.

The 30 row-level values and comparison checks are published in `evidence/web/`; full web tool results are preserved locally. This phase's incomplete research result is an experimental observation, not a reason to fabricate data or block preparation for deployment.
