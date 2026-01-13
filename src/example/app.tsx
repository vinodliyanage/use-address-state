import { Github, Linkedin, Package } from "lucide-react";
import { RerenderDemo } from "./components/rerender-demo";
import { SearchDemo } from "./components/search-demo";
import { CounterDemo } from "./components/counter-demo";
import { BooleanDemo } from "./components/boolean-demo";
import { ArrayDemo } from "./components/array-demo";
import { ObjectDemo } from "./components/object-demo";
import { version } from "../../package.json";

function StackOverflowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56zM6.77 14.32l.37-1.76 8.79 1.85-.37 1.76-8.79-1.85zm1.16-4.21l.76-1.61 8.14 3.78-.76 1.62-8.14-3.79zm2.26-4.01l1.15-1.38 6.9 5.76-1.15 1.37-6.9-5.75zM14.64 2l-1.47 1.11 5.35 7.18 1.47-1.11L14.64 2zM6.59 18.4h9v-1.8h-9v1.8z" />
    </svg>
  );
}

function GravatarIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0a2.4 2.4 0 0 0-2.4 2.4v8.4c0 1.324 1.074 2.398 2.4 2.398s2.4-1.074 2.4-2.398V5.21a7.204 7.204 0 0 1 4.799 6.789 7.2 7.2 0 1 1-12.29-5.09 2.4 2.4 0 1 0-3.396-3.396A11.978 11.978 0 0 0 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0" />
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://github.com/vinodliyanage/use-address-state",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/vinodliyanage",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.npmjs.com/package/use-address-state",
    icon: Package,
    label: "npm",
  },
  {
    href: "https://gravatar.com/vinodliyanage",
    icon: GravatarIcon,
    label: "Gravatar",
    isCustomIcon: true,
  },
  {
    href: "https://stackoverflow.com/users/15084645/vinod-liyanage",
    icon: StackOverflowIcon,
    label: "Stack Overflow",
    isCustomIcon: true,
  },
];

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

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label, isCustomIcon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
                title={label}
              >
                {isCustomIcon ? <Icon size={18} /> : <Icon size={18} />}
              </a>
            ))}
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <a href="https://www.npmjs.com/package/use-address-state" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/npm/v/use-address-state.svg?style=flat-square" alt="npm version" />
            </a>
            <a href="https://bundlephobia.com/package/use-address-state" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/bundlephobia/minzip/use-address-state?style=flat-square"
                alt="bundle size"
              />
            </a>
            <a
              href="https://github.com/vinodliyanage/use-address-state/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.shields.io/npm/l/use-address-state.svg?style=flat-square" alt="license" />
            </a>
          </div>
        </header>

        {/* Counter Demo */}
        <CounterDemo />

        {/* Boolean Demo */}
        <BooleanDemo />

        {/* Array Demo */}
        <ArrayDemo />

        {/* Object Demo */}
        <ObjectDemo />

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
