# ⚠️Other branches support keystatic

# astro-theme-nexus

A minimalist blog. Built with Astro v5 and Tailwind v4, pursuing a clean, readable design.

## Features

- [x] Markdoc
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] fuzzy search & Search Filter
- [x] sitemap & rss feed
- [x] highly customizable
- [x] dynamic OG image generation for blog posts
- [x] Videos embed
- [x] view transition

### Site Config

- `src\site.ts`
  Configure site information, navigation bar, and social icons here.

Using the Material Design Icons icon pack,

[](https://icon-sets.iconify.design/mdi/)

- Favicon Config

> You need a favicon. It must be perfect, whatever the device or the platform. You want all formats, including the most recent SVG favicon. You need it now. No hassle, no hard question. You've found the right tool.

[](https://realfavicongenerator.net/)

- Site og image

Use any website to generate a 1200x630 image as the site's og image.

`public\static/1200x630.png`

## 🧞 Commands

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |
