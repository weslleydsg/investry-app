export function maskCurrency(value: string) {
  const digits = value.replace(/\D/g, '');
  if (digits.length > 2)
    return digits
      .replace(/^0+(\d)$/gm, '$1$2')
      .replace(/(\d)(\d{2})$/, '$1.$2');
  if (digits.length === 2) return digits.replace(/(\d{2})$/, '0.$1');
  if (digits.length === 1) return digits.replace(/(\d)$/, '0.0$1');
  return '';
}
