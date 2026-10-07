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

Daily scripture thoughts have a separate archive at `/scripture-thoughts`. Add entries to `app/scripture-thoughts/thoughts.ts`, preserving the original wording and using paragraph, scripture, and question blocks for formatting. Each entry automatically gets its own reading page; keep the newest entry first. Use the supplied day number when no date is available. Include chapter links in `chapters`. Group consecutive scripture verses into one block with a `paragraphs` array, preserving paragraph breaks and original text, and one Church scripture URL and `reference` for the range. Range links use `?lang=eng&id=p26-p27#p26` to mark the verses and scroll to the first verse in the Church's website or Gospel Library.

## Commands

- `npm run dev` starts the local site.
- `npm run build` creates a production build.
- `npm run lint` checks the source.
