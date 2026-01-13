import { Code, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

interface CodeToggleProps {
  code: string;
  title?: string;
  language?: string;
}

export function CodeToggle({ code, title = "View Code", language = "tsx" }: CodeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 border-t border-neutral-800 pt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
      >
        <Code size={14} />
        <span>{title}</span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {isOpen && (
        <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="mt-3 p-4 rounded-lg overflow-x-auto text-sm"
              style={{ ...style, backgroundColor: "#0d1117" }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="inline-block w-8 text-neutral-600 select-none text-right mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )}
    </div>
  );
}
