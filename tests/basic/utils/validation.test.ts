import { describe, it, expect } from '@jest/globals';
import {
  isValidBlank,
  isValidChineseBankCard,
  isValidFileExtension,
  isValidNumeric,
  isValidThousandSeparatedNumber,
} from '../../../src';

describe('validation', () => {
  describe('isBlank', () => {
    it('should return true', () => {
      expect(isValidBlank(null as any)).toBe(true);
      expect(isValidBlank(undefined as any)).toBe(true);
      expect(isValidBlank('')).toBe(true);
      expect(isValidBlank(' ')).toBe(true);
      expect(isValidBlank(false as any)).toBe(true);
      expect(isValidBlank(0 as any)).toBe(true);
    });

    it('should return false', () => {
      expect(isValidBlank('null')).toBe(false);
      expect(isValidBlank(true as any)).toBe(false);
      expect(isValidBlank(1 as any)).toBe(false);
      expect(isValidBlank('a')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should return true', () => {
      expect(isValidNumeric(0)).toBe(true);
      expect(isValidNumeric(0.1)).toBe(true);
      expect(isValidNumeric(100.1)).toBe(true);
      expect(isValidNumeric('100.1')).toBe(true);
      expect(isValidNumeric('0.1')).toBe(true);
    });

    it('should return false', () => {
      expect(isValidNumeric(null as any)).toBe(false);
      expect(isValidNumeric(undefined as any)).toBe(false);
      expect(isValidNumeric({} as any)).toBe(false);
      expect(isValidNumeric([] as any)).toBe(false);
      expect(isValidNumeric('')).toBe(false);
      expect(isValidNumeric('abc')).toBe(false);
      expect(isValidNumeric('123abc')).toBe(false);
      expect(isValidNumeric('11,111')).toBe(false);
      expect(isValidNumeric('123.456.789')).toBe(false);
    });
  });

  describe('isValidThousandSeparatedNumber', () => {
    it('should return true', () => {
      expect(isValidThousandSeparatedNumber('1,000.1')).toBe(true);
    });

    it('should return false', () => {
      expect(isValidThousandSeparatedNumber(null as any)).toBe(false);
      expect(isValidThousandSeparatedNumber({} as any)).toBe(false);
      expect(isValidThousandSeparatedNumber([] as any)).toBe(false);

      expect(isValidThousandSeparatedNumber(0 as any)).toBe(false);
      expect(isValidThousandSeparatedNumber(100.1 as any)).toBe(false);

      expect(isValidThousandSeparatedNumber('')).toBe(false);
      expect(isValidThousandSeparatedNumber('0')).toBe(false);
      expect(isValidThousandSeparatedNumber('100.1')).toBe(false);

      expect(isValidThousandSeparatedNumber('1,00.1')).toBe(false);
      expect(isValidThousandSeparatedNumber('1,,000.1')).toBe(false);
      expect(isValidThousandSeparatedNumber('123,456789')).toBe(false);
    });
  });

  describe('other', () => {
    it('isValidFileExtension', () => {
      expect(isValidFileExtension('document.pdf', ['pdf', 'doc', 'docx'])).toBe(true);
      expect(isValidFileExtension('image.png', ['jpg', 'jpeg', 'gif'])).toBe(false);
    });
    it('isValidChineseBankCard', () => {
      expect(isValidChineseBankCard('6214854511980822')).toBe(true);
      expect(isValidChineseBankCard('1234567891234567')).toBe(false);
      expect(isValidChineseBankCard('9558822010005085629')).toBe(true);
    });
  });
});
