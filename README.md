<div align="center">
  <h1>flolu.de</h1>
  <p>My personal website</p>
</div>

## Usage

**Recommended Operating System**: Linux

**Setup**

- `npm install`, install required dependencies

**Development**

- `npm run dev`, start development server
- `npm run build`, build project
- `npm run start`, run project
- `npx ncu`, update npm packages

**YouTube API**

- Enable in [Google Cloud](https://console.cloud.google.com/apis/library/youtube.googleapis.com)
- Create [Credentials](https://console.cloud.google.com/apis/api/youtube.googleapis.com/metrics)
- Set `YOUTUBE_API_KEY` in `.env.local`

**Upgrade Dependencies**

- Update NPM dependencies (`npx npm-check-updates --interactive --format group`)
- Update `engines.node` in [`package.json`](package.json)

## Codebase

**Directories**

- [`pages`](pages) **TSX**, all pages of the site
- [`components`](components) **TSX**, react components
- [`public`](public) **Typescript**, static files
- [`lib`](lib) **Typescript**, shared utilities
- [`types`](types-service) **Typescript**, type definitions

**Built with**

- [Next.js](https://nextjs.org) **React**, framework
- [Tailwind](https://tailwindcss.com) **CSS**, framework
