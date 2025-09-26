# eslint-config

A **shareable ESLint configuration** for modern JavaScript and TypeScript projects.  
It builds on top of **ESLint’s recommended rules** and **stylistic plugin defaults**,  
with optional presets for **React** and **Node.js**.  
Designed to be simple, consistent, and Prettier-compatible.

## 🚀 Install

This config only requires **eslint** and **@stylistic/eslint-plugin**.  
Other plugins (TypeScript, React, Prettier) are optional, depending on your project.

```bash
# npm
npm i -D eslint @stylistic/eslint-plugin @sheplu/eslint-config

# yarn
yarn add -D eslint @stylistic/eslint-plugin @sheplu/eslint-config

# pnpm
pnpm add -D eslint @stylistic/eslint-plugin @sheplu/eslint-config
```

## ⚡ Usage

Once installed, enable the config by creating an `eslint.config.js` file (for ESLint v9+):

```js
// eslint.config.js
import myConfig from "@sheplu/eslint-config";

export default defineConfig([
	{
		files: [ "**/*.{js,mjs,cjs}" ],
		plugins: { "@stylistic": stylistic },
		extends: [ myConfig ],
		languageOptions: {
			globals: globals.node,
		},
	}
]);
```

Or you can also load only the specific configuration you need:

```js
// eslint.config.js
import myConfig from "@sheplu/eslint-config/src/stylistic.js";

export default defineConfig([
	{
		files: [ "**/*.{js,mjs,cjs}" ],
		plugins: { "@stylistic": stylistic },
		extends: [ myConfig ],
		languageOptions: {
			globals: globals.node,
		},
	}
]);
```

## 📝 Scripts

Add common lint commands to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## Based on

* [eslint](https://github.com/eslint/eslint) 
* [stylistic](https://github.com/eslint-stylistic/eslint-stylistic) 
* [markdown](https://github.com/eslint/markdown/tree/main)
