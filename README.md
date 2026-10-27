# Hassan Ahmed — Portfolio

Personal portfolio site. Next.js + Tailwind CSS, exported as a static site and deployed on Vercel.

## Update the content

Everything on the site comes from **`data/site.ts`**: intro, stats, experience, skills, links.
Edit that file, commit, push. Vercel redeploys automatically.

- Add your GitHub URL in `links.github` to show the GitHub buttons.
- After your first deploy (or after connecting a domain), set `url` to the live address so link previews work.
- To replace the resume, overwrite `public/Hassan_Ahmed_Resume.pdf` with the same file name.
- To change the accent colour, edit `--color-accent` in `app/globals.css`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, writes static site to /out
```

Requires Node.js 18.18+ (LTS recommended).

## Deploy (first time)

1. Create a public GitHub repo named `portfolio`, then from this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. On vercel.com: **Add New → Project → Import** the `portfolio` repo → **Deploy**.
   Vercel detects Next.js; no settings to change.
3. Optional: **Project → Settings → Domains** to connect a custom domain.

## Structure

```
app/
  layout.tsx     page metadata, font, SEO / link preview
  page.tsx       home page
  globals.css    Tailwind + colour tokens
  icon.svg       favicon
components/
  Portfolio.tsx  all page sections
data/
  site.ts        ← all content
public/
  Hassan_Ahmed_Resume.pdf
  og.png         image shown when the link is shared
```
