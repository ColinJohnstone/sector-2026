# SecTor 2026: Colin Johnstone's Security Intelligence Report

Personal conference notes, analysis and observations from SecTor 2026 (Toronto, Oct 6–8) by Colin Johnstone, Senior Consultant, Authentication Services @ CIBC. Not an official CIBC publication or position.

Live: https://colinjohnstone.github.io/sector-2026/

| Path | Content |
|---|---|
| `/` | Home: thesis, day cards, passport, topic map, timeline, Ready Set Cyber games, site-wide search |
| `/brief/` | Executive security brief (about 10 minutes) |
| `/day-1/` | Day 1: AI x Cloud Security Summit, "AI changed the speed of the attack" |
| `/day-2/` | Day 2: Keynote & Briefings, "The threat is already on the device" |
| `/day-3/` | Day 3: Keynote & Briefings, "The real question is who gets to decide" |
| `/challenge/` | The SecTor 2026 Challenge: 50 questions with category scores and a rank |
| `/glossary/` | Full glossary with "used in" links to sessions |

Static site, no build step and no dependencies beyond Google Fonts. Keep every link relative: the site is served from the `/sector-2026/` sub-path.

## How it fits together

```
assets/
  core.js      shared helpers: icon sprite, categories, concept tooltips, provenance badges, Quiz
  engine.js    renders a day page from window.SECTOR.days[N]
  search.js    home-page search across sessions, speakers, takeaways and the glossary
  glossary.js  window.GLOSSARY: key -> [term, definition, icon]
  base.css     shared component layout
  site.css     home, brief, challenge and glossary pages
  report.css   house style: printed-report look, scroll reveals and print-like motion
  styles.css   site styles: Terminal (default), Broadsheet, Plain; Report is report.css + day themes
  extras.js    style and light/dark menu, reading progress passport and badges (saved in the browser)
  colin.jpg    author photo for the byline
day-N/
  index.html   page shell (sections the engine fills in)
  data.js      all of that day's content
  photos.js    embedded speaker headshots (data URIs) keyed by speaker name
  theme.css    the day's own fonts, paper colour, accent and motion
```

### Session fields (`data.js`)

`id, time, end, room, url, icon, short, title, org, speakers [[name, role]], cats, summary, covered[], learned[], why, concepts[], program[], ask, links[]`, plus optional `takeaway, chain {steps, note}, stats [{v, l, src}], identity {points}, fromProgram`.

Provenance rules for `stats[].src`:

- `"presented"` shows "Presented during the session"
- `"program"` shows "Official session abstract"
- `{t, u}` links to a public source

Only use links to primary or technical sources (research, advisories, papers, docs). No company homepages, generic vendor pages, search pages or guessed LinkedIn URLs. `linkedin` on the day object takes direct profile URLs only.

## Adding a day

All three days are published. To add another page in the same style (for example a follow-up event):

1. Copy `day-3/` to `day-N/`. Replace `data.js` (set `n`, register as `SECTOR.days[N]`) and `photos.js`, and write a new `theme.css` with its own fonts, paper, accent and motion (update the Google Fonts link to match).
2. In `day-N/index.html`, set `<body data-day="N">` and add it to the day nav.
3. Home (`index.html`): add a day card with its facts and topics, and add `<script src="day-N/data.js">` before `assets/search.js`.
4. Add the day to the nav on every page, and update the brief.
5. Challenge (`challenge/index.html`) and glossary (`glossary/index.html`): add `<script src="../day-N/data.js">`. Its quiz items join the challenge automatically, and rank thresholds scale with the question count.
6. Add any new terms to `assets/glossary.js`, and a `--dN` accent colour plus `.daycard.dN` rule in `assets/report.css`.
7. Bump the `?v=` query string on assets in every HTML file so browsers fetch the new files.

## Deploy

GitHub Pages: Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`. `.nojekyll` tells Pages to serve files as-is. Pushing to `main` republishes within a minute or two.
