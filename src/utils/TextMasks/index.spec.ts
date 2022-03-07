import { maskCurrency } from '.';

describe('CurrencyMask', () => {
  describe('maskCurrency', () => {
    it('formats empty value', () => {
      const result = maskCurrency('');
      expect(result).toBe('');
    });

    it('formats one digit value', () => {
      const result = maskCurrency('3');
      expect(result).toBe('0.03');
    });

    it('formats double digits value', () => {
      const result = maskCurrency('10');
      expect(result).toBe('0.10');
    });

    it('formats many digits value', () => {
      const result = maskCurrency('13445045');
      expect(result).toBe('134450.45');
    });

    it('formats and removes all non-digits caracteres', () => {
      const result = maskCurrency(
        'qwertyuiop~!@#$%ˆ&*()-+\\}{POU4567}";/.,?zxcvbnm',
      );
      expect(result).toBe('45.67');
    });
  });
});
