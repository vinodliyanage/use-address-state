import { Lightbulb } from "lucide-react";
import { useAddressState } from "@/lib";
import { CodeToggle } from "./code-toggle";

const CODE_SNIPPET = `const [enabled, setEnabled] = useAddressState("enabled", false);

// Toggle the value
<button onClick={() => setEnabled(!enabled)}>
  Toggle
</button>

// Use the value
{enabled ? "ON" : "OFF"}`;

export function BooleanDemo() {
  const [enabled, setEnabled] = useAddressState("enabled", false);

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Boolean Example</h2>
      <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`p-3 rounded-full transition-all duration-300 ${
                enabled
                  ? "bg-amber-500/20 text-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-neutral-800 text-neutral-600"
              }`}
            >
              <Lightbulb size={28} className={enabled ? "fill-amber-400" : ""} />
            </div>
            <div>
              <div className="text-lg font-medium text-white">{enabled ? "Light is ON" : "Light is OFF"}</div>
              <div className="text-sm text-neutral-500">
                Stored as <code className="text-emerald-400">?enabled={String(enabled)}</code>
              </div>
            </div>
          </div>
          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              enabled ? "bg-emerald-500" : "bg-neutral-700"
            }`}
          >
            <span
              className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${
                enabled ? "left-7" : "left-1"
              }`}
            />
          </button>
        </div>
        <CodeToggle code={CODE_SNIPPET} />
      </div>
    </section>
  );
}
