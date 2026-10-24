# Open Rainbow website (Angular)

Professional redesign of https://www.openrainbow.co.uk.

| Tool         | Version |
|--------------|---------|
| Angular      | 22.2    |
| TypeScript   | 6.0     |
| Tailwind CSS | 4.3     |
| Storybook    | 10.6    |
| Node.js      | 22.22+ or 24.15+ |

Standalone components, signals, new control flow, zoneless change detection. Font: Inter only (no serif, no italics). Icons: [Lucide](https://lucide.dev) via `@lucide/angular`.

## Run it

After pulling this version, do a clean install once (new test packages: vitest, jsdom):

```
cd "D:\Projects\Open Rainbow\openrainbow"
rmdir /s /q node_modules        (PowerShell: Remove-Item -Recurse -Force node_modules)
del package-lock.json
npm install
npm start
```

The site opens at http://localhost:4200. Production build: `npm run build` (output in `dist/openrainbow`).
On a live server, serve `index.html` for every route (standard Angular single-page set-up).

## Tests

```
npm test                   # runs every *.spec.ts with Vitest (ng test)
```

Every component has its own spec file. Shared test setup (providers and the real JSON content) is in `src/testing/test-helpers.ts`.

## Code structure

Every component has four files of its own, never one file with everything inline:

```
example.component.ts       logic
example.component.html     template
example.component.scss     styles
example.component.spec.ts  tests
```

Directives (`orReveal`, `orCountUp`) have a `.ts` and a `.spec.ts`.

## Storybook

```
npm run storybook          # http://localhost:6006
npm run build-storybook    # static build
```

Stories: icon, theme toggle, logo, section head, page hero, CTA band, practices, operations hub.
Use the theme switch in the Storybook toolbar to see light and dark.

## Light and dark theme

- Colours are CSS variables in `src/styles.scss`: brand constants (`--navy-*`, `--bronze`) and theme tokens under `[data-theme='light']` and `[data-theme='dark']`.
- Components only use tokens (`var(--bg)`, `var(--ink)`, `var(--accent)` ...). Change a colour in one place and both themes follow.
- Tailwind 4 reads the same tokens (`src/tailwind.css`), e.g. `bg-surface`, `text-ink`, `text-accent`, and `dark:` works with the `data-theme` attribute.
- The toggle in the header saves the choice (`localStorage` key `or-theme`). With no choice, the site follows the system setting.

## Animations

- **Content reveal:** add `orReveal` to any element and it slides in the first time it scrolls into view. Effects: `orReveal` (up, default), `orReveal="down"`, `"left"`, `"right"`, `"zoom"`, `"fade"`. Stagger lists with `[revealDelay]="$index * 80"` (ms, max 480). Code: `src/app/shared/reveal/reveal.directive.ts`, styles: `.reveal` in `src/styles.scss`.
- **Count up:** `<dt [orCountUp]="'30+'"></dt>` counts the number up when it comes into view (years and values like `24/7` stay as they are).
- **Page change:** a soft fade between pages (router view transitions). The header stays still.
- **Loader:** the OR mark (`public/images/logo-mark.svg`) with two glowing "falling star" arcs orbiting it. Shown at start-up (`index.html`) and when a page takes longer than 250 ms to load (`src/app/shared/loader`). Arc colours: `--loader-arc-1` and `--loader-arc-2` in `src/styles.scss`.
- Cards lift on hover, the CTA band glow drifts slowly, and blog posts show a reading bar.
- Everything respects the "reduce motion" setting of the device.

## Logo and icons

- Social links (footer): `site.json` → `footer.social` (label, icon, url). Icons without a url show but are not clickable yet; just add the url later.
- Logo files: `public/images/logo-light.svg` (dark text, light theme) and `public/images/logo-dark.svg` (white text, dark theme and footer). Replace them with your own files of the same name at any time.
- Partner logos: `public/images/partners/*.svg`, listed in `site.json` → `partners` (name + logo path). To add or replace a logo, drop the file in that folder and add/edit the entry.
- Icons come from Lucide. Short names used in the JSON (e.g. `"shield"`) are mapped in `src/app/shared/icon/icons.ts`. To add an icon, import it there and add it to `ICON_SET`.

## Content (all from JSON)

Every text on the site comes from JSON files in `public/data`:

```
site.json        company, contact, menu, header, footer, partner logos, enquiry topics,
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
| `/blog`             | Blog listing (old `/insights` links redirect here) |
| `/blog/:slug`       | Blog post                              |
| `/about`            | Company                                |
| `/contact`          | Enquiry form. `?topic=` pre-selects the enquiry type |
| `**`                | 404 page (any wrong address, e.g. `/portfolio`). The "0" is the OR mark with orbiting stars |

## Contact form

The form uses a mock by default. Set `contactApi` in `environment.ts` to a real endpoint and the form will POST to it.
