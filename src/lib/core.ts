export const PUSH_STATE_EVENT = "pushstate";
export const REPLACE_STATE_EVENT = "replacestate";

type HistoryMethod = "pushState" | "replaceState";

export function installHistoryPatch() {
  if (typeof window === "undefined") return;

  // Prevent double patching
  if ((window.history.pushState as any)._patched) return;

  const patch = (type: HistoryMethod) => {
    const original = window.history[type];
    return function (this: History, ...args: any[]) {
      const result = original.apply(this, args as [any, string, string | URL | null | undefined]);
      const event = new Event(type.toLowerCase());
      window.dispatchEvent(event);
      return result;
    };
  };

  window.history.pushState = patch("pushState");
  window.history.replaceState = patch("replaceState");
  (window.history.pushState as any)._patched = true;
}
