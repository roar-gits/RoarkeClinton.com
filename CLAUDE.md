# RoarkeClinton.com - Project Instructions

---

## Project Type

| Setting | Value |
|---------|-------|
| **Type** | `static` |
| **Stack** | HTML/CSS + GitHub Pages |
| **Status** | `active` |

### Session Start: Credential Check

```bash
echo $ROARKECLINTON_GITHUB_TOKEN  # Required
```

---

## Project Overview

Personal website for Roarke Clinton. Site files live in root (served by GitHub Pages).

---

## Directory Structure

```
RoarkeClinton.com/
├── .envrc                    # Credential loading
├── .mcp.json                 # MCP server config
├── CLAUDE.md                 # This file
├── .claude/docs/             # Project documentation
├── css/styles.css            # Main stylesheet
├── index.html                # Homepage
├── contact.html              # Contact page
├── about.html                # About page
├── 404.html                  # Error page
├── images/                   # Optimized images
├── posts/                    # Blog posts
├── CNAME                     # Custom domain config
└── robots.txt, sitemap.xml
```

---

## Git Workflow

- **Branch**: Work directly on `main` for this simple site
- **Remote**: `origin` → `github.com/roar-gits/RoarkeClinton.com`
- **Hosting**: GitHub Pages serves from root (`/`)

### Commit Format
```
Brief description of change

- Bullet points for specific changes

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## Quick Reference

| Task | Tool | Why |
|------|------|-----|
| Edit styles | Edit `css/styles.css` | Main stylesheet |
| Verify changes | Playwright screenshot | Quick visual confirmation |
| Test form submission | Playwright | Functional testing |

---

## Files of Interest

| File | Purpose |
|------|---------|
| `css/styles.css` | Main stylesheet |
| `index.html` | Homepage |
| `contact.html` | Contact page |

---

## Responsive Breakpoints

```css
@media screen and (max-width: 991px)  { /* Tablet */ }
@media screen and (max-width: 767px)  { /* Mobile Landscape */ }
@media screen and (max-width: 479px)  { /* Mobile Portrait */ }
```

---

## 🔐 Credential Security (CRITICAL)

### This Project's Configuration

| Setting | Value |
|---------|-------|
| **GitHub Account** | `roar-gits` |
| **Token Variable** | `ROARKECLINTON_GITHUB_TOKEN` |
| **Username Variable** | `ROARKECLINTON_GITHUB_USERNAME` |
| **Credential File** | `~/.env.credentials/roarkeclinton.env` (600 permissions) |
| **Isolation** | direnv - only RoarkeClinton tokens loaded in this directory |
| **MCP Config** | `.mcp.json` |

### TRUE Credential Isolation
When Claude Code runs from this directory, only RoarkeClinton credentials are available.
Other projects' tokens (Iris, Palm Protectors, etc.) are NOT accessible.

### GitHub Tools (Dual-Path)

Both MCP tools and gh CLI are isolated to this project via `GITHUB_TOKEN` env var.

```bash
# Verify isolation
gh auth status  # Should show: roar-gits
```

### AI Self-Guidance - Security Rules

1. **NEVER embed tokens** in git remote URLs
2. **NEVER hardcode tokens** in .mcp.json - use `${VAR}` syntax
3. **Use MCP tools or gh CLI** - both are isolated via GITHUB_TOKEN
4. **Be explicit about repo**: `owner:roar-gits repo:RoarkeClinton.com`
5. **NEVER use `gh auth login`** - breaks per-project isolation
6. **After credential changes**: Run `~/Programming/Projects/.credential-system/scripts/audit.sh`

### Correct Usage
```bash
# MCP (preferred)
Use mcp__github__list_issues for owner:roar-gits repo:RoarkeClinton.com

# gh CLI (alternative - same isolation)
gh issue list
gh pr create --title "..." --body "..."
```

**Full credential documentation**: `~/Programming/Projects/.credential-system/README.md`
