# Open Rainbow website (Angular)

Professional redesign of https://www.openrainbow.co.uk.

| Tool         | Version |
|--------------|---------|
| Angular      | 22.2    |
| TypeScript   | 6.0     |
| Tailwind CSS | 4.3     |
| Storybook    | 10.6    |
| Node.js      | 22.22+ or 24.15+ |

Standalone components, signals, new control flow, zoneless change detection. Font: Inter only (no serif, no italics).

## Run it

After pulling this version, do a clean install once:

```
cd "D:\Projects\Open Rainbow\openrainbow"
rmdir /s /q node_modules        (PowerShell: Remove-Item -Recurse -Force node_modules)
del package-lock.json
npm install
npm start
```

The site opens at http://localhost:4200. Production build: `npm run build` (output in `dist/openrainbow`).
On a live server, serve `index.html` for every route (standard Angular single-page set-up).

## Storybook

```
npm run storybook          # http://localhost:6006
npm run build-storybook    # static build
```

Stories: icon, theme toggle, logo, section head, page hero, CTA band, practices, status panel.
Use the theme switch in the Storybook toolbar to see light and dark.

## Light and dark theme

- Colours are CSS variables in `src/styles.scss`: brand constants (`--navy-*`, `--bronze`) and theme tokens under `[data-theme='light']` and `[data-theme='dark']`.
- Components only use tokens (`var(--bg)`, `var(--ink)`, `var(--accent)` ...). Change a colour in one place and both themes follow.
- Tailwind 4 reads the same tokens (`src/tailwind.css`), e.g. `bg-surface`, `text-ink`, `text-accent`, and `dark:` works with the `data-theme` attribute.
- The toggle in the header saves the choice (`localStorage` key `or-theme`). With no choice, the site follows the system setting.

## Content (all from JSON)

Every text on the site comes from JSON files in `public/data`:

```
site.json        company, contact, menu, header, footer, vendors, enquiry topics,
                 home page copy, page titles and texts for every page
services.json    service practices + service detail pages
solutions.json   technologies + solution detail pages + featured offers
blog.json        blog posts
```

Edit the JSON, save, refresh. No code change needed.
`site.json` texts can use `{founded}`, `{years}`, `{vendors}` and `{category}`; the app fills them in.
Headings use `"title"` + `"emphasis"` (e.g. "Our" + "services"): the emphasis part is shown in a stronger colour (upright Inter, no italics).

## Remote JSON (Google Drive, later)

Settings are in `src/environments/environment.ts`. Right now `content.remote` is `false`, so the local files are used.

To switch to Drive:

1. Upload the 4 JSON files to Google Drive.
2. Share each file as "Anyone with the link can view".
3. Paste the share links into `remoteUrls` (site, services, solutions, blog).
4. Set `remote: true`.
5. Recommended: add a Google API key (Drive API enabled) to `driveApiKey`. Without a key the browser may block the request (CORS).

If a remote file fails to load, the app uses the local copy, so the site never goes blank.

## Pages

| Route               | Page                                   |
|---------------------|----------------------------------------|
| `/`                 | Home                                   |
| `/services`         | Services overview                      |
| `/services/:slug`   | Service detail page (6)                |
| `/solutions`        | Solutions overview                     |
| `/solutions/:slug`  | Solution detail page (5)               |
| `/insights`         | Blog listing                           |
| `/insights/:slug`   | Blog article                           |
| `/about`            | Company                                |
| `/contact`          | Enquiry form. `?topic=` pre-selects the enquiry type |
| `**`                | 404                                    |

## Contact form

The form uses a mock by default. Set `contactApi` in `environment.ts` to a real endpoint and the form will POST to it.
