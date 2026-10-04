# MultiPU Hub — complete foundation

This package contains the current MultiPU Hub frontend, Cloudflare Worker backend, PWA files, and GitHub Pages workflow.

## What is now implemented
- MultiPU Hub core UI and AURA assistant.
- Persistent AURA conversation on the device.
- Human → robot → human physical 3D loader turn; the conflicting flat-transform rule has been removed.
- About overlay from the MultiPU Hub logo with Cancel/Back behavior.
- Partner / Offspring network UI and owner/admin Network Control Center.
- AiSMUS featured-market entry point (configurable; verify/replace the destination before launch).
- Cloud Intelligence status/health hooks and lifecycle fields: active, quiet, dormant, archived.
- Cloudflare Worker API backed by Supabase Postgres.
- Supabase database tables for profiles, sites, conversations/messages, appointments, support tickets, proposals, telemetry, health snapshots and system settings.
- PWA manifest, icons, 404 page and GitHub Pages workflow.
- No service-role database key is placed in the browser package.

## Backend setup
1. In Cloudflare Workers, create the Worker from `worker.js`.
2. Set variables in `wrangler.toml` and secrets:
   - `SUPABASE_URL=https://filsrgrxdkzkqaviowec.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service-role key (secret).
   - Optional `AI_BASE_URL` = your private Ollama-compatible gateway.
   - Optional STT/TTS/avatar URLs.
3. Deploy the Worker.
4. Put the deployed Worker URL into `MP.apiBase` in `index.html`.
5. If Google login is used, put the Google OAuth client ID into `MP.googleClientId` and authorize the deployed domain.

## Database
The Supabase production project has been initialized with the MultiPU Hub core schema. RLS is enabled. Public site discovery is readable; user-owned records are protected by auth policies; Worker service-role operations are server-side only.

## AiSMUS
The name is wired as the featured market destination, but the exact AiSMUS URL was not established by the supplied project materials. The current package uses a configurable official AISM destination as a safe placeholder. Replace it with the exact AiSMUS URL you own/operate before launch.

## Self-hosted AI
The Worker supports an Ollama-compatible endpoint. The voice/avatar stack is intentionally an integration boundary rather than bundled model binaries. You still need to deploy your chosen STT, TTS, orchestration and avatar services and place their private URLs in Worker secrets.

## GitHub
Upload the package contents to the `AiSMS` branch of `MULTIPU/HUB`. GitHub Pages can host the static frontend; the Worker and Supabase database are separate backend services.
