import { formatCurrency } from '.';

describe('Currency', () => {
  describe('formatCurrency', () => {
    it('formats one digit value', () => {
      const result = formatCurrency(3);
      expect(result).toBe('R$\xa03,00');
    });

    it('formats int value', () => {
      const result = formatCurrency(10);
      expect(result).toBe('R$\xa010,00');
    });

    it('formats float value', () => {
      const result = formatCurrency(134.45045);
      expect(result).toBe('R$\xa0134,45');
    });

    it('formats float value and round down', () => {
      const result = formatCurrency(45.4594567);
      expect(result).toBe('R$\xa045,45');
    });

    it('formats thousands', () => {
      const result = formatCurrency(343435.4567);
      expect(result).toBe('R$\xa0343.435,45');
    });
  });
});
