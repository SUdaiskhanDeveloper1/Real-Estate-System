export const formatPrice = (price: number, status?: string) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(price) + (status === 'For Rent' ? '/mo' : '');

export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
