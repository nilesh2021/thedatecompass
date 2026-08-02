export {};

declare global {
  interface Window {
    gtag: (
      command: string,
      targetIdOrEventName: string,
      config?: Record<string, unknown>
    ) => void;
  }
}