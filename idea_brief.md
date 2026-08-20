# Binyamin Stern Website Redesign

## Problem Statement

People with Windows and software problems often do not know the technical name of the fault, are anxious about losing time or data, and may assume that the only solution is formatting the computer. The existing website direction feels generic and does not communicate Binyamin Stern's calm, diagnostic-first approach. The redesigned site must make the scope immediately clear, distinguish software support from hardware repair, explain the process in plain Hebrew, and create a confident path to contact without fabricating claims or contact details.

## Target Users

- **Windows user with an urgent software problem** — needs to understand quickly whether the service is relevant and what happens next; pain points include uncertainty, downtime, unfamiliar technical language, and concern about data.
- **Windows user planning setup or data transfer** — needs help with installations, settings, backup, migration, or software-based recovery; pain points include fear of losing files and unclear service boundaries.

## Success Metrics

- At 390px and 1440px reference widths, 100% of required homepage sections render without horizontal scrolling, overlap, clipped controls, or broken RTL order.
- Within the first viewport, users can identify the service as Windows/software support and find both contact actions without scrolling.
- All navigation anchors and FAQ expand/collapse controls complete their intended interaction in one action.
- 100% of service copy avoids claims of electronics or component-level hardware repair.
- Lighthouse accessibility score target is at least 95, with keyboard-visible focus and reduced-motion behavior.
- Largest Contentful Paint target is under 2.5 seconds on a simulated mid-tier mobile connection after production build.

## Open Questions

- What real phone number and WhatsApp number should activate the contact actions before production launch?

## Constraints

- Build the final implementation in Next.js as a responsive single-page website.
- Hebrew-first RTL; intentional English technical labels remain LTR.
- Use Heebo for Hebrew, Space Grotesk for English brand text, and IBM Plex Mono only for diagnostic microcopy.
- Preserve the authentic BS vector logo from Penpot.
- Use the selected “Human Recovery” visual direction: cinematic dark hero, warm ivory editorial sections, cobalt accent, large chapter numbers, photographic workspace imagery, and restrained technical signal language.
- Include navbar, hero, problems, services, diagnostic story, process, about, principles, FAQ, final CTA, and footer.
- Contact controls remain visibly disabled until real contact values are supplied.
- Do not invent testimonials, ratings, customer names, certifications, phone numbers, or unsupported service claims.
- Do not imply motherboard, screen, power-supply, soldering, or electronic-component repair.
- Respect prefers-reduced-motion and semantic interaction patterns.
