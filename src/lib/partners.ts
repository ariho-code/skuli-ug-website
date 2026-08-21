/**
 * Schools running on Skuli UG.
 *
 * To add a school: drop its logo in `public/partners/` (a square PNG or SVG on
 * a white or transparent background works best) and add an entry below. The
 * home page, the About page and /systems all read from this list.
 */

import type { PortalKey } from './portals';

export interface Partner {
  name: string;
  /** Line under the name — motto, or town */
  motto: string;
  location: string;
  /** Which Skuli system the school runs */
  system: PortalKey;
  /** Path to the logo inside /public */
  logo: string;
  /** Since when, shown as "On Skuli since …" */
  since: string;
  /** Short line describing what they use it for */
  note: string;
}

export const PARTNERS: Partner[] = [
  {
    name: 'Paradise Christian School',
    motto: 'Be The Light',
    location: 'Uganda',
    system: 'primary',
    logo: '/partners/paradise-christian-school.svg',
    since: '2026',
    note: 'Runs report cards, mark sheets and fee tracking for the whole school on Skuli Primary.',
  },
];

export const PARTNER_COUNT = PARTNERS.length;
