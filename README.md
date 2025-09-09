<p align="center">
  <a href="https://github.com/renchris/panda-boilerplate">
    <img alt="Tailwind Logo" src="public/tailwind.png" width="60" />
  </a>
</p>
<h1 align="center">
  Tailwind Boilerplate
</h1>

A starter template that uses the NextJS App Router, TypeScript, and Tailwind CSS.

## ⚠️ Tailwind CSS v4 Breaking Changes (This repo is on v4)

Tailwind v4 is CSS-first and differs from v3 in a few important ways. If you see an unstyled page, double-check these:

- **Import Tailwind via CSS, not directives**
  - In `src/app/globals.css` the first line must be:
    ```css
    @import "tailwindcss";
    ```
  - Do not use `@tailwind base; @tailwind components; @tailwind utilities;` on v4.

- **PostCSS plugin**
  - `postcss.config.cjs` must reference the new plugin:
    ```js
    module.exports = {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    };
    ```

- **No config needed for content scanning**
  - The `content` array in `tailwind.config.*` is not required in v4. We keep a minimal config only for optional theme tokens; Tailwind auto-detects sources.

- **Avoid v3-only utilities**
  - Classes like `bg-background`, `border-border`, etc., only work if you define them. Prefer standard utilities (e.g., `bg-black`, `text-zinc-400`, `border-black/10`).

- **No responsive variants inside `@apply`**
  - `@apply sm:px-6` will fail on v4. Use raw CSS media queries or utility classes directly in JSX.

- **Globals must be imported**
  - Ensure `src/app/layout.tsx` imports `./globals.css`.

Reference: Tailwind v4 overview and migration notes — https://tailwindcss.com/blog/tailwindcss-v4

## 🧩 Current Patterns

- **Server-first architecture** with Next.js App Router. Layouts, pages, and most UI are Server Components; interactivity is isolated in Client Components.
- **Design tokens** are defined as CSS variables in `globals.css` and used via standard Tailwind utilities (e.g., `text-zinc-100`, `bg-zinc-950`).
- **Header** is a Server Component; tabs and profile dropdown are Client Components (leaf nodes) to keep client JS minimal.
- **Styling** uses Tailwind utilities directly in JSX. Shared spacing uses a `.container` helper defined in `globals.css` with regular CSS media queries (v4-safe).

## 👍 NextJS App Router

The Next.js App Router is the current standard for building applications using React's latest features.

The significant feature of Next.js App Router are [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components).

- Previously, with the Pages Router, each of your pages are rendered on the client or the server.

- Currently, with the App Router, your components within each page can be rendered on the client or the server.

This allows more of your application to receive the [benefits of server rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering).

## 🚀 Usage

First, install the dependencies:

```bash
pnpm install
```

Then, run the application:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 🎨 Code Style

We use ESLint for our code style. You may modify the ESLint rule set in the `.eslintrc.js` file. Include ESLint On Save in your code editor Preferences settings.

```JSON
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

See
- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Airbnb ESLint Style Guide](https://github.com/airbnb/javascript)
- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)


## 🧐 What's inside?

A quick look at the top-level files and directories where we made our feature changes in the project.

    src
    └── app
         ├── layout.tsx
         └── page.tsx
    eslintrc.js

1. **`/src/app`**: This directory will contain all of the code related to what you will see on the front-end of the site. `src` is a convention for “source code” and `app` is the convention for “app router”.

1. **`src/app/layout.tsx`**: This file contains the Root Layout. The JSX elements in this file applies onto all routes with routes being `{children}`. See [NextJS Documentation: Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

1. **`src/app/page.tsx`**: This file contains the code for the front-end page. See [NextJS Documentation: Pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)

1. **`eslintrc.js`**: This file contains the ESLint rule configuration.