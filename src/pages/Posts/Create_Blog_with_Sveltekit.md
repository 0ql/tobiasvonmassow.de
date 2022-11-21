---
layout: "../../layouts/BlogPost.astro"
title: "How to create a static blog with SvelteKit, Mdsvex, PrismJS and Unocss"
description: "How to create a static blog with SvelteKit, Mdsvex, PrismJS and Unocss"
pubDate: "17 Jun 2022"
updatedDate: "7 Jul 2022"
---
### Set up the project

Create Directory and init
```bash
mkdir <my-app>
cd <my-app>
pnpm init
```

Install SvelteKit
```bash
pnpm add -D vite svelte @sveltejs/kit
```

### Configure package.json

Add `"type": "module"` to your `package.json` and optionally add these scripts
```json
/* package.json */
{
  "name": "<my-app>",
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "package": "vite package",
    "preview": "vite preview"
  },
}
```

to start the dev server
```bash
pnpm vite dev
```
if you copied the scripts
```bash
pnpm dev
```

By default SvelteKit looks for a `src/app.html` template file
```bash
mkdir src
touch src/app.html
```

It should look ruffly like this
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SvelteKit App</title>
  %sveltekit.head%
</head>

<body>
  <div id="svelte">%sveltekit.body%</div>
</body>

</html>
```

### SvelteKit configuration

The SvelteKit configuration lives in the `svelte.config.js` and `vite.config.js` files
```bash
touch svelte.config.js
touch vite.config.js
```
The full, default configuration is available [here](https://kit.svelte.dev/docs/configuration).

Create a new file `src/routes/index.svelte`, it will be served at the root.

### Setting up Unocss

Install Unocss, `@unocss/preset-icons @iconify/json` are optional for icon support
```bash
pnpm add -D unocss @unocss/core @unocss/preset-uno @unocss/preset-icons @iconify/json
```

```javascript
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    UnoCss({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons()
      ]
    })
  ]
};

export default config;
```

```javascript
// svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    prerender: {
      default: true
    }
  }
}

export default config;
```

add `import "uno.css` ideally to `src/routes/__layout.svelte` this way Unocss will work across all subroutes
```svelte
<script>
  import "uno.css";
</script>

<slot />
```

### Markdown support with [`mdsvex`](https://mdsvex.com/)
Install and configuration
```bash
pnpm add -D mdsvex
```
```javascript
// svelte.config.js
import { mdsvex } from "mdsvex"

const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({ extensions: ['.md', '.svx'] })
  ]
}
```

### [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) for imo necessities like global style tags
```bash
pnpm add -D svelte-preprocess
```
```javascript
// svelte.config.js
import preprocess from "svelte-preprocess"

const config = {
  preprocess: [
    preprocess()
  ]
}
```

### Typescript support (requires svelte-preprocess)
```bash
pnpm add -D typescript svelte-preprocess
```
Usage
```svelte
<script lang="ts">
</script>
```

### Generate static sites
To make SvelteKit generate static sites
```bash
pnpm add -D @sveltejs/adapter-static
```
```javascript
import adapter from '@sveltejs/adapter-static'

const config = {
  kit: {
    prerender: {
      default: true
    },
    adapter: adapter(),
  },
}
```

Final `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({ extensions: ['.md', '.svx'] }),
    preprocess()
  ],
  kit: {
    prerender: {
      default: true
    },
    adapter: adapter()
  }
}

export default config
```

Final `vite.config.js`:

```javascript
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    UnoCss({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons()
      ]
    })
  ]
}

export default config
```

### Syntax highlighting

To add syntax highlighting to your Markdown you have to add a theme
for example from [here](https://github.com/PrismJS/prism-themes).

Copy your theme of choice into a `<style global>` element in your `__layout.svelte`
or create a new file and import it from your html file.

```html
<!-- app.html -->
<head>
  <link rel="stylesheet" href="<FILENAME>.css">
</head>
```
