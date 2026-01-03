<!-- Last updated: 2026-01-02 | Status: Active -->

# Architecture

## Stack

| Layer | Technology |
|-------|------------|
| Type | Static site |
| Hosting | GitHub Pages |
| Domain | roarkeclinton.com |

---

## Directory Structure

```
RoarkeClinton.com/
├── index.html              # Homepage - article feed
├── about.html              # Professional profile
├── contact.html            # Contact forms + scheduling
├── 404.html                # Error page
├── css/
│   └── styles.css          # Main stylesheet (responsive)
├── js/
│   ├── filter.js           # Article category filtering
│   └── swipe-navigation.js # Mobile touch gestures
├── fonts/
│   ├── Manrope-VariableFont_wght.ttf
│   └── RC-BRAND-FONT.woff
├── images/                 # Profile, logos, thumbnails
├── posts/                  # 7 article pages
├── .claude/docs/           # Project documentation
├── CNAME                   # Custom domain
├── robots.txt              # SEO config
└── sitemap.xml             # Search engine sitemap
```

---

## Key Patterns

### Static Site Deployment
- GitHub Pages serves directly from repository root
- Push to `main` branch deploys automatically
- CNAME file configures custom domain

### Mobile UX
- **Swipe navigation**: Custom touch gestures for page transitions
- **Visual indicators**: Page position dots during swipe
- **Smart detection**: Avoids conflicts with interactive elements

### Form Handling
- **Formspree**: Serverless form processing (contact + newsletter)
- **Bot protection**: Timing validation, headless browser detection
- **Accessibility**: ARIA labels, keyboard navigation

### SEO/Structured Data
- **JSON-LD schemas**: Person, WebSite, Article
- **Google Analytics**: GA4 tracking
- **Social meta tags**: OpenGraph, Twitter cards
