/* Ugokiego site settings — the single place for business facts shown on the site.
 * Keep these in sync with the Stripe account (prices, trial, statement descriptor).
 */
window.SITE = {
  name: 'Ugokiego',
  url: 'https://ugokiego.net/',
  email: 'support@ugokiego.net',
  company: 'STRATA PINNACLE RESOURCE TRADING',
  address: 'Unit 7 No 510 Monsall Road, Manchester, United Kingdom, M40 8WN',
  // Must match the statement descriptor configured in Stripe.
  descriptor: 'UGOKIEGO.NET',
  trialHours: 1,
  // Annual Pro price per UI language.
  prices: {
    en: { amount: 99, currency: 'USD' },
    ja: { amount: 16999, currency: 'JPY' },
  },
  // Stripe Checkout URL per currency, created by the billing backend
  // (subscription with a 1-hour trial, then the annual price).
  checkoutUrl: {
    en: '',
    ja: '',
  },
};
