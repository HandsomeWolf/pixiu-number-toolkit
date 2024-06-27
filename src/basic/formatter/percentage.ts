import { computeExpression, padZero } from '../../index';

/**
 * Formats a number or string into a percentage.
 * 将数字或字符串格式化为百分比。
 * @param input The number or string to format; can be a number, a string, null, or undefined.
 *              要格式化的数字或字符串，可以是数字、字符串、null或undefined。
 * @param options Optional parameters:
 *                可选参数：
 *                - decimalPlaces: The number of decimal places. If boolean, it's regarded as carrySymbol.
 *                                 小数位数，如果为boolean类型，将被视为carrySymbol参数。
 *                - carrySymbol: Whether to include the percent symbol. Defaults to true.
 *                               是否带有百分号，默认为true。
 * @returns Formatted percentage string if input is a number or a valid number string;
 *          如果input为数字或有效数字字符串，返回格式化后的百分比字符串；
 *          returns null or undefined if input is null or undefined;
 *          如果input为null或undefined，返回null或undefined；
 *          returns the original string if input is a non-numeric string.
 *          如果input为非数字字符串，返回原字符串。
 */
export function formatPercentage(
  input: number | string,
  options: {
    decimalPlaces?: number | boolean;
    carrySymbol?: boolean;
  } = {},
): string | null | undefined {
  // Default options setup
  let { carrySymbol = true, decimalPlaces } = options;

  // Handle null, undefined, and empty string inputs
  if (input === null as any || input === undefined as any || input === '') {
    return input as any;
  }

  // Convert input to a number if it's a string and check for non-numeric inputs
  const inputValue = typeof input === 'string' ? Number(input) : input;
  if (Number.isNaN(inputValue)) {
    return input.toString();
  }

  // If decimalPlaces is a boolean, interpret it as carrySymbol and set decimalPlaces to undefined
  if (typeof decimalPlaces === 'boolean') {
    carrySymbol = decimalPlaces;
    decimalPlaces = undefined;
  }

  // Calculate percentage
  const percentageValue = computeExpression(`${inputValue} * 100`, {
    decimalPlaces: typeof decimalPlaces === 'number' ? decimalPlaces : undefined,
  });

  // Format output
  const formattedPercentage = typeof decimalPlaces === 'number'
    ? padZero(Number(percentageValue), decimalPlaces)
    : percentageValue.toString();

  return `${formattedPercentage}${carrySymbol ? '%' : ''}`;
}
