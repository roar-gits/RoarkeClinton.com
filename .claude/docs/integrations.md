<!-- Last updated: 2026-01-02 | Status: Active -->

# Integrations

## GitHub

| Setting | Value |
|---------|-------|
| **Owner** | `roar-gits` |
| **Repository** | `RoarkeClinton.com` |
| **Hosting** | GitHub Pages |

### Security Rules

1. **NEVER embed tokens** in git remote URLs
2. **NEVER hardcode tokens** in .mcp.json - use `${VAR}` syntax
3. **NEVER use `gh auth login`** - breaks per-project isolation

---

## Formspree

Serverless form handling for static sites.

| Form | Endpoint | Purpose |
|------|----------|---------|
| Contact | `mqaknbep` | Main contact form |
| Newsletter | `xwpkgjkd` | Email signup |

**Usage**: `action="https://formspree.io/f/{endpoint}"`

**Features implemented**:
- Multi-layer bot detection (timing, headless browser check)
- ARIA accessibility labels
- Success/error messaging

---

## Reclaim.ai

Meeting scheduling without Calendly overhead.

| Link Type | Purpose |
|-----------|---------|
| Flexible | General availability |
| Priority | High-priority meetings |

**Usage**: Embedded links in contact.html scheduling tab

---

## Google Analytics

| Property | ID |
|----------|-----|
| GTM Container | `GTM-NXLFDG2` |
| GA4 Property | `G-7VT7B20J3Y` |

**Implementation**: Script in `<head>` of all pages

---

## Structured Data (JSON-LD)

SEO schemas embedded in pages:

| Page | Schema Type |
|------|-------------|
| index.html | WebSite |
| about.html | Person |
| posts/*.html | Article |

**Verification**:
- Google Site Verification: Configured
- Facebook Domain Verification: Configured
