import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useAddressState } from "../src/lib";

describe("useAddressState", () => {
  beforeEach(() => {
    // Reset URL before each test
    window.history.replaceState(null, "", "/");
  });

  it("returns initial value when URL param is not set", () => {
    const { result } = renderHook(() => useAddressState("count", 0));
    expect(result.current[0]).toBe(0);
  });

  it("returns undefined when no initial value and URL param is not set", () => {
    const { result } = renderHook(() => useAddressState("name"));
    expect(result.current[0]).toBeUndefined();
  });

  it("updates URL when setValue is called", () => {
    const { result } = renderHook(() => useAddressState("count", 0));

    act(() => {
      result.current[1](5);
    });

    expect(window.location.search).toContain("count=5");
    expect(result.current[0]).toBe(5);
  });

  it("removes param from URL when setValue is called with null", () => {
    const { result } = renderHook(() => useAddressState("count", 0));

    act(() => {
      result.current[1](10);
    });
    expect(window.location.search).toContain("count=10");

    act(() => {
      result.current[1](null);
    });
    expect(window.location.search).not.toContain("count");
  });

  it("reads existing URL param on mount", () => {
    window.history.replaceState(null, "", "?name=%22John%22");

    const { result } = renderHook(() => useAddressState("name"));
    expect(result.current[0]).toBe("John");
  });

  it("preserves type for numbers", () => {
    const { result } = renderHook(() => useAddressState<number>("count", 0));

    act(() => {
      result.current[1](42);
    });

    expect(result.current[0]).toBe(42);
    expect(typeof result.current[0]).toBe("number");
  });
});
