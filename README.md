# deekshant.dev

Personal portfolio of **Deekshant Gupta** — backend and AI engineer. A minimal, type-led
single-page site with restrained motion and a config-driven media section.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

---

## Stack

| Layer      | Choice                             |
| ---------- | ---------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack) |
| Language   | TypeScript                         |
| Styling    | Tailwind CSS v4                    |
| Animation  | Motion (`motion/react`)            |
| Icons      | Lucide + custom brand SVGs         |
| Deployment | Vercel                             |

## Sections

- **Hero** — portrait, intro, links, availability
- **Work** — MailScheduler, NextFlow, AskWise
- **Experience** — roles, education, certifications, toolbox
- **Media** — config-driven wins, moments, and launches
- **About** — story and quick facts
- **Contact** — email, phone, socials

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy, projects, experience, skills, certifications, media, and links live in
[`src/lib/data.ts`](src/lib/data.ts). Change the data file and the page updates everywhere.

The résumé and portrait are served from `public/resume.pdf` and `public/profile.jpg`.

### Adding a media item

The Media section is driven by the `media` array in `src/lib/data.ts`:

```ts
export const media: MediaItem[] = [
  {
    id: "pose-ai",
    title: "Pose AI Hackathon — Winner",
    description: "Won the VIT Chennai hackathon with a pose-estimation build.",
    date: "Mar 2024",
    label: "Award",
    image: "/media/pose-ai.jpg", // optional
    alt: "Team at the Pose AI Hackathon",
    href: "https://example.com", // optional
  },
];
```

Add an object to the array and it appears on the site. To include a picture, drop the file in
`public/media/` and set `image` to `"/media/<file-name>"`. `label`, `date`, `image`, `alt`, and
`href` are all optional except `id`, `title`, and `description`.

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
3. Deploy.

The previous static site is preserved on the `legacy-static` git branch.
