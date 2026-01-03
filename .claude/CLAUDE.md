# RoarkeClinton.com

**Inherits**: `~/.claude/CLAUDE.md`

---

## Project

| Setting | Value |
|---------|-------|
| **Type** | `static` |
| **Stack** | HTML/CSS + GitHub Pages |
| **URL** | roarkeclinton.com |
| **Status** | Active |

---

## Session Bootstrap

```bash
echo $ROARKECLINTON_GITHUB_TOKEN  # Required
```

---

## Directory Structure

```
RoarkeClinton.com/
├── .envrc                    # Credential loading
├── .mcp.json                 # MCP server config
├── CLAUDE.md                 # Pointer to this file
├── .claude/docs/             # Project documentation
├── css/styles.css            # Main stylesheet
├── js/
│   ├── filter.js             # Article category filtering
│   └── swipe-navigation.js   # Mobile touch navigation
├── fonts/                    # Custom fonts
├── images/                   # Optimized images
├── posts/                    # Blog posts (7 articles)
├── index.html                # Homepage (Insights)
├── about.html                # Professional profile
├── contact.html              # Contact (forms, scheduling)
├── 404.html                  # Error page
├── CNAME                     # Custom domain config
├── robots.txt                # SEO config
└── sitemap.xml               # Search engine sitemap
```

---

## Documentation

| When | Read |
|------|------|
| Architecture overview | `docs/architecture.md` |
| External services | `docs/integrations.md` |
| Past decisions | `docs/decisions/` |
| Current work | `docs/initiatives/` |

---

## Git Workflow

- **Branch**: Work directly on `main`
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
| `index.html` | Homepage (article feed) |
| `about.html` | Professional profile |
| `contact.html` | Contact forms + scheduling |
| `js/swipe-navigation.js` | Mobile touch UX |

---

## Responsive Breakpoints

```css
@media screen and (max-width: 991px)  { /* Tablet */ }
@media screen and (max-width: 767px)  { /* Mobile Landscape */ }
@media screen and (max-width: 479px)  { /* Mobile Portrait */ }
```

---

## MCP Servers

| Server | Status | Purpose |
|--------|--------|---------|
| GitHub | Active | Repository operations |

---

## Credential Security

| Setting | Value |
|---------|-------|
| **GitHub Account** | `roar-gits` |
| **Token Variable** | `ROARKECLINTON_GITHUB_TOKEN` |
| **Username Variable** | `ROARKECLINTON_GITHUB_USERNAME` |
| **Credential File** | `~/.env.credentials/roarkeclinton.env` |
| **Isolation** | direnv - only RoarkeClinton tokens loaded |
| **MCP Config** | `.mcp.json` |

### Security Rules

1. **NEVER embed tokens** in git remote URLs
2. **NEVER hardcode tokens** in .mcp.json - use `${VAR}` syntax
3. **Use MCP tools or gh CLI** - both isolated via GITHUB_TOKEN
4. **Be explicit about repo**: `owner:roar-gits repo:RoarkeClinton.com`
5. **NEVER use `gh auth login`** - breaks per-project isolation

```bash
# Verify isolation
gh auth status  # Should show: roar-gits
```

---

## Session Lifecycle

1. **Start**: `git status`
2. **Work**: Use TodoWrite for multi-step tasks
3. **End**: Commit and push changes
