# SecTor 2026 notes

Colin Johnstone's notes and takeaways from SecTor 2026 (Toronto, Oct 6–8), one page per day.

| Path | Content |
|---|---|
| `/` | Hub page linking each day |
| `/day-1/` | Day 1: AI x Cloud Security Summit |
| `/day-2/` | Day 2: Keynote & Briefings |
| `/day-3/` | Day 3 (coming) |

Static HTML, no build step. Each day is a self-contained `index.html` (fonts from Google Fonts; speaker headshots are embedded).

## Adding a day

1. Create `day-N/index.html`.
2. In `index.html`, turn that day's placeholder `<div class="day pending">` into `<a class="day" href="day-N/">` and change the status chip to `Read now`.
3. Push to `main`. GitHub Pages republishes automatically within a minute or two.

Keep links relative (`day-N/`, `../`): the site is served from a sub-path, `https://<user>.github.io/sector-2026/`.

## Deploy

GitHub Pages: Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`. `.nojekyll` tells Pages to serve the files as-is.
