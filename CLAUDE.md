# RoarkeClinton.com - Project Instructions

## Project Overview

Personal website for Roarke Clinton. Two directories:

- **`GithubPagesSite/`** - Production site hosted on GitHub Pages (the target)
- **`WebflowSite/`** - Webflow export (the reference/source of truth for design)

**Goal**: Keep GithubPagesSite visually synchronized with WebflowSite exports.

---

## Directory Structure

```
current/
├── GithubPagesSite/          # Production (GitHub Pages)
│   ├── css/styles.css        # Main stylesheet (sync target)
│   ├── index.html            # Homepage
│   ├── contact.html          # Contact page
│   └── images/               # Optimized images
│
├── WebflowSite/              # Reference (Webflow export)
│   ├── css/roarkeclinton.webflow.css  # Reference stylesheet
│   ├── index.html            # Reference HTML
│   └── ...                   # Other exported pages
│
└── .playwright-mcp/          # Playwright screenshots (temp)
```

---

## CSS Synchronization Workflow

When syncing CSS between Webflow and GitHub Pages:

### 1. Direct Code Comparison (Preferred)

**Always start by comparing CSS directly:**

```bash
# Find specific class in both files
grep -A 10 "\.classname {" WebflowSite/css/roarkeclinton.webflow.css
grep -A 10 "\.classname {" GithubPagesSite/css/styles.css
```

Or use the Grep tool to search both files in parallel:
- Search for the class/selector in Webflow CSS
- Search for the same in GitHub CSS
- Compare properties line by line

### 2. Key Differences to Watch

Webflow exports have specific patterns:
- Uses `grid-column-gap` / `grid-row-gap` instead of `gap`
- Often includes vendor prefixes
- May use different selector specificity (`.column.content-wrapper` vs `.content-wrapper.column`)
- Media queries at specific breakpoints: 991px (tablet), 767px (mobile landscape), 479px (mobile)

### 3. When Issues Are Reported

1. **Identify the affected element** - Get the class name(s)
2. **Read both CSS files** - Compare the relevant selectors
3. **Check for missing rules** - Webflow may have additional selectors GitHub lacks
4. **Check property values** - Same selector, different values
5. **Check media queries** - Responsive overrides may be missing

---

## Tool Usage Guidelines

### Playwright - When to Use

**Appropriate uses:**
- Functional testing (form submission, navigation, button clicks)
- Verifying page loads without errors
- Testing interactive JavaScript functionality
- Quick visual sanity check after major changes

**NOT appropriate for:**
- Detecting fine CSS positioning differences (not pixel-accurate)
- Comparing visual alignment between sites (too imprecise)
- Debugging layout issues (use code comparison instead)

### Playwright - Cost/Benefit

Each Playwright operation adds latency:
- `browser_navigate`: ~1-2 seconds
- `browser_resize`: ~0.5 seconds
- `browser_take_screenshot`: ~1 second
- `browser_snapshot`: ~0.5 seconds

**For CSS sync work**: Direct Grep/Read comparison is faster and more accurate.

### Recommended Approach for CSS Issues

```
1. User reports: "Element X is positioned wrong"

2. DO THIS (fast, accurate):
   - Grep for relevant classes in both CSS files
   - Read and compare the specific rules
   - Identify missing/different properties
   - Edit to match Webflow

3. AVOID THIS (slow, imprecise):
   - Take screenshot of site A
   - Take screenshot of site B
   - Try to visually compare pixel positions
   - Guess what CSS property might be wrong
```

### When Playwright IS Useful

After making CSS changes, a single screenshot can confirm the fix worked:
```
1. Make CSS edit based on code comparison
2. ONE screenshot to verify it looks correct
3. Commit
```

But don't use multiple screenshots trying to diagnose the problem.

---

## Common CSS Patterns

### Webflow Class Naming
- `.w-inline-block` - Inline block display
- `.w--current` - Current/active state
- `.w-richtext` - Rich text container

### Layout Classes
- `.block` - Flex container with row-reverse
- `.content-wrapper` - Content container
- `.content-wrapper.column` - Column layout variant
- `.vw` - Viewport-width based sizing

### Responsive Breakpoints
```css
@media screen and (max-width: 991px)  { /* Tablet */ }
@media screen and (max-width: 767px)  { /* Mobile Landscape */ }
@media screen and (max-width: 479px)  { /* Mobile Portrait */ }
```

---

## Git Workflow

- **Branch**: Work directly on `main` for this simple site
- **Remote**: `origin` → `github.com/roar-gits/RoarkeClinton.com`
- **Hosting**: GitHub Pages serves from `GithubPagesSite/` directory

### Commit Format
```
Brief description of change

- Bullet points for specific changes
- Reference Webflow if syncing styles

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
```

---

## Quick Reference

| Task | Tool | Why |
|------|------|-----|
| Compare CSS rules | Grep + Read | Fast, accurate, see exact differences |
| Find missing selectors | Grep both files | Quickly identify what's missing |
| Verify fix works | Playwright screenshot (1x) | Quick visual confirmation |
| Test form submission | Playwright | Functional testing |
| Debug layout issues | Read CSS directly | Screenshots don't show computed values |

---

## Files of Interest

| File | Purpose |
|------|---------|
| `GithubPagesSite/css/styles.css` | Main production stylesheet |
| `WebflowSite/css/roarkeclinton.webflow.css` | Reference stylesheet from Webflow |
| `GithubPagesSite/index.html` | Production homepage |
| `GithubPagesSite/contact.html` | Production contact page |
