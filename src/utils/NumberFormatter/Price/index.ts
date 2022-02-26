export function formatPrice(price: number): string {
  return Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
