# ADR-003: Custom Swipe Navigation

**Status**: Accepted
**Date**: 2025 (backfilled 2026-01-02)

## Context

Mobile users need intuitive navigation between pages. Traditional hamburger menus require multiple taps. Swipe gestures feel more native on mobile devices.

## Decision

Implement custom touch swipe navigation with visual page indicators.

## Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| **Custom swipe JS** | Tailored to site needs, no dependencies | Development/maintenance effort |
| Hammer.js | Battle-tested library | Additional dependency (7KB) |
| CSS scroll-snap | Pure CSS solution | Limited control, less intuitive |
| No swipe (menu only) | Simpler | Worse mobile UX |

## Consequences

**Positive**:
- Native-feeling mobile experience
- Visual feedback during swipe (page dots)
- Smart conflict detection (avoids interfering with carousels, forms)
- Zero external dependencies

**Negative**:
- Custom code to maintain (~440 lines)
- Requires testing across devices

## Implementation

`js/swipe-navigation.js`:
- Configurable thresholds (50px distance, 300ms time)
- Visual swipe indicators
- Detects and avoids interactive elements
- Sequential page navigation
