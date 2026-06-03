# HostVault — Web Hosting Affiliate Site

A stunning, SEO-optimized affiliate website for web hosting reviews. Built as static HTML — free to host on Vercel forever.

---

## 🚀 Deploy to Vercel (Free)

### Option 1: Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click **"Add New Project"** → **"Browse"**
3. Drag the entire `hosting-affiliate` folder
4. Click **Deploy** — done! Your site is live in ~60 seconds.

### Option 2: Via GitHub (Recommended for updates)
1. Push this folder to a GitHub repository
2. Connect GitHub to Vercel → select the repo
3. Click **Deploy**
4. Every time you push changes to GitHub, Vercel auto-redeploys

---

## ✏️ How to Edit Content

All content lives in **one file**: `index.html`

Scroll to the `CONTENT DATA` section (around line 450) and you'll see easy-to-edit JavaScript objects.

### Adding a New Hosting Provider
Find the `hosts` array and copy-paste this template:

```javascript
{
  id: "newhost",                          // unique slug, no spaces
  name: "NewHost",                        // display name
  logo: "NH",                             // 2-3 letter abbreviation for logo
  logoColor: "#ff6600",                   // hex color for the logo background
  badge: "Best for X",                    // or null for no badge
  tagline: "One line description here",
  rating: 4.7,                            // rating out of 5
  price: "$3.99",
  period: "/mo",
  originalPrice: "$12.99",               // or null if no original price
  affiliate_url: "https://your-affiliate-link.com",
  pros: ["Pro 1", "Pro 2", "Pro 3", "Pro 4"],
  cons: ["Con 1", "Con 2"],
  specs: {
    uptime: "99.9%",
    speed: "450ms",
    support: "24/7 Chat",
    storage: "50 GB SSD"
  },
  category: ["shared", "wordpress"],      // pick from: shared, wordpress, cloud, managed
  featured: false,
},
```

### Adding a New Blog Post
Find the `posts` array and copy-paste this template:

```javascript
{
  id: "my-post-slug",
  title: "Your Post Title Here",
  excerpt: "A 1-2 sentence summary of what the post is about.",
  author: "Your Name",
  date: "June 1, 2025",
  readTime: "6 min read",
  category: "Guides",                     // e.g. WordPress, Guides, SEO, Reviews
  image_color: "linear-gradient(135deg, #667eea, #764ba2)",  // CSS gradient
},
```

### Updating SEO Metadata
At the top of `index.html`, find the `<head>` section and update:
- `<title>` — page title (shown in Google)
- `<meta name="description">` — shown in search results
- `og:url`, `og:image` — social sharing preview
- `link rel="canonical"` — your actual domain URL

### Updating Site Name / Info
Search for `HostVault` in the HTML and replace with your brand name.

---

## 📁 File Structure

```
hosting-affiliate/
├── index.html          ← The entire website (edit this)
├── vercel.json         ← Vercel deployment config
├── src/
│   └── data/
│       └── content.js  ← Content reference file (not used by site, but useful reference)
└── README.md           ← This file
```

---

## 🎨 Customizing the Design

All colors are CSS variables at the top of the `<style>` section:

```css
--accent: #1a56db;       /* Main blue — change to your brand color */
--gold: #f59e0b;         /* Star/highlight color */
--ink: #0d1117;          /* Main text color */
```

---

## 💡 Tips

- **Affiliate links**: Replace all `affiliate_url` values with your actual affiliate/referral URLs
- **Domain**: In Vercel, go to Settings → Domains to add a custom domain (also free)
- **Analytics**: Add a free Google Analytics or Plausible snippet before `</body>`
- **Images**: To add real host logos, replace the `.host-logo` div with an `<img>` tag

---

## 📊 SEO Checklist

- [x] Meta title & description
- [x] Open Graph tags (Facebook, LinkedIn sharing)
- [x] Twitter Card tags
- [x] JSON-LD structured data (WebSite schema)
- [x] Canonical URL
- [x] Semantic HTML (h1, h2, h3, article, nav, footer)
- [x] Mobile responsive
- [x] Fast load (pure HTML/CSS/JS — no frameworks)
- [ ] Add your real domain to canonical URL
- [ ] Add og:image (1200×630px image)
- [ ] Submit sitemap to Google Search Console
