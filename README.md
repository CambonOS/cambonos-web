# CambonOS website

Official bilingual website for CambonOS, built with Hugo and deployed independently from the package repository.

## Requirements

- Hugo Extended 0.169.0
- Git

## Local preview

From the repository root:

```sh
hugo server
```

Hugo prints the local preview URL. Build the production site with:

```sh
hugo --minify
```

The generated site is written to `public/` and is not committed.

## Content and settings

- Spanish is the default language; English pages live under `/en/`.
- Translated content is paired with `.en.md` files in `content/`.
- The ISO URL and `dev` label are configured once in `hugo.toml` under `[params]`.
- Branding assets are in `static/images/`; the included license is from the CambonOS branding package.

The configured download is a development build. Confirm its availability and replace `downloadURL` and `downloadLabel` in `hugo.toml` when publishing a new artifact. Do not describe it as stable until a stable release is available.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds on pushes to `main` and on manual runs. In the new GitHub repository, enable **Settings → Pages → Build and deployment → GitHub Actions**. The site workflow does not publish or alter the package mirror.

The canonical host is `cambonos.org`. Configure the custom domain in Pages and use these DNS records:

- Apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Apex `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
- `www` `CNAME`: `CambonOS.github.io`.

`static/CNAME` declares the canonical apex host. After DNS propagation and Pages domain verification, enable HTTPS and confirm that `www.cambonos.org` redirects to the canonical host.

## Repository status

The suggested repository name is `CambonOS/cambonos-web`; create it under the CambonOS GitHub organization before enabling deployment. The existing installer and package repositories remain separate projects.