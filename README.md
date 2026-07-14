# Letters from the Solomon Islands

A family mission-letter publication for President and Sister Court’s service in the Solomon Islands Honiara Mission.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Publishing

The site is a standard Next.js application deployed by Vercel. Every push to the GitHub repository’s `main` branch creates a production deployment.

New letters live under `app/letters/`, while archive metadata is maintained in `app/letters.ts`. Optimized website photographs live in `public/photos/`; full-resolution originals remain outside the repository.

## Commands

- `npm run dev` starts the local site.
- `npm run build` creates a production build.
- `npm run lint` checks the source.
