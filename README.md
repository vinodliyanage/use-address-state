# use-address-state

[![npm version](https://img.shields.io/npm/v/use-address-state.svg)](https://www.npmjs.com/package/use-address-state)
[![bundle size](https://img.shields.io/bundlephobia/minzip/use-address-state)](https://bundlephobia.com/package/use-address-state)
[![license](https://img.shields.io/npm/l/use-address-state.svg)](https://github.com/vinodliyanage/use-address-state/blob/main/LICENSE)

A lightweight React hook for managing state in URL search params. Built with `useSyncExternalStore` for optimal performance and tear-free reads.

**[Live Demo →](https://uas.vinodliyanage.me/)**

**[View on npm →](https://www.npmjs.com/package/use-address-state)**

## Why use-address-state?

- **Tiny footprint** – ~1KB minified, zero dependencies
- **Selective re-rendering** – Only components subscribed to changed keys re-render
- **Shareable URLs** – State persists across page refreshes and link sharing
- **Full TypeScript support** – Generic types for complete type safety
- **Browser navigation** – Seamless back/forward button support

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

## Requirements

- React 18.0.0 or higher
- Modern browser with `URLSearchParams` support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE) © [Vinod Liyanage](https://github.com/vinodliyanage)
