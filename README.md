# EXP-003 — Population & health

Static statistical dashboard for Japan, Kenya and Mexico using World Bank World Development Indicators retrieved through Data Commons MCP on 2026-09-18.

Live dashboard: https://tomofumiyabu.github.io/exp-003-data-commons-dashboard/ — Deployment and Phase 6 PASS. Overall research evaluation PARTIAL because the web baseline is incomplete and non-blinded.

## Run locally

Requires Node.js 22 or later, no npm packages.

```sh
node scripts/build.mjs
node scripts/verify.mjs
node scripts/secret-scan.mjs
node scripts/serve.mjs
```

Open http://127.0.0.1:8003. Serve via HTTP; opening index.html as a file may block the static JSON fetch.

The checked-in `web/` folder is ready to serve without a build. `build.mjs` regenerates it from the frozen processed dataset. `verify.mjs` checks all 84 observations against raw MCP responses, facets, missing counts, change calculations and static-only data access.

## Data and reproducibility

- `data/raw/`: complete discovery, metadata and observation tool results (no connection configuration or credentials).
- `data/processed/`: selected dataset, annual CSV with empty missing values, and computed changes.
- `web/data/`: public static data and traced findings. Only this data is fetched by the app.
- `reports/analysis.md`: findings and limitations.
- `reports/baseline_comparison.md`: sequential web-only comparison and its limitations.
- `reports/final_report.md`: completed experiment report with public verification and research limitations.
- `evidence/`: web evidence, verification, decisions and screenshots.

To refresh through MCP: search each semantic indicator for Japan/Kenya/Mexico; resolve returned IDs; inspect metadata; choose a common WDI source facet per indicator; retrieve 2015–2024 with `date=range` and the returned facet ID as `source_override`. Preserve raw responses, verify definitions and units, regenerate processed JSON, then build and verify. Facet IDs may change. Credentials stay in the client's approved external configuration, never this repository. Rebuilding the frozen snapshot does not require MCP credentials.

Population covers 2015–2024; both health series cover 2015–2023. Six requested health cells are missing. No imputation. Health definitions and sources: https://data.worldbank.org/indicator/SP.DYN.LE00.IN and https://data.worldbank.org/indicator/SH.DYN.MORT. Population: https://data.worldbank.org/indicator/SP.POP.TOTL. World Bank indicator pages identify CC BY 4.0; retain World Bank and underlying source attribution. No ownership of source data is claimed.

## GitHub Pages

Workflow: `.github/workflows/pages.yml`. Publishes only `web/` from `main`, through GitHub Actions. The destination repository must have Pages configured to use Actions and the required existing permissions. No runtime API calls or repository secrets are required by the dashboard. Review the secret scan and staged diff before any push. Account selection, authentication and permission expansion follow the experiment STOP rules.

The local development server is only a preview tool; GitHub Pages requires no Node server.

Public verification: run node scripts/verify-hosted.mjs to compare the hosted files with this snapshot, and node scripts/verify-browser-evidence.mjs to check the saved public DOM evidence. Full web-search dumps and local operational handoff notes are retained locally; selected row-level evidence is published.
