# Open Rainbow website (Angular)

Professional redesign of https://www.openrainbow.co.uk built with Angular 19 (standalone components, signals, new control flow). Font: Inter.

## Run it

```
cd "D:\Projects\Open Rainbow\openrainbow"
npm install
npm start
```

The site opens at http://localhost:4200. Production build: `npm run build` (output in `dist/openrainbow`).
On a live server, serve `index.html` for every route (standard Angular single-page set-up).

## Pages

| Route               | Page                                                                    |
|---------------------|-------------------------------------------------------------------------|
| `/`                 | Home: monitoring-panel hero, vendors, services, approach, solutions, offers, latest insight |
| `/services`         | Service practices + specialist services                                 |
| `/services/:slug`   | Service detail page (6)                                                 |
| `/solutions`        | Outcomes, technologies, featured offers                                 |
| `/solutions/:slug`  | Solution detail page (5)                                                |
| `/insights`         | Blog listing                                                            |
| `/insights/:slug`   | Blog article                                                            |
| `/about`            | Company story, ways to engage, offices                                  |
| `/contact`          | Enquiry form (reactive forms + validation). `?topic=` pre-selects the enquiry type |
| `**`                | 404                                                                     |

## Content (JSON)

Services, solutions and blog content live in JSON files and are loaded at runtime:

```
public/data/services.json   practices + service pages
public/data/solutions.json  technologies + solution pages + featured offers
public/data/blog.json       blog posts
```

- Add a service or solution: add an object to `items` with a unique `slug`. It appears in the menu, footer, listing pages and contact form automatically.
- Add a blog post: add an object to `posts`. Body blocks are `p` (paragraph), `h2` (heading with an `id`) or `ul` (list with `items`).
- `icon` must be one of the names in `src/app/shared/icon/icons.ts`.
- Types for all files: `src/app/core/models/content.ts`.

## Where things live

```
src/
  styles.scss                        design tokens + shared classes
  app/
    core/models/content.ts           JSON content types
    core/services/content.service.ts loads and caches the JSON files
    core/resolvers.ts                route resolvers + page titles (unknown slugs show the 404)
    core/data/site-content.ts        company, contact, approach copy
    core/services/contact.service.ts form submit (mocked, connect your API here)
    layout/header (mega menu), footer
    shared/icon, logo, page-hero, cta-band, practices
    pages/home, services, solutions, detail, insights, article, about, contact, not-found
```

## To do

- Contact form: replace the mock in `contact.service.ts` with a real `HttpClient` POST.
- Vendor logos: the vendor strip uses text names. Add official logos only if you have partner rights to use them.
- The hero monitoring panel uses example data (labelled "Example monitoring view").
