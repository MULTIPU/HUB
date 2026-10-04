# MultiPU Hub — Automating Excellence

This is the GitHub-ready MultiPU Hub package for the `AiSMS` branch.

## Included

- `index.html` — complete MultiPU Hub site, including AURA, site/template tools, account/settings flows, Partner/Offspring concepts, AiSMUS entry point, About overlay, universal Back behavior, and the human → robot → human loader transformation.
- `manifest.webmanifest` — PWA metadata.
- `icons/icon-192.png` and `icons/icon-512.png` — site/PWA icons.
- `404.html` — GitHub Pages fallback.
- `.github/workflows/pages.yml` — deploys the `AiSMS` branch to GitHub Pages.
- `worker.js` — optional Cloudflare Worker for shared site data, AURA API fallback, admin publishing and telemetry.
- `wrangler.toml` — Worker configuration template.

## GitHub Pages

1. Upload the contents of this package to the repository root on branch `AiSMS`.
2. In GitHub, open **Settings → Pages**.
3. Select **GitHub Actions** as the source if GitHub has not already selected it.
4. The included workflow deploys automatically after a push to `AiSMS`.

The static homepage does not require the Worker in order to open. The Worker is an optional server layer for shared data and live AURA behavior.

## Before connecting live services

At the top of the main script in `index.html`:

```js
var MP={paystackKey:'',googleClientId:'',apiBase:''}
```

- `googleClientId` is for Google sign-in.
- `apiBase` is the deployed Worker URL. Leave it empty until the Worker is actually deployed.
- `paystackKey` is only needed when live Paystack checkout is configured.

Do not put private API keys in `index.html`.

## Worker

The Worker is intentionally separate from GitHub Pages. To deploy it with Wrangler:

```bash
npx wrangler kv namespace create SITES
npx wrangler kv namespace create SITE_CONFIG
npx wrangler kv namespace create TELEMETRY
```

Put the returned KV IDs into `wrangler.toml`, then deploy from the folder containing `worker.js` and `wrangler.toml`:

```bash
npx wrangler deploy
```

Optional self-hosted AI/voice endpoints can be connected through Worker environment variables later. The static site remains usable when those services are not configured.

## Important loader behavior

The loader uses the embedded human and robot figures as two faces of one 3D turn. It runs:

**Human facing → physical rotation → robot facing → physical rotation → human facing**

It does not rely on a simple fade between the two figures. The surrounding energy/dot/orb sequence runs after the full turn and does not block the homepage from opening if an optional service is unavailable.
