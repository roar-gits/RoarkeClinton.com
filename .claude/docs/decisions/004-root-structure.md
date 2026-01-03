# ADR-004: Flatten Site Structure to Root

**Status**: Accepted
**Date**: 2025-12 (backfilled 2026-01-02)

## Context

Originally, site files lived in a nested folder structure:
```
RoarkeClinton.com/
└── GithubPagesSite/
    └── docs/
        └── index.html, etc.
```

This created:
- Confusing paths
- Extra nesting in URLs
- GitHub Pages configuration complexity

## Decision

Flatten all site files to repository root.

## Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| **Root deployment** | Simple paths, clean URLs | Less separation of concerns |
| /docs folder | GitHub Pages native | Adds /docs/ to mental model |
| gh-pages branch | Separation of source/build | More complex workflow |

## Consequences

**Positive**:
- Simpler mental model (root = live site)
- Cleaner file paths
- Direct push-to-deploy workflow

**Negative**:
- All files visible in repo root (some clutter)
- .claude/ folder alongside site files

## Implementation

Commits:
- `97a200e`: refactor: move site files from docs/ to root
- `e351d6d`: refactor: rename Website to docs for GitHub Pages compatibility
- `920589b`: refactor: flatten structure, rename GithubPagesSite to Website
