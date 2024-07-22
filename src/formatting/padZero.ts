import { parseNumberDetails } from '..';

/**
 * 为数字填充零
 * @param value - 需要填充的数字
 * @param decimalLength - 小数位数
 * @returns 如果没有指定小数位数，返回原数字字符串；否则，返回填充后的数字字符串
 */
export const padZero = (value: number, decimalLength = 0): string => {
  const { originalString, decimalLength: currentDecimalPlaces } =
    parseNumberDetails(value);
  if (currentDecimalPlaces < decimalLength) {
    const zeroCount = decimalLength - currentDecimalPlaces;
    return `${originalString}${currentDecimalPlaces === 0 ? '.' : ''}${'0'.repeat(
      zeroCount,
    )}`;
  }
  return originalString;
};
