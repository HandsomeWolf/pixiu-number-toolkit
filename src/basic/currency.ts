import { CurrencyCode, CurrencyUnit } from '../constants/enum';
import { TRIM_NON_NUMERIC_REGEX } from '../constants/regex';


export type CurrencyCodeType = keyof typeof CurrencyCode;
export type CurrencyStyleType = 'decimal' | 'currency' | 'unit' | 'percent';
export type CurrencyUnitType = `${CurrencyUnit}`;

/**
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export interface CurrencyOptions extends Intl.NumberFormatOptions {
  locale?: CurrencyCodeType;
  style?: CurrencyStyleType;
  unit?: CurrencyUnitType;
  /**
   * 返回内容增加前缀
   */
  prefix?: string;
  /**
   * 返回内容增加后缀
   */
  suffix?: string;
}

const defaultOptions: CurrencyOptions = {
  locale: CurrencyCode.CNY,
  style: 'decimal',
};

/**
 * 获取当前货币的千位分隔符和小数点符号
 * @param locale 货币代码
 * @returns 千位分隔符和小数点符号
 */
export const getCurrencySeparators = (
  locale: CurrencyCodeType = defaultOptions.locale!,
): { groupSeparator: string; decimalSeparator: string } => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale,
  });
  const parts = formatter.formatToParts(1234567.89);
  let groupSeparator = '';
  let decimalSeparator = '';
  for (const part of parts) {
    if (part.type === 'group') {
      groupSeparator = part.value;
    } else if (part.type === 'decimal') {
      decimalSeparator = part.value;
    }
  }
  return { groupSeparator, decimalSeparator };
};

/**
 * 将货币字符串转换为数字
 * @param value 货币字符串
 * @param locale 货币代码
 * @returns 数字
 */
export const convertCurrencyToNumber = (
  value: string,
  locale: CurrencyCodeType = defaultOptions.locale!,
): number => {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Invalid currency format: ${value}`);
  }
  const { groupSeparator, decimalSeparator } = getCurrencySeparators(locale);
  const groupSeparatorRegex = new RegExp(`\\${groupSeparator}`, 'g');
  const decimalSeparatorRegex = new RegExp(`\\${decimalSeparator}`);
  let cleanedValue = value.replace(groupSeparatorRegex, '');
  cleanedValue = cleanedValue.replace(decimalSeparatorRegex, '.');
  cleanedValue = cleanedValue.replace(TRIM_NON_NUMERIC_REGEX, '');
  const numericValue = parseFloat(cleanedValue);
  if (isNaN(numericValue)) {
    throw new Error(`Invalid currency format: ${value}`);
  }
  return numericValue;
};

/**
 * 格式化货币
 * @param value 数字或字符串
 * @param options 格式化选项
 * @returns 格式化后的货币字符串
 */
export const currency = (
  value: number | string | bigint,
  options: CurrencyOptions = defaultOptions,
): string => {
  const {
    locale = CurrencyCode.CNY,
    style = 'decimal',
    unit,
    unitDisplay,
    notation,
    signDisplay,
    currencySign,
    currencyDisplay,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    maximumSignificantDigits,
    minimumSignificantDigits,
    prefix,
    suffix,
  } = { ...defaultOptions, ...options };

  let numericValue: number | bigint = 0;

  if (typeof value === 'string' && value.trim() !== '') {
    numericValue = convertCurrencyToNumber(value, locale);
  } else if (typeof value === 'bigint' || typeof value === 'number') {
    numericValue = value;
  } else {
    throw new Error(`Invalid value type: ${typeof value} ${value}`);
  }

  return `${prefix ?? ''}${new Intl.NumberFormat(locale, {
    style,
    currency: locale,
    unit,
    unitDisplay,
    notation,
    signDisplay,
    currencySign,
    currencyDisplay,
    minimumIntegerDigits,
    minimumFractionDigits,
    maximumFractionDigits,
    maximumSignificantDigits,
    minimumSignificantDigits,
  }).format(numericValue)}${suffix ?? ''}`;
};

/**
 * 设置全局默认选项
 * @param options 默认选项
 */
currency.setGlobalOptions = (options: CurrencyOptions) => {
  Object.assign(defaultOptions, options);
};
