import { useSyncExternalStore, useCallback } from "react";
import { installHistoryPatch, PUSH_STATE_EVENT, REPLACE_STATE_EVENT } from "./core";

export function useAddressState<T = string>(key: string, initialValue?: T) {
  // Ensure history is patched when the hook is used
  installHistoryPatch();

  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener("popstate", callback);
    window.addEventListener(PUSH_STATE_EVENT, callback);
    window.addEventListener(REPLACE_STATE_EVENT, callback);
    return () => {
      window.removeEventListener("popstate", callback);
      window.removeEventListener(PUSH_STATE_EVENT, callback);
      window.removeEventListener(REPLACE_STATE_EVENT, callback);
    };
  }, []);

  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return null;
    return new URLSearchParams(window.location.search).get(key);
  }, [key]);

  const rawValue = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const value = rawValue === null ? initialValue : JSON.parse(rawValue);

  const setValue = useCallback((newValue: T | null) => {
    const params = new URLSearchParams(window.location.search);

    if (newValue == null) {
      params.delete(key);
    } else {
      params.set(key, JSON.stringify(newValue));
    }

    const newUrl = params.size ? `?${params}` : window.location.pathname;
    window.history.pushState(null, "", newUrl);
  }, [key]);

  return [value, setValue] as const;
}
