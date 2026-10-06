# Wasatch Wire

A college-football news companion for Matt (Utah) and Tyler (BYU), with equal editorial coverage.

## Current dynasty

- EA SPORTS College Football 27 on PS5
- Season 1, 2026, Week 0
- Utah head coach: Steve Smith Jr. (the dynasty's former Utah/NFL receiver persona)
- BYU coach name is intentionally omitted until Tyler supplies it
- Utah defeated Utah State 36–20 on the dynasty's August 29 schedule
- Utah 1–0; BYU 0–0, opening versus Wyoming in Week 1

## Content and updates

Eleventy templates live in `src/`. Editable JSON in `src/_data/` drives scores, schedules, standings, the Top 25, projections, profiles and Heisman Watch.

- `games.json`: verified game summaries; detailed player and scoring records
- `rankings.json`: in-game Media Top 25, not a real-world AP poll
- `standings.json`: actual results, alphabetical while the league is tied
- `projections.json`: frozen preseason editorial ballot; never reorder actual standings from these picks
- `heisman.json`: game-generated national list plus separate editorial Utah/BYU radar
- `profiles.json`: player features and background
- `schedules.json`: dynasty fixtures, with kickoff times Eastern as shown in game

Real-world biographies provide personal histories only. Do not import current real-world scores, results, awards or performance into this dynasty. Do not invent player/coach quotes or unseen game events.

Original screenshots remain in `../season1/week 0/`. `reference/season1/week0/` stores their manifest, OCR text, verified game record and recovered data. OCR is a discovery aid, not verified data. That reference directory is outside the deployed site. Old writing is preserved under `reference/legacy-articles/`; it contains prior real-world assumptions and is no longer used as current dynasty reporting.

## Build and publish

Use the project's existing Eleventy 2 dependency: `npm install` then `npm run build`. Output is `_site/`, with `/wasatch-wire/` as the GitHub Pages path prefix. Pushes to `main` trigger the existing GitHub Pages build and deployment. Check that action and the live pages before calling an update published.
