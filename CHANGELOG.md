# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Changed

- **Rule change:** Improved support for React 17 by extending `react/jsx-runtime`, which effectively disables the following rules:
  - [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md)
  - [`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)
- Updated npm dependencies

## 3.0.0 - 2021-11-28

### Changed

- **Breaking change:** This config is now for TypeScript only
- **Breaking change:** React support is opt-in: use `broilerplate/react` instead of `broilerplate` to add React support
- This config is now based on the following presets for simplified setup:
  - `eslint-config-airbnb`
  - `eslint-config-airbnb-typescript`
  - `eslint-config-prettier`

## 2.1.0 - 2020-08-31

### Changed

- **Rule change:** Disable `react/jsx-no-undef` in TypeScript files

## 2.0.0 - 2020-08-08

### Changed

- **Rule change:** Stricter import ordering, including alphabetic ordering (auto-fixable)

## 1.0.2 - 2020-07-26

### Added

- Documented using the Prettier configuration

## 1.0.1 - 2020-07-26

### Fixed

- Fixed package Node dependencies

## 1.0.0 - 2020-07-26

### Added

- **The first set of rules!** This is the first public release of this ESLint configuration.
