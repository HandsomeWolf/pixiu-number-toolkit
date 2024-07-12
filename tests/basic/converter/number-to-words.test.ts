import { describe, it, expect } from '@jest/globals';
import { numberToWords } from '../../../src';

describe('numberToWords', () => {
  it('should return "零" for 0 in Chinese', () => {
    const result = numberToWords(0);
    expect(result).toBe('零');
  });

  it('should return the correct words for numbers less than 10000 in Chinese', () => {
    const result1 = numberToWords(1234);
    expect(result1).toBe('一千二百三十四');

    const result2 = numberToWords(4567);
    expect(result2).toBe('四千五百六十七');

    const result3 = numberToWords(7890);
    expect(result3).toBe('七千八百九十');

    const result4 = numberToWords(1202);
    expect(result4).toBe('一千二百零二');

    const result5 = numberToWords(120012);
    expect(result5).toBe('一十二万零一十二');
  });

  it('should return the correct words for larger numbers in Chinese', () => {
    const result1 = numberToWords(12_345_678);
    expect(result1).toBe('一千二百三十四万五千六百七十八');

    const result2 = numberToWords(9_876_543_210);
    expect(result2).toBe('九十八亿七千六百五十四万三千二百一十');

    const result3 = numberToWords(1);
    expect(result3).toBe('一');

    const result4 = numberToWords(10);
    expect(result4).toBe('十');
  });
  it('负数与小数', () => {
    const result1 = numberToWords(123.45);
    expect(result1).toBe('一百二十三点四五');

    const result2 = numberToWords(-0.789);
    expect(result2).toBe('负零点七八九');

    const result3 = numberToWords(-123);
    expect(result3).toBe('负一百二十三');

    const result4 = numberToWords(-1000000);
    expect(result4).toBe('负一百万');
  });
});
