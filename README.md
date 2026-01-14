# use-address-state

[![npm version](https://img.shields.io/npm/v/use-address-state.svg)](https://www.npmjs.com/package/use-address-state)
[![bundle size](https://img.shields.io/bundlephobia/minzip/use-address-state)](https://bundlephobia.com/package/use-address-state)
[![license](https://img.shields.io/npm/l/use-address-state.svg)](https://github.com/vinodliyanage/use-address-state/blob/main/LICENSE)

A lightweight React hook for managing state in URL search params. Built with `useSyncExternalStore` for optimal performance and tear-free reads.

**[Live Demo →](https://uas.vinodliyanage.me/)**

**[View on npm →](https://www.npmjs.com/package/use-address-state)**

## Motivation

Sometimes you want state that:

- Survives page refreshes
- Can be shared via URL
- Supports browser back/forward navigation
- Is accessible across components without prop drilling

This library treats the URL as a client-side state container, giving you a `useState`-like API that syncs with URL search params.

## How It Works

1. **Reads** from `window.location.search` via `URLSearchParams`
2. **Writes** using the native History API (`pushState`)
3. **Syncs** across components using React's `useSyncExternalStore`

Since it uses browser APIs directly (not React Router or Next.js router), it works alongside any routing solution without conflicts.

**Isolated by design:** This library only reads and writes URL search params (`?key=value`). It never touches the pathname or interferes with your router's navigation state. Your routing library handles page transitions; this library handles temporary UI state in the query string. They operate in parallel, completely independent of each other.

## Features

- ~1KB minified, zero dependencies
- Selective re-rendering per key
- Full TypeScript support
- SSR-safe with proper fallbacks
- Works with CRA, Vite, Next.js, Remix, etc.

## When to Use

- Search inputs and filters
- Pagination and sorting options
- Tab or accordion state
- Modal or drawer open/close state
- Form wizard step tracking
- Any UI state you want to persist across refreshes or share via link

## Limitations

- **Client-side only** – State lives in the browser URL, not on the server
- **String-based storage** – Values are JSON-serialized; not ideal for large objects
- **URL length limits** – Keep URLs under ~2000 chars for compatibility; avoid storing large data

## Installation

```bash
# npm
npm install use-address-state

# yarn
yarn add use-address-state

# pnpm
pnpm add use-address-state
```

## Quick Start

```tsx
import { useAddressState } from "use-address-state";

function SearchPage() {
  const [query, setQuery] = useAddressState("q");

  return <input value={query || ""} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />;
}
```

## API Reference

### `useAddressState<T>(key, initialValue?)`

Syncs a single URL search param with React state.

#### Parameters

| Parameter      | Type     | Required | Description                                |
| -------------- | -------- | -------- | ------------------------------------------ |
| `key`          | `string` | Yes      | The URL search param key to sync with      |
| `initialValue` | `T`      | No       | Default value when the param is not in URL |

#### Returns

`[value, setValue]` – A tuple similar to `useState`.

- `value` – Current value from URL (parsed from JSON) or `initialValue`
- `setValue(newValue)` – Updates the URL param. Pass `null` to remove it.

#### Examples

```tsx
// Basic string state
const [name, setName] = useAddressState("name");

// Typed state with default value
const [count, setCount] = useAddressState<number>("count", 0);

// Remove param from URL
setCount(null);
```

## Usage Patterns

### Shared State Across Components

Components using the same key automatically share state without prop drilling:

```tsx
// search-bar.tsx
export function SearchBar() {
  const [query, setQuery] = useAddressState("q");
  return <input value={query || ""} onChange={(e) => setQuery(e.target.value)} />;
}

// search-results.tsx
export function SearchResults() {
  const [query] = useAddressState("q");
  return <div>Results for: {query}</div>;
}
```

### Selective Re-rendering

Only components subscribed to a specific key re-render when that key changes:

```tsx
function CounterA() {
  const [count, setCount] = useAddressState("a", 0);
  // Only re-renders when 'a' changes
  return <button onClick={() => setCount(count + 1)}>A: {count}</button>;
}

function CounterB() {
  const [count, setCount] = useAddressState("b", 0);
  // Only re-renders when 'b' changes
  return <button onClick={() => setCount(count + 1)}>B: {count}</button>;
}
```

For more interactive examples, check out the **[Live Demo →](https://uas.vinodliyanage.me/)**

## Requirements

- React 18.0.0 or higher
- Modern browser with `URLSearchParams` support

## Contributing

Contributions are welcome! Here's how to get started:

```bash
# Clone the repo
git clone https://github.com/vinodliyanage/use-address-state.git
cd use-address-state

# Install dependencies
pnpm install

# Start dev server (runs the demo app)
pnpm dev

# Run tests
pnpm test

# Build the library
pnpm build:lib
```

**Before submitting a PR:**

- Run tests with `pnpm test`
- Keep changes focused and minimal
- Update documentation if needed

## License

[MIT](LICENSE) © [Vinod Liyanage](https://github.com/vinodliyanage)
