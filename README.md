# esnahealthcare

Marketing site for [Esna Care B.V.](https://esnahealthcare.nl) — a Dutch
EU-licensed pharmaceutical wholesaler operating under WDA No. 16615 G and
GDP Certificate No. NL/G24/2053458.

Built with Next.js 16 (App Router) + React 19 + Tailwind 4 + Geist.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Theme branches

The `main` branch carries the active production theme. Three alternative
theme directions are available as branches for side-by-side comparison:

| Branch                    | Direction                                              |
| ------------------------- | ------------------------------------------------------ |
| `main`                    | I-SEC-inspired ribbon hero, royal-blue + green palette |
| `theme/cphi-inspired`     | Mirror of `main` (the active theme)                    |
| `theme/editorial-dossier` | Cream/paper base, hairline rules, no gradients         |
| `theme/swiss-clinical`    | Crisp white + bold solid color panels for rhythm       |

Switch between them with `git checkout` and reload the dev server.

## Deployment

Auto-deployed to Vercel from `main`. Preview deployments are created for
every branch push.
