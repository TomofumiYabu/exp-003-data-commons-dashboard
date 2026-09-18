# Verification evidence

Date: 2026-09-18, Asia/Tokyo.

- `node scripts/build.mjs`: PASS. 84 observations; 6 findings.
- `node scripts/verify.mjs`: PASS. 84 raw-to-public matches, 6 missing cells, 9 matching source facets, 9 verified change calculations, only local static JSON fetched.
- `node --check web/app.js`: PASS.
- Browser: http://127.0.0.1:8003/, title EXP-003 · Population & health.
- Rendered DOM: 3 SVG charts, 9 series paths, 84 observation points.
- Browser console warnings/errors: empty array.
- Mortality selector: Japan 2.8→2.4 (-14.29%), Kenya 47.4→39.9 (-15.82%), Mexico 16.2→12.5 (-22.84%), all 2015→2023 and consistent with data.
- Desktop screenshot inspected; population scale uses millions and displayed paths match national population levels.
- Mobile viewport 390×844: document width 375, no page-level horizontal overflow; screenshot preserved. Viewport override reset afterward.
- Screenshots: evidence/screenshots/desktop.png, evidence/screenshots/mobile.png.
- Preview recovery: first navigation occurred before server start and returned connection refused. Reading that error tab encountered a browser policy rejection of its generated data URL. Started server and opened ordinary localhost URL in a fresh tab; success. No browser warning bypass or permission change.

Phase 3: PASS. These checks are local only; deployment and public verification are separate pending gates.
