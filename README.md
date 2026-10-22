# Open Rainbow website (Angular)

Professional redesign of https://www.openrainbow.co.uk built with Angular 19 (standalone components, signals, new control flow). Font: Inter.

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
| `/services/:slug` | Detail pages: infrastructure assessment, upgrades, security, scalability, redundancy, OTDR |
| `/solutions` | Technology areas with vendors, outcomes, featured offers              |
| `/solutions/:slug` | Detail pages: performance, security, reliability, future-proofing, cost savings |
| `/about`     | Company story, ways to engage, offices                                |
| `/contact`   | Enquiry form (reactive forms + validation), contact details           |
| `**`         | 404                                                                  |

## Where things live

```
src/
  styles.scss                  design tokens (colours, fonts) + buttons
  app/
    core/data/site-content.ts  site copy: edit text here
    core/data/detail-pages.ts  copy for every service/solution detail page
    core/services/contact.service.ts  form submit (mocked, connect your API here)
    layout/header, footer
    shared/logo, page-hero, cta-band, practices
    pages/home (+ status-panel), services, solutions, detail, about, contact, not-found
```

## Old URLs

The old Wix page URLs (for example `/general-4`, `/what-we-do`) redirect to the new pages, see `app.routes.ts`.
For this to work on a live server, configure it to serve `index.html` for all routes.

## To do

- Contact form: replace the mock in `contact.service.ts` with a real `HttpClient` POST (HttpClient is already provided).
- Vendor logos: the vendor strip on Home uses text names. Add official logo files to `public/` if you have partner rights to use them.
- The hero monitoring panel uses example data (labelled "Example monitoring view").
