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

## Push notifications

Readers manage device subscriptions at `/notifications`. iPhone readers must first add the site to their Home Screen and open it as a web app. Readers can choose letters, scripture thoughts, or both, and send a test that opens the latest post. No reader account is required.

Subscriptions and per-device delivery records live in an Upstash Redis store connected to the **personal** Vercel workspace. Server-only environment variables are `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` (the connected store's `mission_KV_REST_API_URL` and `mission_KV_REST_API_TOKEN`, or unprefixed `KV_REST_API_URL` and `KV_REST_API_TOKEN`, also work), `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, and `NOTIFICATIONS_PUBLISH_SECRET`. Keep the VAPID keys stable: replacing them requires readers to subscribe again. Never put private keys or Redis tokens in `NEXT_PUBLIC_*` variables.

The GitHub `Send new post notifications` workflow waits for the new commit to be live on the production domain before calling the protected publish endpoint. Set the same `NOTIFICATIONS_PUBLISH_SECRET` as a GitHub repository Actions secret. An hourly workflow retries pending deliveries. New slugs in `app/letters.ts` or `app/scripture-thoughts/thoughts.ts` trigger notifications; editing an existing slug does not. Current archive entries are marked as seen when a reader first subscribes, avoiding historical notifications. Turning a category on starts with future posts. Expired device subscriptions are removed automatically. A delivery interrupted after the push service accepts it but before storage records it can be retried; stable notification tags keep repeated deliveries together on the device.
