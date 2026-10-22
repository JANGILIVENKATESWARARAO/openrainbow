# Open Rainbow website (Angular)

Professional redesign of https://www.openrainbow.co.uk built with Angular 19 (standalone components, signals, new control flow).

## Run it

```
cd "D:\Projects\Open Rainbow\openrainbow"
npm install
npm start
```

The site opens at http://localhost:4200. Production build: `npm run build` (output in `dist/openrainbow`).

Needs Node.js 18.19+ / 20.11+ / 22+.

## Pages

| Route        | Page                                                                 |
|--------------|----------------------------------------------------------------------|
| `/`          | Home: hero with monitoring panel, vendors, services, approach, solutions, outcomes, offers |
| `/services`  | Infrastructure, managed and professional services + specialist services |
| `/solutions` | Technology areas with vendors, outcomes, featured offers              |
| `/about`     | Company story, ways to engage, offices                                |
| `/contact`   | Enquiry form (reactive forms + validation), contact details           |
| `**`         | 404                                                                  |

## Where things live

```
src/
  styles.scss                  design tokens (colours, fonts) + buttons
  app/
    core/data/site-content.ts  ALL site copy: edit text here
    core/services/contact.service.ts  form submit (mocked, connect your API here)
    layout/header, footer
    shared/logo, page-hero, cta-band, practices
    pages/home (+ status-panel), services, solutions, about, contact, not-found
```

## To do

- Contact form: replace the mock in `contact.service.ts` with a real `HttpClient` POST (HttpClient is already provided).
- Vendor logos: the vendor strip on Home uses text names. Add official logo files to `public/` if you have partner rights to use them.
- The hero monitoring panel uses example data (labelled "Example monitoring view").
