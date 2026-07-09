<div align="center">
  <img src="public/kp-sign.png" width="100" height="100" alt="PTAKK Logo" />
  <h1>ptakk dev</h1>
  <p><strong>Developer portfolio powered by a headless CMS – fast, minimalist, content-driven.</strong></p>
  <br />

  <p>
    <img src="https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Sass-1-CC6699?logo=sass&logoColor=white" alt="Sass" />
    <img src="https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white" alt="Sanity" />
    <img src="https://img.shields.io/badge/Node.js-Adapter-5FA04E?logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/AOS-Animations-007FFF?logoColor=white" alt="AOS" />
  </p>
</div>

<hr />

## 📖 Overview

**PTAKK** is the personal portfolio of Kamil Ptak – a full-stack developer specialising in modern web applications and AI-driven solutions. The site combines a minimalist design with a fully-featured headless CMS built on Sanity, making it possible to manage content (projects, site profile, career timeline) without touching source code.

The project runs in SSR (Server-Side Rendering) mode via the Node.js standalone adapter, so every route is rendered on the server with live data pulled from Sanity on each request.

---

## ✨ Key Features

- 🏠 **Home** – Animated hero section with a tech stack list fetched dynamically from the CMS.
- 👤 **About** – Personal bio, technology icons, and an interactive career timeline rendered as an overlay modal (ImmersiveTimeline).
- 🗂️ **Projects** – Project listing pulled from Sanity, with dedicated dynamic detail pages for each project.
- ✉️ **Contact** – Minimal contact page with direct email link and social media navigation.
- 📝 **Blog** – Article section managed entirely through Sanity (`post` document type).
- 🎨 **Page Transitions** – View Transitions API via Astro `<ClientRouter>` for smooth, SPA-like navigation without a full page reload.
- 📦 **Sanity Studio** – Embedded CMS panel running in parallel with the web application.
- 🔍 **SEO** – Full meta tag suite (Open Graph, Twitter Card, canonical URL) on every page.

---

## 🧱 Tech Stack

| Area | Technologies |
|---|---|
| **Framework** | [Astro 7](https://astro.build/) SSR mode, [TypeScript 6](https://www.typescriptlang.org/) |
| **Styling** | [Sass/SCSS](https://sass-lang.com/) – modular architecture (abstracts, base, components, pages) |
| **CMS** | [Sanity v3](https://www.sanity.io/) – headless CMS with a co-located Sanity Studio |
| **Animations** | [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll), Astro View Transitions |
| **Runtime** | [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) – standalone Node.js adapter |
| **Images** | [Sharp](https://sharp.pixelplumbing.com/) – server-side image optimisation |
| **Dev Tools** | [concurrently](https://github.com/open-cli-tools/concurrently) – runs web app and CMS in parallel |

---

## 🗂️ Project Architecture

```text
ptakk/
├── public/                 # Static assets (favicons, OG image)
├── src/
│   ├── assets/             # Images and emoji imported by components
│   ├── components/         # Astro components
│   │   ├── Home.astro              # Hero section for the home page
│   │   ├── ImmersiveTimeline.astro # Career timeline overlay modal
│   │   ├── Navbar.astro            # Navigation (transparent / solid)
│   │   └── ProjectDetails.astro   # Single project detail view
│   ├── layouts/
│   │   └── Layout.astro    # Root layout with <head>, SEO tags, and View Transitions
│   ├── pages/              # Astro file-based routing
│   │   ├── index.astro             # Home page
│   │   ├── o-mnie.astro            # About page
│   │   ├── projekty.astro          # Projects listing
│   │   ├── projekty/[slug].astro   # Dynamic project detail pages
│   │   ├── kontakt.astro           # Contact page
│   │   ├── blog/                   # Blog sub-pages
│   │   └── 404.astro               # Custom 404 page
│   ├── styles/
│   │   └── main.scss       # SCSS entry point (modular partials)
│   └── utils/
│       └── sanity.ts       # Sanity client, TypeScript types, GROQ queries, helpers
└── studio/                 # Sanity Studio (CMS panel)
    ├── schemas/
    │   ├── project.ts          # Project document schema
    │   ├── post.ts             # Blog post document schema
    │   └── siteProfile.ts      # Site profile singleton schema
    └── sanity.config.ts    # Sanity Studio configuration
```

---

## 🔄 Data Flow

```text
Sanity CMS (GROQ queries)
          ↓
sanity.ts → getProjects() / getProject() / getSiteProfile()
          ↓
Astro SSR (server rendering per request)
          ↓
Astro components → HTML + View Transitions → Browser
```

- **Sanity** supplies all dynamic content via GROQ – projects, site profile, career experience, blog posts.
- **Fallback** – `getSiteProfile()` returns hardcoded default data when Sanity is unreachable.
- **Astro SSR** renders every page on the server at request time.
- **View Transitions API** delivers seamless page-to-page navigation without a full browser reload.

---

## 🚀 Local Setup

### Requirements

- Node.js **18 or newer**
- npm
- A [Sanity](https://www.sanity.io/) project matching the app's schemas, or your own project with the schemas imported

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PTK030/ptakk.git
   cd ptakk
   npm install
   ```

2. **Install Sanity Studio dependencies:**
   ```bash
   cd studio && npm install && cd ..
   ```

3. **Configure environment variables** *(optional – the project ships with a public Sanity project ID)*:
   ```env
   # .env.local
   SANITY_PROJECT_ID=3tqu1b7o
   SANITY_DATASET=production
   ```

4. **Start the web app and CMS in parallel:**
   ```bash
   npm run dev
   ```
   - Web application: [http://localhost:4321](http://localhost:4321)
   - Sanity Studio: [http://localhost:3333](http://localhost:3333)

### Available Commands

```bash
npm run dev          # Runs web app + Sanity Studio in parallel
npm run dev:web      # Astro dev server only
npm run dev:studio   # Sanity Studio only
npm run build        # Production build
npm run start        # Preview the production build
```

---

## 📋 Sanity Schemas

| Schema | Type | Description |
|---|---|---|
| `siteProfile` | Singleton | Tech stack list, career experience entries, section titles |
| `project` | Document | Project: title, description, category, tech tags, slider images, demo and GitHub links |
| `post` | Document | Blog post with Portable Text rich content |

> **Note:** Sanity Studio runs on port **3333** by default. Schemas are managed locally – no `sanity deploy` is required after schema changes.

---

## 🌐 Key Integrations

- **Sanity** – Headless CMS powering all dynamic content: projects, experience timeline, and blog. Data is fetched server-side via GROQ during SSR rendering.
- **@sanity/image-url** – URL builder for Sanity images with full crop and hotspot support.
- **@portabletext/to-html** – Converts Portable Text (Sanity's rich text format) to HTML on the server.
- **AOS (Animate On Scroll)** – Scroll-triggered entrance animations, initialised on the client side.
- **Astro View Transitions** – Native Page Transitions API integration providing an SPA-like experience with zero extra JavaScript overhead.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a branch that describes the change.
3. Preserve the SCSS module structure and avoid adding dependencies without a clear reason.
4. Verify the build passes: `npm run build`.
5. Open a Pull Request describing the problem, the solution, and how it was verified.

*Do not include `.env.local` files or any API keys in pull requests.*

---

## 📜 License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

> *Code that solves problems, not creates them.*
