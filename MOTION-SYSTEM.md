# VICTIS — Immersive Motion System

This motion pass was applied to the supplied final-draft ZIP. Existing page copy, section IDs, contact details, final logo assets (`victis-mark.png`, `victis-hero.png`, `victis-logo.png`), mobile navigation, product descriptions, and existing component interactions were preserved.

## Implemented

- **Cinematic atmosphere:** fixed architectural grid, vignette, cursor-following gold spotlight, and subtle edge glows.
- **Hero overlays:** crimson eclipse illumination and a restrained film-grain texture layered behind the existing orbital emblem.
- **Existing hero motion retained:** orbital rings, parallax, pointer-responsive emblem tilt, and staggered headline reveal.
- **Custom cursor:** fine-pointer-only cursor that expands over links and controls; native cursor remains on touch devices.
- **Scroll reveals:** IntersectionObserver-based reveal masks and upward movement for sections and their primary content containers.
- **Section accents:** gold/crimson rule draws across the top of each major section when it enters view.
- **Navigation feedback:** active section underline, with the existing scroll-progress line and mobile menu preserved.
- **Cinematic anchor transition:** a short dark-to-gold curtain sweep when navigating to in-page anchors.
- **Contact finale:** slow ambient halo behind the existing VICTIS logo and CTA.
- **Accessibility:** `prefers-reduced-motion` disables non-essential animation; coarse-pointer devices do not receive the custom cursor or pointer spotlight.

## Run locally

```bash
npm install
npm run dev
```

Before deployment:

```bash
npm run build
```

## Suggested QA

- Test the full page at mobile, tablet, and desktop widths.
- Check all anchor navigation and the mobile menu.
- Check keyboard focus visibility and tab navigation.
- Enable the operating system's reduced-motion setting and confirm the page remains calm and fully usable.
- Test on a lower-powered mobile device to assess particle canvas and blur performance.

## Future motion ideas (not added in this pass)

- A pinned horizontal chapter sequence for the story section, with a separate mobile vertical layout.
- A localized SVG displacement lens on selected product imagery only.
- A more elaborate orbital emblem handoff between sections.
