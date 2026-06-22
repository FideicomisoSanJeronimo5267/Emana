import { useCallback } from "react";

export function useDataLayer() {
  const push = useCallback((event: string, params?: Record<string, string>) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  }, []);

  return { push };
}
