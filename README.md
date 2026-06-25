# TUPA Lab System Site

Static site for TUPA Lab (KAIST Graduate School of Mobility): the member hub plus guides for the weekly report, target venues, researcher topics, and the LLM-Wiki. Deployed on GitHub Pages.

Live: https://hyunchul176.github.io/tupa-system/

## Pages
- `index.html` — member hub (start here)
- `report.html` — how to write the weekly report and how to add a research project
- `conferences.html` — key venues by field, with tiers and submission deadlines
- `students.html` — research topics by team
- `wiki.html` — LLM-Wiki overview
- `monitor.html` — live dashboard explainer
- `tupa.css` / `tupa.js` — shared styles and the language / theme toggle

## Bilingual
Pages carry `data-ko` / `data-en` attributes; `tupa.js` swaps them when the language button is toggled.

## Updating
Pages are authored in the main wiki repo under `interactives/` and published with `python scripts/deploy_system.py`, which copies them here and pushes. GitHub Pages rebuilds automatically within a minute or two.
