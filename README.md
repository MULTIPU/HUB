# MultiPU Hub — GitHub Pages + Supabase

This package excludes Cloudflare. Upload the contents of this folder to the root of the `MULTIPU/HUB` GitHub repository (the folder containing `index.html`).

## Included changes
- Filled the existing MultiPU Hub Supabase URL and browser-safe publishable key.
- Filled the Google OAuth client ID already associated with this project.
- Changed the TMWS launch/preview target to the included `working-system-unified.html` file, so the template is hosted with the Hub instead of pointing at the old separate site.
- Added a TMWS adapter that stores the template's `wms` state in `public.tmws_records` for the signed-in Supabase user. Device-only mode remains clearly labelled if the user has not authenticated.

## Before production use
1. In Supabase Authentication → URL Configuration, allow the deployed GitHub Pages URL (for example `https://multipu.github.io/HUB/` and `https://multipu.github.io/HUB/working-system-unified.html`).
2. In Supabase Authentication → Providers → Google, confirm the Google provider is enabled and uses the same Google OAuth client ID. Keep the Google Client Secret inside Supabase only; never place it in this repository.
3. Confirm the deployed GitHub Pages URL is the actual project Pages URL before sharing it.
4. Test sign-in, refresh, and a TMWS data change with a test account. Verify that a row appears in `public.tmws_records`.

The publishable key is intended for browser use; RLS remains the access-control boundary. No service-role key or Google client secret is included. This package does not claim that GitHub Pages has been updated automatically.
