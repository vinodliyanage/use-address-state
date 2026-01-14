import { useRef } from "react";
import { useAddressState } from "@/lib";
import { CodeToggle } from "./code-toggle";

const CODE_SNIPPET = `// Counter A - subscribes to key "a"
const [countA, setCountA] = useAddressState("a", 0);

// Counter B - subscribes to key "b"
const [countB, setCountB] = useAddressState("b", 0);

// Static component - no useAddressState
// Never re-renders when counters change!`;

function RenderBadge({ count }: { count: number }) {
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${
        count > 1 ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
      }`}
    >
      {count}×
    </span>
  );
}

function CounterA() {
  const renderCount = useRef(0);
  renderCount.current++;

  const [count, setCount] = useAddressState("a", 0);

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
      <div className="flex items-center gap-3">
        <span className="text-neutral-400 text-sm">Counter A</span>
        <RenderBadge count={renderCount.current} />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCount((count ?? 0) - 1)}
          className="w-8 h-8 rounded bg-neutral-700 hover:bg-neutral-600 text-white text-sm transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center text-white font-medium">{count}</span>
        <button
          onClick={() => setCount((count ?? 0) + 1)}
          className="w-8 h-8 rounded bg-neutral-700 hover:bg-neutral-600 text-white text-sm transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

function CounterB() {
  const renderCount = useRef(0);
  renderCount.current++;

  const [count, setCount] = useAddressState("b", 0);

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
      <div className="flex items-center gap-3">
        <span className="text-neutral-400 text-sm">Counter B</span>
        <RenderBadge count={renderCount.current} />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCount((count ?? 0) - 1)}
          className="w-8 h-8 rounded bg-neutral-700 hover:bg-neutral-600 text-white text-sm transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center text-white font-medium">{count}</span>
        <button
          onClick={() => setCount((count ?? 0) + 1)}
          className="w-8 h-8 rounded bg-neutral-700 hover:bg-neutral-600 text-white text-sm transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

function StaticComponent() {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-800/50 border border-neutral-700/50">
      <div className="flex items-center gap-3">
        <span className="text-neutral-400 text-sm">Static (no state)</span>
        <RenderBadge count={renderCount.current} />
      </div>
      <span className="text-xs text-neutral-500">Should stay at 1×</span>
    </div>
  );
}

export function RerenderDemo() {
  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Selective Re-rendering</h2>
      <p className="text-neutral-400 text-sm mb-4">Only components subscribed to changed keys re-render</p>
      <div className="space-y-2">
        <CounterA />
        <CounterB />
        <StaticComponent />
        <CodeToggle code={CODE_SNIPPET} />
      </div>
    </section>
  );
}
