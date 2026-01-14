import { X } from "lucide-react";
import { useState } from "react";
import { useAddressState } from "@/lib";
import { CodeToggle } from "./code-toggle";

const CODE_SNIPPET = `const [tags, setTags] = useAddressState<string[]>("tags", []);

// Add a tag
const addTag = (tag: string) => {
  setTags([...tags, tag]);
};

// Remove a tag
const removeTag = (tagToRemove: string) => {
  setTags(tags.filter((t) => t !== tagToRemove));
};`;

const SUGGESTED_TAGS = ["react", "typescript", "hooks", "state", "url"];

export function ArrayDemo() {
  const [tags, setTags] = useAddressState<string[]>("tags", []);
  const [input, setInput] = useState("");

  const addTag = (tag: string) => {
    const trimmed = tag.trim().toLowerCase();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
    }
    setInput("");
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(input);
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">Array Example</h2>
      <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-4">
        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag..."
            className="flex-1 px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
          />
          <button
            onClick={() => addTag(input)}
            disabled={!input.trim()}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-neutral-700 disabled:text-neutral-500 text-white text-sm font-medium transition-colors"
          >
            Add
          </button>
        </div>

        {/* Suggested tags */}
        <div className="flex flex-wrap gap-2">
          {SUGGESTED_TAGS.filter((t) => !tags.includes(t)).map((tag) => (
            <button
              key={tag}
              onClick={() => addTag(tag)}
              className="px-2 py-1 rounded text-xs bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
            >
              + {tag}
            </button>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 min-h-[2rem]">
          {tags.length === 0 ? (
            <span className="text-neutral-500 text-sm">No tags added yet</span>
          ) : (
            tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm"
              >
                {tag}
                <button onClick={() => removeTag(tag)} className="hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </span>
            ))
          )}
        </div>

        {/* URL display */}
        <div className="text-sm text-neutral-500 pt-2 border-t border-neutral-800">
          Stored as{" "}
          <code className="text-emerald-400 break-all">
            {tags.length > 0 ? `?tags=${JSON.stringify(tags)}` : "(empty)"}
          </code>
        </div>

        <CodeToggle code={CODE_SNIPPET} />
      </div>
    </section>
  );
}
