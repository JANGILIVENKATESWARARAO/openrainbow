# OpenRainbow IT website (Angular)

Redesign of https://www.openrainbow.co.uk built with Angular 19 (standalone components, signals, new control flow).

## Run it

1. Unzip into `D:\Projects\Open Rainbow` so you get `D:\Projects\Open Rainbow\openrainbow`.
2. Open a terminal in that folder:

```
cd "D:\Projects\Open Rainbow\openrainbow"
npm install
npm start
```

The site opens at http://localhost:4200. Production build: `npm run build` (output in `dist/openrainbow`).

Needs Node.js 18.19+ / 20.11+ / 22+.

## Pages

| Route       | Page                                                    |
|-------------|---------------------------------------------------------|
| `/`         | Home: prism hero (6 life-cycle stages), services, outcomes |
| `/services` | Life cycle, 3 service lines, capabilities (incl. OTDR)  |
| `/about`    | Quality promise, ways to engage, offices                |
| `/contact`  | Enquiry form (reactive forms + validation), contact details |
| `**`        | 404                                                     |

## Where things live

```
src/
  styles.scss                  design tokens (colours, fonts) + buttons
  app/
    core/data/site-content.ts  ALL site copy: edit text here
    core/services/contact.service.ts  form submit (mocked, connect your API here)
    layout/header, footer
    shared/logo, page-hero, cta-band, service-lines
    pages/home (+ spectrum-hero), services, about, contact, not-found
```

## To do

- Contact form: replace the mock in `contact.service.ts` with a real `HttpClient` POST (HttpClient is already provided).
- Partners: the old site has partner logos. Add them to `public/` and a section on Home if needed.
