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
| Deployment | Netlify                            |

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

Certifications are clickable when they have an `href`. Certificate files live in
`public/certifications/`.

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
`public/media/` and set `image` to `"/media/<file-name>"`. Clicking an item with an image opens
it in a lightbox; items without an image but with `href` open that link. `label`, `date`, `image`,
`alt`, and `href` are optional except `id`, `title`, and `description`.

## Scripts

```bash
npm run dev        # start the dev server
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript only
```

## Credits

The pixel cat is adapted from [oneko.js](https://github.com/adryd325/oneko.js) by adryd (MIT).
The license is included at `public/oneko-LICENSE.txt`.

## Deploy

The site is set up for **Netlify** (`netlify.toml`). Netlify's Next.js runtime handles the
build automatically.

### Updating an existing Netlify site

```bash
git add .
git commit -m "Update portfolio"
git push
```

Netlify watches the connected branch and redeploys on every push. You can also trigger a deploy
from the Netlify dashboard with **Deploys → Trigger deploy → Deploy site**.

If the repository is not connected yet:

1. Push the project to GitHub.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Pick the repository. Build command `npm run build`, publish directory `.next`.
4. Node version 22 is set in `netlify.toml`; no environment variables are required.
5. Deploy.

### Deploying from the CLI

```bash
npm install -g netlify-cli
netlify login
netlify link          # link this folder to the existing Netlify site
netlify deploy --build --prod
```

A drag-and-drop deploy will not work for this setup because Netlify needs to run the Next.js
build. Use the Git integration or the CLI.

The previous static site is preserved on the `legacy-static` git branch.
