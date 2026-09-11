# LinkUp — Deployment Guide

Complete step-by-step instructions to deploy your LinkUp website publicly.

---

## 1. Local Preview

```bash
# Navigate to your project directory
cd linkup

# Install dependencies (none required, but keeps package.json valid)
npm install

# Start the dev server
npm run dev

# Open in browser
# → http://localhost:3000
```

All 5 pages will be accessible:
- `/` → Homepage
- `/conversations` → Conversations
- `/how-it-works` → How It Works
- `/safety` → Safety & ID Policy
- `/rescheduling` → Scheduling Rules

---

## 2. Git Setup & GitHub Push

```bash
# Initialize git repository
git init

# Set main branch
git branch -M main

# Stage all files
git add .

# Create initial commit
git commit -m "LinkUp v2 — multi-page platform rebuild"

# Create a new repository on GitHub (github.com/new)
# Then add it as remote:
git remote add origin https://github.com/YOUR_USERNAME/linkup.git

# Push to GitHub
git push -u origin main
```

---

## 3. Deploy on Vercel (Recommended — Free)

### Option A: One-Click via Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"**.
3. Import your `linkup` repository.
4. **Framework Preset**: Select `Other` (this is a static site, no framework).
5. **Build Command**: Leave empty (no build step needed).
6. **Output Directory**: `.` (root — all HTML files are at the root level).
7. Click **Deploy**.

Your site will be live at `https://linkup-XXXX.vercel.app` within 60 seconds.

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow the prompts:
# → Set up and deploy? Yes
# → Which scope? (your account)
# → Link to existing project? No
# → Project name? linkup
# → Directory? ./
# → Override settings? No

# For production deployment:
vercel --prod
```

### Automatic Deploys

Every `git push` to `main` will automatically trigger a new deployment on Vercel. Zero manual work after initial setup.

---

## 4. Alternative: GitHub Pages (Free)

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Select **Branch: `main`** and folder **`/ (root)`**.
5. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/linkup/` within 2-5 minutes.

### Step 2: Fix Asset Paths (if using GitHub Pages with a subpath)

If your site is at `github.io/linkup/` (not root domain), you may need to update links. Since we use relative paths (`css/shared.css`, `conversations.html`), everything should work automatically.

---

## 5. Custom Domain Configuration

### For Vercel

1. In the Vercel dashboard, go to your project → **Settings** → **Domains**.
2. Add your custom domain (e.g., `linkupnavi.in` or `linkup.cafe`).
3. Add these DNS records at your domain registrar:

**For root domain (`linkupnavi.in`):**
| Type | Name | Value |
|------|------|-------|
| A    | @    | 76.76.21.21 |

**For subdomain (`www.linkupnavi.in`):**
| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | cname.vercel-dns.com |

### For GitHub Pages

1. In **Settings** → **Pages**, enter your custom domain.
2. Add a `CNAME` file to your repository root:

```bash
echo "linkupnavi.in" > CNAME
git add CNAME && git commit -m "Add custom domain" && git push
```

3. Add these DNS records:

**For root domain:**
| Type | Name | Value |
|------|------|-------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

**For subdomain:**
| Type  | Name | Value |
|-------|------|-------|
| CNAME | www  | YOUR_USERNAME.github.io |

DNS propagation takes 15-60 minutes. Both Vercel and GitHub Pages provide free automatic HTTPS.

---

## 6. Post-Deploy Checklist

After your first deployment, update these placeholders:

### Update Google Form URL

In `js/shared.js`, replace the placeholder:

```javascript
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_ACTUAL_FORM_ID";
```

### Update OpenGraph Image URL

In all 5 HTML files, update the `og:image` meta tags:

```html
<meta property="og:image" content="https://yourdomain.com/assets/og-card.png">
```

Replace `yourdomain.com` with your actual deployed domain.

### Update WhatsApp Number

In all 5 HTML files, update the WhatsApp support link:

```html
href="https://wa.me/91XXXXXXXXXX?text=Hi%20LinkUp%2C%20I%20have%20a%20question."
```

Replace `91XXXXXXXXXX` with your actual WhatsApp Business number.

### Verify OG Tags

After deploying, test your social sharing cards:
- [opengraph.xyz](https://www.opengraph.xyz/) — Preview your OG tags
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — Debug LinkedIn previews
- Share a link in a private WhatsApp chat to yourself to verify the card

---

## 7. OpenGraph Meta Tags (Already Included)

All 5 pages include complete OpenGraph and Twitter Card meta tags:

```html
<!-- In every <head> section -->
<meta property="og:title" content="Page Title — LinkUp">
<meta property="og:description" content="Page description...">
<meta property="og:image" content="https://yourdomain.com/assets/og-card.png">
<meta property="og:url" content="https://yourdomain.com/page">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LinkUp">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title — LinkUp">
<meta name="twitter:description" content="Page description...">
<meta name="twitter:image" content="https://yourdomain.com/assets/og-card.png">
```

These generate elegant preview cards when shared on WhatsApp, LinkedIn, Instagram, Twitter/X, and Slack.

---

## File Structure Reference

```
linkup/
├── index.html              ← Homepage
├── conversations.html      ← Conversations gallery
├── how-it-works.html       ← How It Works deep dive
├── safety.html             ← Safety & Verification
├── rescheduling.html       ← Scheduling & Rescheduling
├── css/
│   └── shared.css          ← Design system & animations
├── js/
│   └── shared.js           ← Navigation, CTA, FAQ, scroll reveals
├── assets/
│   ├── linkup-cafe-conversation.png  ← Original hero image
│   └── og-card.png         ← Social sharing card (generate this)
├── server.js               ← Local dev server
├── package.json
├── .gitignore
└── DEPLOY.md               ← This file
```
