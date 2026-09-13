# Manikandan B — AI & Full-Stack Portfolio

A recruiter-focused portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## What was upgraded

- Added the uploaded professional portrait as `public/profile.jpg` and used it in the hero section.
- Added `InterviewArena` as the newest featured project with a complete case-study view.
- Reworked the Projects section for four projects, responsive cards, cleaner typography and safer long-text wrapping/overflow.
- Added project status labels and honest result/metric presentation.
- Expanded the skills section with the technologies actually used in InterviewArena.
- Clarified the difference between **Working Knowledge** and **Currently Learning**.
- Improved the full-stack learning section to show what is already applied vs. what is being deepened.
- Reordered the page so recruiters see Projects before the learning roadmap.
- Replaced the old generated `.txt` resume action with a proper `public/resume.pdf` download.
- Added recruiter-friendly SEO/Open Graph metadata and an `og-cover.jpg` social preview.
- Added this README so future updates can be made without editing UI components.

## Run locally in VS Code

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Production check:

```bash
npm run build
npm run preview
```

## How to add a new project later

**Only edit:** `src/data/portfolio.ts`

Add one object to `PROJECTS` using this structure:

```ts
{
  id: "my-project",
  index: "05",
  name: "My New Project",
  short: "One-line recruiter-friendly description",
  problem: "What real problem does it solve?",
  solution: "What did you build and how does it solve the problem?",
  description: "2–3 concise sentences for the project card.",
  technologies: ["React", "Python", "PostgreSQL"],
  features: ["Feature 1", "Feature 2", "Feature 3"],
  tags: ["Full Stack"],
  architecture: ["Frontend", "API", "Database", "AI service"],
  results: ["Measured result", "Useful outcome"],
  accent: "#34d399",
  status: "Completed",
  metrics: [
    { value: "95%", label: "Measured metric" },
  ],
  repoUrl: "https://github.com/...", // only when you have the real URL
  liveUrl: "https://...", // only when you have the real URL
},
```

### Important

- Do not invent accuracy, users, performance or deployment claims.
- Add metrics only when you actually measured them.
- Add `repoUrl` / `liveUrl` only after the real links exist.
- For a new project visual, add a matching branch in `ProjectArt()` inside `src/components/Projects.tsx` if you want a custom illustration. Otherwise the default IoT visual is used.

## How to update your learning progress

The main learning/project data is in `src/data/portfolio.ts`.

When you finish a technology:

1. Move it from `Currently Learning` to `Working Knowledge` or `Experienced` only when your real project work supports that label.
2. Update `CURRENTLY_LEARNING` if the new list changes.
3. Update the `JOURNEY` entry so the timeline stays accurate.
4. Update the small learning text in `Skills.tsx` / `Contact.tsx` if you want the visible list to change.

## Where to replace the resume

`public/resume.pdf` is the file downloaded by the Resume buttons.

When you create a newer resume, simply replace that file with the new PDF using the same filename. No React code change is required.

## Where to replace the photo

`public/profile.jpg` is the website portrait. The supplied photo has already been cropped/resized to a recruiter-friendly 4:5 format.

To replace it later, keep the filename `profile.jpg` and place the new image in `public/`.

## Deployment

### Recommended: Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.
7. After the final portfolio is approved, connect your custom domain.
8. Update the canonical URL in `index.html` only after the final public domain is known.

### Before going live

- Test desktop + mobile layouts.
- Click every navigation item.
- Open every project case study and press Escape to close it.
- Test Resume download.
- Test GitHub, LinkedIn and email buttons.
- Run `npm run build` successfully.
- Verify `profile.jpg`, `resume.pdf` and `og-cover.jpg` load from the deployed site.
- Replace any placeholder repository/demo links with real URLs.

## Portfolio content principle

The design intentionally prioritizes **evidence over buzzwords**: real projects, architecture, technologies, measurable outcomes and transparent learning status.

## Contact form / email delivery

The contact form uses the Vercel serverless function at `api/contact.js` and Resend instead of `mailto:`. This means a visitor's message is sent to your inbox even if they do not have a desktop email app configured.

### Configure before deployment

1. Create a Resend account and create an API key.
2. In Vercel → Project → Settings → Environment Variables, add `RESEND_API_KEY`.
3. Optionally add `CONTACT_TO_EMAIL` (defaults to `manikandan270706@gmail.com`).
4. For production, verify a domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain.
5. Redeploy the project.

Never put `RESEND_API_KEY` in React/Vite code or commit it to GitHub. It must remain a server-side environment variable.

### Local testing

Create `.env.local` from `.env.example`, add your real Resend API key, then run:

```bash
npm run dev
```

The form will POST to `/api/contact` when the site is served by Vercel. If you run only `vite` locally, the Vercel function is not emulated; use `vercel dev` for an end-to-end local test.

## Contact form: important deployment note

The contact form is a real server-side form. It does **not** open the visitor's email application. It sends the message from `/api/contact` through Resend to `manikandan270706@gmail.com`.

Before deploying to Vercel, add these Environment Variables in the Vercel project settings:

- `RESEND_API_KEY` — your Resend API key (keep it secret)
- `CONTACT_TO_EMAIL` — optional; defaults to `manikandan270706@gmail.com`
- `CONTACT_FROM_EMAIL` — optional; use a verified domain sender for production

After deployment, visit `/api/contact` in the browser. It should return JSON with `configured: true` when the API key is available to the deployed function.

The PDF in `public/resume.pdf` is the supplied current resume. Replace that file whenever the resume is updated; no component changes are required.