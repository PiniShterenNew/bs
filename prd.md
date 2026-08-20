## Overview

The Binyamin Stern website is a Hebrew-first, single-page Next.js experience for people seeking Windows and software support. Version 1 communicates the diagnostic-first service promise, clarifies software-only scope, explains the support journey, and makes contact actions immediately discoverable through the selected Human Recovery visual direction while withholding activation until real contact details are provided.

## Users & Personas

- **Windows user with an urgent software problem** — needs immediate relevance, plain-language guidance, and confidence that data and time are treated carefully.
- **Windows user planning setup or data transfer** — needs clear support for installations, settings, backup, migration, and software-based recovery without ambiguity about hardware services.

## Features (MoSCoW table)

| Feature | Priority | Description | Success Criteria |
|---|---|---|---|
| Immediate service positioning | Must | Hero identifies Windows/software support and the diagnostic-first promise for users who do not know the technical fault name. | Scope and both contact actions are visible within the first viewport at 390px and 1440px. |
| Responsive RTL homepage | Must | Complete single-page experience with authored desktop/mobile composition and correct mixed RTL/LTR text. | All required sections render at 390px and 1440px with zero horizontal overflow, overlap, or clipped controls. |
| Service and scope clarity | Must | Explain Windows, software, setup, backup, migration, security, and software recovery while excluding electronic hardware repair. | 100% of published service copy stays within the documented software-support boundary. |
| Guided process narrative | Must | Show the five-step path from first contact through diagnosis, explanation, resolution, and return to work. | All five steps are visible in correct RTL order and remain readable at both reference widths. |
| Accessible FAQ | Must | Expandable answers address timing, migration, slow computers, hardware scope, and Windows startup issues. | Every FAQ item toggles with mouse and keyboard in one action and exposes correct expanded state to assistive technology. |
| Working anchor navigation | Must | Navbar and footer links move to the relevant section. | 100% of navigation links resolve to an existing section ID and remain keyboard reachable. |
| Contact activation | Should | WhatsApp and telephone CTAs activate after verified contact values are supplied. | No fabricated destination exists; once configured, both links use valid wa.me and tel schemes. |
| Restrained motion system | Should | Gentle reveals and ambient hero movement support hierarchy without distracting from reading. | Motion is disabled or simplified when prefers-reduced-motion is active. |
| Decorative testimonials or ratings | Wont | Social proof not present in the source brief is excluded. | No testimonial, star rating, customer name, or certification is rendered. |

## User Stories

- "As a Windows user with an urgent software problem, I want to recognize Windows/software support in the first viewport so that I can decide relevance without scrolling."
- "As a Windows user with an urgent software problem, I want to see the diagnostic-first promise immediately so that I can understand the service approach in under 10 seconds."
- "As a Windows user planning setup or data transfer, I want the page to remain readable on my phone so that I can review every required section without horizontal scrolling."
- "As a Windows user with an urgent software problem, I want mixed Hebrew and English labels to read correctly so that I can understand all service terms without reversed text."
- "As a Windows user planning setup or data transfer, I want to see backup, migration, and software-recovery scope so that I can confirm relevance before contacting."
- "As a Windows user with an urgent software problem, I want hardware repair to be explicitly excluded so that I do not contact the wrong service."
- "As a Windows user with an urgent software problem, I want to see all five support steps so that I know what will happen before work begins."
- "As a Windows user planning setup or data transfer, I want explanation and price to appear before resolution in the process so that I can understand when approval occurs."
- "As a Windows user with an urgent software problem, I want to expand a relevant FAQ answer with one keyboard action so that I can get clarity without leaving the page."
- "As a Windows user planning setup or data transfer, I want FAQ answers to preserve the software-only scope so that I can avoid incorrect service expectations."
- "As a Windows user with an urgent software problem, I want navigation to reach each information section in one action so that I can find answers quickly."
- "As a Windows user planning setup or data transfer, I want footer navigation to mirror core sections so that I can continue browsing after reaching the page end."

## Non-Functional Requirements

- **Performance:** Production Largest Contentful Paint must be below 2.5 seconds on a simulated mid-tier mobile connection; generated photographs must use responsive formats and explicit dimensions.
- **Scalability:** Section data for services, process steps, principles, and FAQ must be represented as iterable typed content so one additional item can be added without changing the page grid markup.
- **Security:** The v1 site must make no client-side requests other than font/image delivery and must include no secrets, API keys, untrusted HTML injection, or fabricated contact destinations.
- **Availability:** The production build must render all informational content without requiring JavaScript hydration; interactive enhancements may hydrate client-side.
- **Compliance:** The page must meet WCAG 2.1 AA contrast and keyboard requirements, use semantic landmarks and controls, expose FAQ state, and honor prefers-reduced-motion.

## Out of Scope

- Hardware, electronics, motherboard, screen, power-supply, or soldering repair services.
- Booking, payment, authentication, customer portals, persistent forms, or backend integrations.
- Testimonials, ratings, customer names, certification claims, or invented social proof.
- Additional routes beyond the single homepage.
- Activation of phone or WhatsApp links before verified contact values are provided.

## Open Questions

1. [Owner: PM] What verified phone number and WhatsApp number should activate the production contact actions?
