import { RerenderDemo } from "./components/rerender-demo";
import { SearchDemo } from "./components/search-demo";
import { CounterDemo } from "./components/counter-demo";

function App() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white mb-3">use-address-state</h1>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            A tiny React hook for managing state in URL search params. Zero dependencies, full type safety.
          </p>
        </header>

        {/* Counter Demo */}
        <CounterDemo />

        {/* Shared State Demo */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Shared State</h2>
          <p className="text-neutral-400 text-sm mb-4">
            Two components in different files share the same URL state key
          </p>
          <SearchDemo />
        </section>

        {/* Re-render Demo */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Selective Re-rendering</h2>
          <p className="text-neutral-400 text-sm mb-4">Only components subscribed to changed keys re-render</p>
          <RerenderDemo />
        </section>

        {/* Footer */}
        <footer className="text-center text-neutral-600 text-sm">
          <p>Try navigating with browser back/forward buttons</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
