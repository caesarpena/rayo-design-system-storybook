<p align="center">
  <a href="https://caesarpena.com/">
    <img alt="Chromatic" src="https://caesarpena.com/wp-content/uploads/2018/01/caesarpena-logo.png" width="60" />
  </a>
</p>

<h1 align="center">
  RAYO Design System — <a href="https://thankful-mud-05ce3700f.1.azurestaticapps.net/" target="_blank" rel="noopener noreferrer">Storybook (React host for Lit Web Components)</a>
</h1>

This repo hosts **Storybook** for the `rayo-ux-web-design-system` package. It renders Lit **Web Components** inside Storybook’s **React** runtime via `@lit/react`, exposes **Controls/Actions** for props & events, and documents usage patterns with live examples.

> The components themselves live in the npm package `rayo-ux-web-design-system` (framework‑agnostic, themable via CSS variables). This repo focuses on docs, demos, and developer ergonomics.

---

## 🚀 Quick start

```bash
# 1) Clone
git clone <your-repo-url>
cd rayo-design-system-storybook

# 2) Install deps
# (Choose one)
pnpm i
# or
yarn
# or
npm i

# 3) Ensure the DS package is available
# If published: it will be installed from npm as a dep.
# If developing locally alongside the library, see "Developing against a local build" below.

# 4) Run Storybook
pnpm storybook   # or: yarn storybook / npm run storybook
# -> http://localhost:6006
```

### Developing against a local build (no publish required)

When iterating on the library and Storybook together:

- **Workspaces (recommended):** keep the storybook and DS package in a monorepo, declare them in the same workspace, and use `link:` or `workspace:` protocol.
- **Pack & install:** from the DS repo run `npm pack` to produce a `.tgz`, then in this repo: `npm i ../path/to/rayo-ux-web-design-system-x.y.z.tgz`.
- **yalc (alt):** `yalc publish` in DS → `yalc add rayo-ux-web-design-system` here.

> Tip: if custom elements fail to render, confirm the DS package is actually imported (see “How this works” below).

---

## 🧩 How this works

- **Lit Web Components** are registered by importing the library (e.g., `import { RayoButtonComponent } from 'rayo-ux-web-design-system/all'`).
- **React wrapper**: Storybook runs on React. We bridge a custom element to React with `createComponent` from `@lit/react`, so Controls/Actions work as expected.
- **Theming**: Components read **CSS variable tokens** (RGB triplets) like `--color-accent-600`. Stories can switch themes by overriding tokens in `preview.css` or per‑story decorators.

```ts
// Example wrapper (from stories)
import * as React from 'react';
import { createComponent } from '@lit/react';
import { RayoButtonComponent } from 'rayo-ux-web-design-system/all';

export const RayoButton = createComponent({
  tagName: 'rayo-button',
  elementClass: RayoButtonComponent,
  react: React,
  events: { onClick: 'onClick' }, // map CustomEvents -> Storybook Actions
});
```

---

## 📦 What’s in this repo

```
.
├── .storybook/           # Storybook config (vite, addons, preview globals)
├── public/               # Static assets for stories
├── src/stories/          # Stories for Rayo components (React wrappers)
│   ├── RayoBadge.stories.tsx
│   ├── RayoButton.stories.tsx
│   ├── RayoIcon.stories.tsx
│   └── RayoText.stories.tsx
├── package.json
├── tsconfig*.json
├── vite.config.ts
└── README.md
```

---

## 🧪 Story patterns used here

- **Args/Controls** for size/color enums:

```ts
import { sizes } from 'rayo-ux-web-design-system/enums/sizes';
import { colors } from 'rayo-ux-web-design-system/enums/colors';

const sizeOptions = ['', ...Object.values(sizes)];
const colorOptions = ['', ...Object.values(colors)];

argTypes: {
  size: { control: 'select', options: sizeOptions },
  badgeColor: { control: 'select', options: colorOptions },
}
```

- **Icon control with mapping** (for `@mdi/js` path data):

```ts
import { mdiHome, mdiArrowRight } from '@mdi/js';
const mdiIconSet = { None: '', Home: mdiHome, 'Arrow Right': mdiArrowRight };

argTypes: {
  icon: { control: 'select', options: Object.keys(mdiIconSet), mapping: mdiIconSet }
}
```

- **Actions** for component events:

```ts
events: { onClick: 'onClick', onFocus: 'onFocus' } // in createComponent
argTypes: { onClick: { action: 'clicked' } }       // in meta
```

---

## 🎨 Theming in stories

RAYO ships color/size tokens as **CSS variables** (RGB format). You can tweak them globally for the docs site:

```css
/* .storybook/preview.css */
:root {
  --color-accent-600: 219, 39, 119; /* example brand accent */
}
html[data-theme="dark"] {
  --color-neutral-900: 17, 24, 39;
  --color-white: 255, 255, 255;
}
```

Or per story via a decorator:

```ts
export const decorators = [
  (Story) => {
    const style = document.documentElement.style;
    style.setProperty('--color-accent-600', '219,39,119');
    return <Story />;
  }
];
```

---

## 🗺️ Example stories included

- **`RayoBadge.stories.tsx`**  
  Demonstrates numeric capping (`value` + `maxValue` → “99+”), size control (`sizes` enum), and `badgeColor` token select.

- **`RayoButton.stories.tsx`**  
  Appearance variants (`solid/accent/quiet/outline/danger/link`), icon placement, disabled state, and event actions.

- **`RayoIcon.stories.tsx`**  
  `size` (px) vs CSS-driven sizing, `opacity`, and token-driven fill (`color`/`fillColor`).

- **`RayoText.stories.tsx`**  
  Typographic presets (`appearance × size`) with semantic tag switching and optional leading icon.

---

## 🧰 Scripts

Add/adjust as needed in `package.json`:

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "lint": "eslint . --ext .ts,.tsx",
    "typecheck": "tsc --noEmit",
    "test": "storybook test"
  }
}
```

---

## ⚙️ Tooling

- **Runtime:** Storybook on React + Vite (`@storybook/react-vite`)
- **Bridge:** `@lit/react` (wraps Lit custom elements for React Controls/Actions)
- **Icons:** `@mdi/js` (path data mapped to the `icon` prop)
- **Types:** TypeScript
- **Build:** Vite
- **Optional addons:** `@storybook/addon-essentials`, `@storybook/addon-a11y`, `@storybook/addon-interactions`, `@storybook/test`

---

## 🧩 Troubleshooting

- **“Element not defined” / blank canvas** → Make sure you import from `rayo-ux-web-design-system/all` in each story (this registers the custom elements).
- **Props not changing** → Verify the prop is declared with Lit’s `@property` and reflected/consumed correctly; check the story’s `argTypes` key names match the component’s property names (`badgeColor` vs `badge-color`).
- **Events not firing in Actions** → Ensure the custom event names in `createComponent({ events: {...} })` match the component’s `dispatchEvent(new CustomEvent('...'))` names.
- **Styling tokens not applied** → Confirm your CSS variable overrides are set at `:root` or a container that contains the story iframe.

---

## 📄 License

MIT (for the docs in this repo). The component library’s license is defined in its own package.

---

### Appendix: Minimal usage examples

```tsx
// Button (React story)
export const Primary = {
  args: { appearance: 'solid', text: 'Save', icon: 'Arrow Right', iconPlacement: 'right' }
};
```

```tsx
// Badge (React story)
export const Capped = {
  args: { value: 120, maxValue: 99, size: 'md', badgeColor: 'accent' }
};
```

