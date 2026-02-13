# mgdoc

A documentation site built with Next.js and Fumadocs.

## Getting Started

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

| Path | Description |
| ---- | ------------|
| `lib/source.ts` | Content source adapter - the `loader()` function provides the interface to access your content |
| `lib/layout.shared.tsx` | Shared layout options |
| `source.config.ts` | MDX configuration file for customizing frontmatter schema and other options |
| `app/(home)` | Route group for landing page |
| `app/docs` | Documentation layout and pages |
| `app/api/search/route.ts` | Route handler for search functionality |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Fumadocs Documentation](https://fumadocs.dev) - Learn about Fumadocs
- [Fumadocs MDX Guide](https://fumadocs.dev/docs/mdx) - Introduction to MDX configuration
