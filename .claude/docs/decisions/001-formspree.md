# ADR-001: Formspree for Contact Forms

**Status**: Accepted
**Date**: 2025 (backfilled 2026-01-02)

## Context

The site needs form handling for:
- Contact form (message submission)
- Newsletter signup

As a static site hosted on GitHub Pages, there's no backend to process form submissions.

## Decision

Use Formspree for serverless form handling.

## Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| **Formspree** | Free tier, no backend, easy setup | Rate limits, external dependency |
| Netlify Forms | Integrated if using Netlify | Requires Netlify hosting |
| Custom backend | Full control | Hosting cost, maintenance overhead |
| EmailJS | Client-side | Exposes API keys |

## Consequences

**Positive**:
- No backend infrastructure needed
- Free tier sufficient for personal site traffic
- Built-in spam protection

**Negative**:
- External service dependency
- Rate limits on free tier (50 submissions/month)
- Form submissions go through third party

## Implementation

- Contact form: endpoint `mqaknbep`
- Newsletter: endpoint `xwpkgjkd`
- Added custom bot detection (timing + headless browser check)
