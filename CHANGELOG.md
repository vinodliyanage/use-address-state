# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-01-12

### Fixed

- Fixed type annotation for `value` to properly infer generic type `T`

## [1.0.0] - 2026-01-12

### Added

- Initial release
- `useAddressState` hook for syncing React state with URL search params
- TypeScript support with generics
- Selective re-rendering – only components subscribed to changed keys re-render
- Browser back/forward navigation support
- Zero dependencies
