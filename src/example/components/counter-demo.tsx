import { useAddressState } from "../../lib";

export function CounterDemo() {
  const [count, setCount] = useAddressState("count", 0);

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Counter Example</h2>
      <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-semibold text-white mb-1">{count}</div>
            <div className="text-sm text-neutral-500">
              Stored as <code className="text-emerald-400">?count={count}</code>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCount((count ?? 0) - 1)}
              className="w-12 h-12 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xl font-medium transition-colors"
            >
              −
            </button>
            <button
              onClick={() => setCount((count ?? 0) + 1)}
              className="w-12 h-12 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xl font-medium transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
