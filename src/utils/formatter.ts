export function formatPrice(amount: number, currency = 'EUR', locale = 'en-NL'): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
}
