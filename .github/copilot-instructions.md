# CambonOS website

- This repository is the standalone Hugo site; do not merge its Pages workflow with the package mirror pipeline.
- Use Hugo Extended 0.169.0 for local builds and CI.
- Spanish is the default language at `/`; English content is under `/en/` and paired with `.en.md` files.
- Keep the ISO URL and release label centralized in `[params]` in `hugo.toml`; identify the current artifact as `dev` until a stable release is published.
- Only publish installer, package, and distribution details confirmed by the CambonOS repositories.
- Preserve the supplied logo files and their included branding license; the logo files have SVG content and must keep `.svg` extensions.
- Do not commit generated `public/` output.