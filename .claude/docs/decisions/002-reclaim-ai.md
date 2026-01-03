# ADR-002: Reclaim.ai for Scheduling

**Status**: Accepted
**Date**: 2025 (backfilled 2026-01-02)

## Context

Need to offer meeting scheduling on the contact page without:
- Complex calendar integrations
- Monthly subscription costs
- Heavy embedded widgets

## Decision

Use Reclaim.ai scheduling links embedded in the contact page.

## Alternatives Considered

| Option | Pros | Cons |
|--------|------|------|
| **Reclaim.ai** | Lightweight, integrates with existing calendar | Less known than Calendly |
| Calendly | Industry standard, polished | Subscription cost, heavy widget |
| Cal.com | Open source | Self-hosting complexity |
| Simple email link | Zero dependencies | Poor UX, back-and-forth scheduling |

## Consequences

**Positive**:
- Clean, minimal integration (just links)
- Works with existing calendar
- Two slot types (flexible/priority) for different meeting contexts

**Negative**:
- External service dependency
- Less brand customization than Calendly

## Implementation

- Scheduling tab in contact.html
- Two link types: Flexible (general), Priority (important meetings)
