import {
  CurrencyCode,
  CurrencyCodeType,
  getCurrencySeparators,
} from '../index';

export interface NumberDetails {
  /**
   * 原始数字的字符串形式
   */
  originalString: string;
  /**
   * 小数点在字符串中的位置
   */
  decimalIndex: number;
  /**
   * 小数部分的字符数量
   */
  decimalLength: number;
  /**
   * 数字的整数部分
   */
  integerPart: string;
  /**
   * 数字的小数部分
   */
  decimalPart: string;
  /**
   * 整数部分的字符数量
   */
  integerLength: number;
  /**
   * 是否为负数
   */
  isNegative: boolean;
}

/**
 * 解析数字的各个组成部分及其属性。
 *
 * @param value - 要解析的数字。
 * @param locale - 货币代码，默认为CNY（人民币）。用于确定小数点分隔符。
 * @returns 返回一个对象，包含以下属性：
 *   - `originalString`: 原始数字的字符串形式。
 *   - `decimalIndex`: 小数点在字符串中的位置（如果存在）。
 *   - `integerPart`: 数字的整数部分。
 *   - `decimalPart`: 数字的小数部分。
 *   - `integerLength`: 整数部分的字符数量。
 *   - `decimalLength`: 小数部分的字符数量。
 *   - `isNegative`: 是否为负数
 */
export const parseNumberDetails = (
  value: number,
  locale: CurrencyCodeType = CurrencyCode.CNY,
): NumberDetails => {
  const originalString = value.toString();
  const { decimalSeparator } = getCurrencySeparators(locale);
  const isNegative = value < 0;
  const unsignedOriginalString = isNegative ? originalString.slice(1) : originalString;
  const [integerPart, decimalPart = ''] = unsignedOriginalString.split(decimalSeparator);
  const decimalIndex = integerPart.length;
  const decimalLength = decimalPart.length;
  const integerLength = integerPart.length;
  return {
    originalString,
    decimalIndex,
    integerPart,
    decimalPart,
    integerLength,
    decimalLength,
    isNegative,
  };
};
