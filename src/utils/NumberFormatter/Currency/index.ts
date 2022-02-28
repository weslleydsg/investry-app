export function formatCurrency(value: number): string {
  const roundedValue = Math.floor(value * 100) / 100;
  return Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(roundedValue);
}
