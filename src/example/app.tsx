import { RerenderDemo } from "@/example/components/rerender-demo";
import { SearchDemo } from "@/example/components/search-demo";
import { CounterDemo } from "@/example/components/counter-demo";
import { BooleanDemo } from "@/example/components/boolean-demo";
import { ArrayDemo } from "@/example/components/array-demo";
import { ObjectDemo } from "@/example/components/object-demo";
import { InstallationDemo } from "@/example/components/installation-demo";
import { SocialLinks, Badges } from "@/example/components/social-links";
import { version } from "@/../package.json";

function App() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white">use-address-state</h1>
            <span className="px-2 py-0.5 text-xs font-medium bg-neutral-800 text-neutral-400 rounded-full">
              v{version}
            </span>
          </div>
          <p className="text-neutral-400 text-lg max-w-md mx-auto mb-6">
            A tiny React hook for managing state in URL search params. Zero dependencies, full type safety.
          </p>

          <SocialLinks />
          <Badges />
        </header>

        {/* Installation */}
        <InstallationDemo />

        {/* Counter Demo */}
        <CounterDemo />

        {/* Boolean Demo */}
        <BooleanDemo />

        {/* Array Demo */}
        <ArrayDemo />

        {/* Object Demo */}
        <ObjectDemo />

        {/* Shared State Demo */}
        <SearchDemo />

        {/* Re-render Demo */}
        <RerenderDemo />

        {/* Footer */}
        <footer className="text-center text-neutral-600 text-sm space-y-2">
          <p>Try navigating with browser back/forward buttons</p>
          <p className="text-neutral-700">
            Built with ❤️ by{" "}
            <a
              href="https://vinodliyanage.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              Vinod Liyanage
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
