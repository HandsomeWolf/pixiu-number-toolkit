import { describe, it, expect } from '@jest/globals';
import { numberToChineseCurrency, chineseCurrencyToNumber } from '../../../src';

describe('formatter', () => {
  it('digitUppercase', () => {
    expect(numberToChineseCurrency(123_456_789)).toBe(
      '壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整',
    );
    expect(numberToChineseCurrency(123.45)).toBe('壹佰贰拾叁元肆角伍分');
    expect(numberToChineseCurrency(120012)).toBe('壹拾贰万零壹拾贰元整');
    expect(numberToChineseCurrency(987650000)).toBe('玖亿捌仟柒佰陆拾伍万元整');
    expect(numberToChineseCurrency(-987650000)).toBe('欠玖亿捌仟柒佰陆拾伍万元整');
    expect(() => numberToChineseCurrency(1999999999999.99)).toThrow('金额超出可转换范围');
  });

  it('uppercaseToDigit', () => {
    expect(chineseCurrencyToNumber('壹拾贰万零壹拾贰元整')).toBe(120012);
    expect(chineseCurrencyToNumber('壹万叁仟肆佰伍拾陆元柒角捌分')).toBe(13456.78);
    expect(chineseCurrencyToNumber('玖亿捌仟柒佰陆拾伍万元整')).toBe(987650000);
    expect(chineseCurrencyToNumber('欠玖亿捌仟柒佰陆拾伍万元整')).toBe(-987650000);
  });
});
