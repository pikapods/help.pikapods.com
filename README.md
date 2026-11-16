# PikaPods Help Center

Has the content of the PikaPods help site at [docs.pikapods.com](https://docs.pikapods.com). Feel free to open a pull request if you notice any mistake or would like to add something.

## Setup
- Node.js 24 (pinned in `.node-version`; on Fedora: `dnf install nodejs24`)
- pnpm (version pinned in `package.json`)
- Install dependencies: `pnpm install`

## Develop
- Dev server: `pnpm dev` (http://localhost:4321)
- Production build: `pnpm build` (output in `dist/`, also validates internal links)
- Preview the build: `pnpm preview`

Pages live in `src/content/docs/`. Sidebar structure is set in `astro.config.mjs`, ordering per page via `sidebar.order` front matter. Use `.mdx` only for pages that need components like `<Tabs>`.

App help pages in `src/content/docs/apps/` are added to the sidebar automatically, but also need an entry in `apps/index.md`. New tutorials need an entry in the sidebar and in `tutorials/index.md`.

Existing URLs are linked from the control panel and other sites, so change titles and labels rather than file paths.

Images and videos live in `public/`, mirroring the page path (e.g. `public/tutorials/photo/photoprism-1-basics/`). Always reference them with absolute paths, since pages are served without a trailing slash.

### Embed Videos

Embed tutorial videos muted with a normal video tag:
```html
<video controls loop muted preload="none" src="/tutorials/photo/photoprism-1-basics/1-search-photos.mp4" poster="/tutorials/photo/photoprism-1-basics/1-search-photos.webp"></video>
```

To create the preview poster (webp format), use ffmpeg:
```bash
ffmpeg -i 1-search-photos.mp4 -ss 00:00:00.001 -vframes 1 1-search-photos.webp
```

## Deployment
Cloudflare Pages: build command `pnpm run build`, output directory `dist`.

## Credits
- Framework: [Starlight](https://starlight.astro.build)
- Colors: [Material colors](https://vuetifyjs.com/en/framework/colors#colors)
