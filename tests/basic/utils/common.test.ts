import { describe, it, expect } from '@jest/globals';
import { parseNumberDetails, padZero } from '../../../src';

describe('getDecimalInfo', () => {
  describe('should return correct decimal info', () => {
    it('when decimal places is 0', () => {
      const decimalInfo = parseNumberDetails(123);
      expect(decimalInfo.originalString).toBe('123');
      expect(decimalInfo.decimalIndex).toBe(3);
      expect(decimalInfo.decimalLength).toBe(0);
      expect(decimalInfo.integerPart).toBe('123');
      expect(decimalInfo.decimalPart).toBe('');
      expect(decimalInfo.integerLength).toBe(3);
    });

    it('when decimal places is 2', () => {
      const decimalInfo = parseNumberDetails(-123.45);
      expect(decimalInfo.originalString).toBe('-123.45');
      expect(decimalInfo.decimalIndex).toBe(3);
      expect(decimalInfo.decimalLength).toBe(2);
      expect(decimalInfo.integerPart).toBe('123');
      expect(decimalInfo.decimalPart).toBe('45');
      expect(decimalInfo.integerLength).toBe(3);
    });
  });
});

describe('padZero', () => {
  describe('should return original number string if no decimal places specified', () => {
    it('when decimal places is 0', () => {
      const paddedNumber = padZero(123);
      expect(paddedNumber).toBe('123');
    });
    it('when decimal places is 1', () => {
      const paddedNumber = padZero(123.4);
      expect(paddedNumber).toBe('123.4');
    });
  });

  describe('should return padded number string if decimal places specified', () => {
    it('when decimal places is 0', () => {
      expect(padZero(123, 0)).toBe('123');
    });
    it('when decimal places is 1', () => {
      expect(padZero(123, 1)).toBe('123.0');
      expect(padZero(123.4, 1)).toBe('123.4');
    });
    it('when decimal places is 2', () => {
      expect(padZero(123.45, 2)).toBe('123.45');
      expect(padZero(123, 2)).toBe('123.00');
    });
    it('when decimal places is 3', () => {
      expect(padZero(123, 3)).toBe('123.000');
      expect(padZero(123.456, 3)).toBe('123.456');
    });
  });
});
