import { describe, it, expect } from '@jest/globals';
import { numberToChineseUppercaseCurrency, chineseUppercaseCurrencyToNumber } from '../../../src';

describe('formatter', () => {
  it('digitUppercase', () => {
    expect(numberToChineseUppercaseCurrency(123_456_789)).toBe(
      '壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整',
    );
    expect(numberToChineseUppercaseCurrency(123.45)).toBe('壹佰贰拾叁元肆角伍分');
    expect(numberToChineseUppercaseCurrency(120012)).toBe('壹拾贰万零壹拾贰元整');
    expect(numberToChineseUppercaseCurrency(10000.21)).toBe('壹万元贰角壹分');
    expect(numberToChineseUppercaseCurrency(10000.20)).toBe('壹万元贰角');
    expect(numberToChineseUppercaseCurrency(10000.01)).toBe('壹万元壹分');
    expect(numberToChineseUppercaseCurrency(10000.00)).toBe('壹万元整');
    expect(numberToChineseUppercaseCurrency(987650000)).toBe('玖亿捌仟柒佰陆拾伍万元整');
    expect(numberToChineseUppercaseCurrency(-987650000)).toBe('欠玖亿捌仟柒佰陆拾伍万元整');
    expect(() => numberToChineseUppercaseCurrency(1999999999999.99)).toThrow('金额超出可转换范围');
  });

  it('uppercaseToDigit', () => {
    expect(chineseUppercaseCurrencyToNumber('壹拾贰万零壹拾贰元整')).toBe(120012);
    expect(chineseUppercaseCurrencyToNumber('壹万叁仟肆佰伍拾陆元柒角捌分')).toBe(13456.78);
    expect(chineseUppercaseCurrencyToNumber('玖亿捌仟柒佰陆拾伍万元整')).toBe(987650000);
    expect(chineseUppercaseCurrencyToNumber('欠玖亿捌仟柒佰陆拾伍万元整')).toBe(-987650000);
  });
});
