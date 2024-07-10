import { describe, expect, it } from '@jest/globals';
import { CurrencyUnit, currency, convertCurrencyToNumber } from '../../src';


describe('currency', () => {
  it('基本用法', () => {
    expect(currency(3500)).toBe('3,500');
    expect(currency('3500')).toBe('3,500');
    expect(currency(-3500)).toBe('-3,500');
    expect(currency('-3500')).toBe('-3,500');
    expect(currency(3500, { style: 'currency' })).toBe('¥3,500.00');
    expect(currency('3500', { style: 'currency' })).toBe('¥3,500.00');
    expect(currency(-3500, { style: 'currency' })).toBe('-¥3,500.00');
    expect(currency('-3500', { style: 'currency' })).toBe('-¥3,500.00');
    expect(currency(-3500, { prefix: '¥', minimumFractionDigits: 2 })).toBe('¥-3,500.00');
    expect(currency('-3500', { prefix: '¥', minimumFractionDigits: 2 })).toBe('¥-3,500.00');

    expect(currency('3500', { minimumFractionDigits: 2, suffix: '元' })).toBe('3,500.00元');
    expect(currency('3500', { style: 'currency', currencyDisplay: 'name' })).toBe('3,500.00人民币');
    expect(currency('3500', { suffix: '元' })).toBe('3,500元');
    expect(currency('¥3,500.00元')).toBe('3,500');
    expect(currency('¥3,500.00元', { style: 'currency' })).toBe('¥3,500.00');
    expect(currency('¥3,500.00元', { minimumFractionDigits: 2, suffix: '元' })).toBe('3,500.00元');

    expect(currency(0)).toBe('0');
    expect(currency(1.123)).toBe('1.123');
    expect(currency(-1.123)).toBe('-1.123');
    expect(currency(123_456_789.123)).toBe('123,456,789.123');
    expect(currency(-123_456_789)).toBe('-123,456,789');
    expect(currency(123_456_789)).toBe('123,456,789');
    expect(currency('123456789')).toBe('123,456,789');
    expect(currency('-123456789')).toBe('-123,456,789');
    expect(currency('123,456,789')).toBe('123,456,789');
    expect(() => currency('')).toThrow('Invalid value type');
    expect(() => currency(null as any)).toThrow('Invalid value type');
    expect(() => currency(undefined as any)).toThrow('Invalid value type');
    expect(() => currency('abc')).toThrow('Invalid currency format');
  });


  it('百分比', () => {
    expect(currency(3500, { style: 'percent' })).toBe('350,000%');
    expect(currency(0.35, { style: 'percent' })).toBe('35%');
    expect(currency(0, { style: 'percent' })).toBe('0%');
    expect(currency('0', { style: 'percent' })).toBe('0%');
    expect(() => currency('')).toThrow('Invalid value type: string ');
    expect(currency('0.15678', { style: 'percent', minimumFractionDigits: 3 })).toBe('15.678%');
    expect(currency('0.15678', { style: 'percent', minimumFractionDigits: 4 })).toBe('15.6780%');
    expect(currency('0.15678', { style: 'percent' })).toBe('16%');
    expect(() => currency(null as any, { style: 'percent' })).toThrow('Invalid value type: object null');
    expect(() => currency(undefined as any, { style: 'percent' })).toThrow('Invalid value type: undefined undefined');
  });
  it('单位格式', () => {
    expect(currency(3500, { style: 'unit', unit: CurrencyUnit.Liter })).toBe('3,500升');
    expect(currency(987654321, { notation: 'compact' })).toBe('9.9亿');
  });
  it('正数负数符号，零不显示', () => {
    expect(currency(3500, { style: 'percent', signDisplay: 'exceptZero' })).toBe('+350,000%');
  });
  it('记账格式，负数使用括号', () => {
    expect(currency(-3500, { style: 'currency', signDisplay: 'always', currencySign: 'accounting' })).toBe('(¥3,500.00)');
  });
  it('指定小数位数和整数位数，四舍五入', () => {
    expect(currency(4.33, { minimumIntegerDigits: 3, minimumFractionDigits: 4 })).toBe('004.3300');
    expect(currency(4.33145, { maximumFractionDigits: 2 })).toBe('4.33');
  });

  it('将货币字符串转换为数字', () => {
    expect(convertCurrencyToNumber('-¥3,500.12')).toBe(-3500.12);
    expect(convertCurrencyToNumber('¥-3,500.12')).toBe(-3500.12);
    expect(convertCurrencyToNumber('-3,500.12人民币')).toBe(-3500.12);
    expect(convertCurrencyToNumber('-3500.12')).toBe(-3500.12);
    expect(() => convertCurrencyToNumber('')).toThrow('Invalid currency format');
  });
});
