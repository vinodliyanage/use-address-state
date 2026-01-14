import { useState } from "react";
import { Check, Copy } from "lucide-react";

const INSTALL_COMMANDS = [
  { manager: "npm", command: "npm install use-address-state" },
  { manager: "pnpm", command: "pnpm add use-address-state" },
  { manager: "yarn", command: "yarn add use-address-state" },
];

export function InstallationDemo() {
  const [activeManager, setActiveManager] = useState("pnpm");
  const [copied, setCopied] = useState(false);

  const activeCommand = INSTALL_COMMANDS.find((c) => c.manager === activeManager)!;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeCommand.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Installation</h2>
      <div className="rounded-xl bg-neutral-900/50 border border-neutral-800 overflow-hidden">
        {/* Package Manager Tabs */}
        <div className="flex border-b border-neutral-800">
          {INSTALL_COMMANDS.map(({ manager }) => (
            <button
              key={manager}
              onClick={() => setActiveManager(manager)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeManager === manager ? "text-white bg-neutral-800/50" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {manager}
            </button>
          ))}
        </div>

        {/* Command */}
        <div className="flex items-center justify-between p-4">
          <code className="text-sm text-emerald-400 font-mono">{activeCommand.command}</code>
          <button
            onClick={handleCopy}
            className="p-2 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}
