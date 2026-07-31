// lib/analytics.ts
// Küçük yardımcı: GTM dataLayer'a ve gtag'e (GA4) tıklama olaylarını gönderir.

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackedEvent =
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "form_submit"
  | "cta_click";

export function trackEvent(
  eventName: TrackedEvent,
  params: Record<string, unknown> = {}
) {
  if (typeof window === "undefined") return;

  // GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });

  // GA4 gtag (GTM üzerinden GA4 bağlanmadıysa doğrudan da çalışsın diye)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
