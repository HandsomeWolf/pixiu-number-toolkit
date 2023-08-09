import { computeExpression, padZero } from "../../index";

/**
 *  格式化百分比
 * @param input 要格式化的数字或字符串，可以是数字、字符串、null或undefined
 * @param decimalPlaces 小数位数，如果为boolean类型，将被视为carrySymbol参数
 * @param carrySymbol 是否带有百分号，默认为true
 * @returns 如果input为数字或字符串，返回格式化后的百分比字符串；
 *          如果input为null或undefined，返回null或undefined；
 *          如果input为非数字字符串，返回原字符串。
 */
export function formatPercentage(
  input: IOType,
  options: {
    decimalPlaces?: number;
    carrySymbol?: boolean;
  } = {},
): IOType {
  options = {
    carrySymbol: true,
    ...options,
  };
  if (input === null || input === undefined || input === "") {
    return input;
  }

  if (typeof input === "string" && Number.isNaN(Number(input))) {
    return input;
  }
  const result =
    options.decimalPlaces === undefined
      ? computeExpression(`${input} * 100`)
      : padZero(
          computeExpression(`${input} * 100`, options.decimalPlaces),
          options.decimalPlaces,
        );
  return `${result.toString()}${options.carrySymbol ? "%" : ""}`;
}
