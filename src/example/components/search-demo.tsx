import { useAddressState } from "@/lib";
import { CodeToggle } from "./code-toggle";

const CODE_SNIPPET = `// SearchBar.tsx
const [query, setQuery] = useAddressState("search");

<input
  value={query || ""}
  onChange={(e) => setQuery(e.target.value)}
/>

// SearchResults.tsx (different file, same key!)
const [query] = useAddressState("search");

<div>Showing results for "{query}"</div>`;

export function SearchBar() {
  const [query, setQuery] = useAddressState("search");

  return (
    <div className="p-4 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
      <div className="text-xs text-neutral-500 mb-2 font-medium">SearchBar.tsx</div>
      <input
        value={query || ""}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to search..."
        className="w-full px-3 py-2 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
      />
    </div>
  );
}

export function SearchResults() {
  const [query] = useAddressState("search");

  return (
    <div className="p-4 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
      <div className="text-xs text-neutral-500 mb-2 font-medium">SearchResults.tsx</div>
      <div className="text-sm text-neutral-300">
        {query ? (
          <span>
            Showing results for "<span className="text-emerald-400">{query}</span>"
          </span>
        ) : (
          <span className="text-neutral-500">Type to see results...</span>
        )}
      </div>
    </div>
  );
}

export function SearchDemo() {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Shared State</h2>
      <p className="text-neutral-400 text-sm mb-4">Two components in different files share the same URL state key</p>
      <div className="space-y-3">
        <SearchBar />
        <SearchResults />
        <CodeToggle code={CODE_SNIPPET} />
      </div>
    </section>
  );
}
