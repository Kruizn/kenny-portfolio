# Kenny Ruiz Portfolio

A professional portfolio site showcasing strategic operations expertise in healthcare/UM.

## Tech Stack

- **React 18** + **Vite** — Fast development and builds
- **Tailwind CSS** — Utility-first styling
- **Mermaid.js** — Live workflow diagrams
- **Lucide React** — Icons

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub Integration (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" → Select this repo
4. Vercel auto-detects Vite settings — just click Deploy
5. Done. Your site is live at `your-project.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard → Project Settings → Domains
2. Add your domain (e.g., `kennyruiz.com`)
3. Update DNS records as instructed

## Deployment to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or connect via GitHub at [netlify.com](https://netlify.com) — same flow as Vercel.

## Customization

- **Content**: Edit `src/App.jsx` — all content is inline
- **Colors**: Edit `tailwind.config.js` — custom `sand` and `slate` palettes
- **Fonts**: Edit `index.html` — Google Fonts imports
- **Profile photo**: Replace `public/kenny-profile.jpg`

## File Structure

```
kenny-portfolio/
├── public/
│   ├── kenny-profile.jpg    # Your headshot
│   └── favicon.svg          # KR initials favicon
├── src/
│   ├── App.jsx              # Main component (all sections)
│   ├── main.jsx             # React entry
│   └── index.css            # Tailwind + custom styles
├── index.html               # HTML entry
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## LinkedIn URL

Update the LinkedIn URL in `src/App.jsx` (search for `linkedin.com/in/kennyruiz` and replace with your actual profile URL).

## Cost

- **Vercel free tier**: Unlimited deployments, 100GB bandwidth/month
- **Netlify free tier**: 100GB bandwidth/month, 300 build minutes/month
- **Custom domain**: ~$10-15/year (optional)

**Total: $0/month** (or $10-15/year with custom domain)
