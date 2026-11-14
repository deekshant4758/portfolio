# deekshant.dev

Personal portfolio of **Deekshant Gupta** — backend and AI engineer. A minimal, type-led
single-page site with restrained motion, live GitHub activity, and a working contact form.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

---

## Stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack)       |
| Language   | TypeScript                               |
| Styling    | Tailwind CSS v4                          |
| Animation  | Motion (`motion/react`)                  |
| Icons      | Lucide + custom brand SVGs               |
| Email      | EmailJS (client-side)                    |
| Deployment | Vercel                                   |

## Sections

- **Hero** — availability, positioning, key numbers, scrolling marquee
- **Selected work** — MailScheduler, NextFlow, AskWise with bespoke SVG covers
- **Experience** — expandable roles, education, certifications
- **Toolbox** — grouped skills
- **GitHub activity** — live contribution graph and stats
- **About** — portrait, story, quick facts
- **Contact** — copy-email, socials, EmailJS form
- **Footer + floating dock** — navigation, colophon, status

## Local development

```bash
npm install
cp .env.example .env.local   # add your EmailJS credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_MAIN=
NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO=
```

`NEXT_PUBLIC_EMAILJS_TEMPLATE_AUTO` is optional (auto-reply). Without any credentials the
contact form falls back to opening a prefilled `mailto:` link.

## Editing content

All copy, projects, experience, skills, certifications, and links live in
[`src/lib/data.ts`](src/lib/data.ts). Change the data file and the page updates everywhere.

The résumé and portrait are served from `public/resume.pdf` and `public/profile.jpg`.

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

## Deploy

1. Push the repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new).
3. Add the EmailJS environment variables.
4. Deploy.

The previous static site is preserved on the `legacy-static` git branch.
