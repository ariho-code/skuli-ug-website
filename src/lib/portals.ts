/**
 * Skuli UG runs two separate school systems from one platform:
 *
 *   • Skuli Primary   — Nursery, P1 – P7   (live)
 *   • Skuli Secondary — S1 – S6, O & A-Level
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ADDING THE SECONDARY PORTAL LINK
 * ─────────────────────────────────────────────────────────────────────────────
 * When the secondary system goes live, put its URL in SECONDARY_PORTAL_URL
 * below (no trailing slash) and the whole website switches on automatically:
 * the portal picker, the navbar, the footer, /systems and every call to action
 * start pointing at it and the "coming soon" wording disappears on its own.
 * Nothing else needs editing.
 */

export const PRIMARY_PORTAL_URL = 'https://school.skuliug.com:8443';

/** Leave as '' until the secondary system is live. */
export const SECONDARY_PORTAL_URL = '';

export type PortalKey = 'primary' | 'secondary';

export interface Portal {
  key: PortalKey;
  /** Product name, e.g. "Skuli Primary" */
  name: string;
  /** Short label used in tight spaces, e.g. "Primary" */
  short: string;
  /** Class range served, e.g. "Nursery · P1 – P7" */
  levels: string;
  /** One line describing who it is for */
  audience: string;
  /** Portal root URL, or '' when not yet live */
  url: string;
  /** What makes this edition different from the other one */
  highlights: string[];
}

export const PRIMARY: Portal = {
  key: 'primary',
  name: 'Skuli Primary',
  short: 'Primary',
  levels: 'Nursery · P1 – P7',
  audience: 'For nursery and primary schools preparing pupils for PLE.',
  url: PRIMARY_PORTAL_URL,
  highlights: [
    'PLE-style report cards with aggregates and divisions',
    'Four-subject grading with automatic D1 – F9 grades',
    'Class positions per stream and per class level',
    'AI comments written in primary-school language',
    'End-of-term promotion from P1 straight through to P7',
  ],
};

export const SECONDARY: Portal = {
  key: 'secondary',
  name: 'Skuli Secondary',
  short: 'Secondary',
  levels: 'S1 – S6 · O & A-Level',
  audience: 'For secondary schools running O-Level and A-Level.',
  url: SECONDARY_PORTAL_URL,
  highlights: [
    'UCE and UACE report formats, competency-based ready',
    'Subject combinations and optional-subject handling',
    'A-Level points, principal passes and subsidiaries',
    'Per-subject teachers across many streams',
    'Senior-level fee structures, boarding and requirements',
  ],
};

export const PORTALS: Portal[] = [PRIMARY, SECONDARY];

/** A portal is live once it has a URL. */
export function isLive(portal: Portal): boolean {
  return portal.url.length > 0;
}

/** Login URL for a live portal, or the contact page when it is not live yet. */
export function loginUrl(portal: Portal): string {
  return isLive(portal) ? `${portal.url}/login` : '/contact';
}

/** True once both systems are reachable. */
export const BOTH_PORTALS_LIVE = PORTALS.every(isLive);
