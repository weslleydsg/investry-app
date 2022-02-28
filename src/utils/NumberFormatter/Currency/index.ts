export function formatCurrency(price: number): string {
  return Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
