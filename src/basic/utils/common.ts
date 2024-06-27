export interface DecimalInfo {
  /**
   * The string form of the number (数字的字符串形式)
   */
  valueString: string;
  /**
   * The index position of the decimal point (小数点的索引位置)
   */
  decimalIndex: number;
  /**
   * The length of the decimal part (小数部分的长度)
   */
  decimalLength: number;
  /**
   * The integer part of the number (整数部分)
   */
  integerPart: string;
  /**
   * The decimal part of the number (小数部分)
   */
  decimalPart: string;
  /**
   * The length of the integer part (整数部分的长度)
   */
  integerLength: number;
}

/**
 * Get the decimal information of a number (获取数字的小数信息)
 * @param value - The input number (输入的数字)
 * @returns The decimal information object (小数信息对象)
 */
export const getDecimalInfo = (value: number): DecimalInfo => {
  const valueString = value.toString();
  const [integerPart, decimalPart = ''] = valueString.split('.');
  const decimalIndex = integerPart.length;
  const decimalLength = decimalPart.length;
  const integerLength = integerPart.length;
  return {
    valueString,
    decimalIndex,
    decimalLength,
    integerPart,
    decimalPart,
    integerLength,
  };
};

/**
 * Get the number of decimal places of a number
 *
 * 获取数字的小数位数
 * @param value - The input number (输入的数字)
 * @returns The number of decimal places of the input number (返回输入数字的小数位数)
 */
export const getDecimalPlaces = (value: number): number => {
  const { decimalLength } = getDecimalInfo(value);
  return decimalLength;
};

/**
 * Pad a number with zeros
 *
 * 为数字填充零
 * @param value - The number to be padded (需要填充的数字)
 * @param decimalLength - The number of decimal places (小数位数)
 * @returns If no decimal places are specified, return the original number string;
 *          otherwise, return the padded number string
 *          如果没有指定小数位数，返回原数字字符串；否则，返回填充后的数字字符串
 */
export const padZero = (value: number, decimalLength = 0): string => {
  const { valueString, decimalLength: currentDecimalPlaces } =
    getDecimalInfo(value);
  if (currentDecimalPlaces < decimalLength) {
    const zeroCount = decimalLength - currentDecimalPlaces;
    return `${valueString}${currentDecimalPlaces === 0 ? '.' : ''}${'0'.repeat(
      zeroCount,
    )}`;
  }
  return valueString;
};
