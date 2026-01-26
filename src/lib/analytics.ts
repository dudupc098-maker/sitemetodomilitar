// This is a placeholder for your analytics tracking.
// In a real-world application, you would integrate this with Google Analytics,
// Facebook Pixel, or any other analytics service.

type EventName =
  | 'start_quiz'
  | 'question_answered'
  | 'finished_quiz'
  | 'opened_offer'
  | 'clicked_pro'
  | 'clicked_basic'
  | 'purchase_completed';

export const trackEvent = (
  eventName: EventName,
  params?: Record<string, any>
) => {
  // Prevent tracking on server-side rendering
  if (typeof window === 'undefined') {
    return;
  }

  console.log(`[ANALYTICS] Event: ${eventName}`, params || '');

  // Example for Google Analytics (if configured)
  // if (window.gtag) {
  //   window.gtag('event', eventName, params);
  // }

  // Example for Facebook Pixel (if configured)
  // if (window.fbq) {
  //   window.fbq('track', eventName, params);
  // }
};
