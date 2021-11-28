# Broilerplate ESLint configuration

An opinionated ESLint configuration for projects using [TypeScript](https://www.typescriptlang.org/) and optionally [React](https://reactjs.org/) + [React hooks](https://reactjs.org/docs/hooks-intro.html).
This is a mashup of [Airbnb JavaScript code style conventions](https://github.com/airbnb/javascript) + [TypeScript enhancement on Airbnb ESlint config](https://www.npmjs.com/package/eslint-config-airbnb-typescript) + [Prettier](https://prettier.io/) + some opionated ESLint rule adjustements.

## Usage

Install to your project:

    npm i --save-dev eslint-config-broilerplate

Note that ESLint itself is a peer dependency and needs to be installed separately:

    npm i --save-dev eslint

Configure your `.eslintrc` in your project:

```json
{
  "root": true,
  "extends": "broilerplate"
}
```

**If you are using React**, then add this configuration instead:

```json
{
  "root": true,
  "extends": "broilerplate/react"
}
```

Also add the following line to your `package.json` to use the recommended Prettier configuration, included in this package:

```diff
 {
   "name": "my-app",
+  "prettier": "eslint-config-broilerplate/prettier.config",
   "dependencies": {}
 }
```

Run the linter:

    npx eslint . --ext .ts,.tsx

You might want to add these scripts to your project's `package.json`:

```diff
   "scripts": {
+    "lint": "eslint . --ext .ts,.tsx && prettier --check .",
+    "lint:fix": "eslint . --ext .ts,.tsx --fix && prettier --write ."
   },
```
