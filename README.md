# MultiPU Hub — Automating Excellence

Single-page site (no build step): `index.html`. Includes calligraphic design, light "circuit + current" and dark "stars, galaxies, black hole" backgrounds, a settings hub (appointments, preferences, support), the AURA AI agent, an owner Control Center, a maker QR/credit footer, and **double-tap / double-click anywhere = universal Back** (closes the top overlay, steps back through pages, then Home).

## Publish on GitHub Pages
1. Create a repo, upload everything in this folder, push to `main`.
2. Settings → Pages → Source: **GitHub Actions** (the included workflow deploys on every push).

## Before going live (3 settings at the top of the main script in `index.html`)
```js
var MP={paystackKey:'',googleClientId:'',apiBase:''}
```
- `googleClientId` — Google Cloud → Credentials → OAuth client (Web). Add your Pages URL as an authorized origin. Required for Google sign-in and for owner recognition.
- `apiBase` — URL of the deployed worker (below). Enables live-web AURA and publishing site edits to all visitors.
- Maker credit: edit the `maker-config` JSON block near the end of `index.html` (name, GitHub handle, repo URL). The footer QR points at this page, the repo, or your profile.

## Messages & contact → email
Contact form, organization applications, quote requests, tickets, appointment requests and worker requests are sent to **multipuhub@gmail.com** (cc **mdmasterdan@gmail.com**) through [FormSubmit](https://formsubmit.co). **One-time step:** send any test message, then open the activation email FormSubmit sends to multipuhub@gmail.com and confirm. If sending fails the visitor's email app opens with the message prefilled.

## Worker (AI with web search, shared edits)
```bash
cd worker && npx wrangler kv namespace create KV   # paste id in wrangler.toml
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler deploy
```

## Owners
`mdmasterdan@gmail.com` and `multipuhub@gmail.com` (Developer, Technical Admin, Management Admin) after Google-verified sign-in. **Security note:** the static site only gates the UI; real enforcement happens in the worker (it verifies the Google token). Appointments, tickets and team roles are stored per browser until moved to a shared database.

MIT licensed.
