# EXP-003 analysis — Phase 2 PASS

Source: World Bank WDI via Data Commons MCP, retrieved 2026-09-18. 84/90 requested annual cells (93.33%), all 9 country-indicator pairs.

## Finding 1
Japan's population fell 2.49% from 127,141,000 in 2015 to 123,975,371 in 2024.

Trace: web/data/dataset.json → series indicator=population, countries=Japan, years=2015/2024.

## Finding 2
Kenya's population rose 19.84% from 47,088,526 in 2015 to 56,432,944 in 2024.

Trace: web/data/dataset.json → series indicator=population, countries=Kenya, years=2015/2024.

## Finding 3
Mexico's population rose 8.09% from 121,072,306 in 2015 to 130,861,007 in 2024.

Trace: web/data/dataset.json → series indicator=population, countries=Mexico, years=2015/2024.

## Finding 4
Life expectancy increased between 2015 and 2023 by 0.25 years in Japan, 1.37 years in Kenya, 0.64 years in Mexico.

Trace: web/data/dataset.json → series indicator=life, countries=Japan/Kenya/Mexico, years=2015/2023.

## Finding 5
Mexico’s life expectancy fell from 74.53 years in 2019 to 69.75 in 2021, then reached 75.07 in 2023. This is a descriptive pattern, not a causal estimate.

Trace: web/data/dataset.json → series indicator=life, countries=Mexico, years=2019/2021/2023.

## Finding 6
Under-five mortality declined in all three countries from 2015 to 2023: 14.29% in Japan, 15.82% in Kenya, 22.84% in Mexico. These are relative reductions, not percentage-point changes.

Trace: web/data/dataset.json → series indicator=mortality, countries=Japan/Kenya/Mexico, years=2015/2023.

## Charts
Three separate annual line charts: population, life expectancy, and under-five mortality. Country comparison table uses the latest common year within each indicator, with start/end changes.

## Limitations
- Six requested 2024 health observations are absent in the selected MCP facets. Missing years are not imputed. Population covers 2015–2024; health indicators cover 2015–2023.
- These are national aggregates and may hide within-country inequalities. Source estimates can be revised; retrieval dates do not identify a historical WDI release.
- MCP display text for mortality says younger than 4, but its explicit definition is death before age five. That definition and per-1,000-live-births unit govern this analysis.
- No causal conclusions or uncertainty intervals are estimated. Differences between indicators’ periods must be respected.
- The hosted Data Commons endpoint was tested; this does not establish that a separate UN-specific graph or endpoint was queried.
- The web-only comparison is sequential and not blinded. Prior MCP knowledge and supplementary definition checks limit experimental independence.
