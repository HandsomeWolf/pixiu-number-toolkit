import { describe, it, expect } from '@jest/globals';
import { digitUppercase, uppercaseToDigit } from '../../../src';

describe('formatter', () => {
  it('digitUppercase', () => {
    expect(digitUppercase(123_456_789)).toBe(
      '壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整',
    );
    expect(digitUppercase(123.45)).toBe('壹佰贰拾叁元肆角伍分');
    expect(digitUppercase(120012)).toBe('壹拾贰万零壹拾贰元整');
    expect(digitUppercase(987650000)).toBe('玖亿捌仟柒佰陆拾伍万元整');
    expect(digitUppercase(-987650000)).toBe('欠玖亿捌仟柒佰陆拾伍万元整');
    expect(() => digitUppercase(1999999999999.99)).toThrow('金额超出可转换范围');
  });

  it('uppercaseToDigit', () => {
    expect(uppercaseToDigit('壹拾贰万零壹拾贰元整')).toBe(120012);
    expect(uppercaseToDigit('壹万叁仟肆佰伍拾陆元柒角捌分')).toBe(13456.78);
    expect(uppercaseToDigit('玖亿捌仟柒佰陆拾伍万元整')).toBe(987650000);
    expect(uppercaseToDigit('欠玖亿捌仟柒佰陆拾伍万元整')).toBe(-987650000);
  });
});
