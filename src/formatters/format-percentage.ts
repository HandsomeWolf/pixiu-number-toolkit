import { getDecimalPlaces, padZero } from "../utils/number-utils";
import { math } from "..";

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
  input: number | string,
  carrySymbol?: boolean,
): string;
export function formatPercentage(
  input: number | string,
  decimalPlaces?: number,
  carrySymbol?: boolean,
): string;
export function formatPercentage(
  input: null,
  decimalPlaces?: number,
  carrySymbol?: boolean,
): null;
export function formatPercentage(
  input: undefined,
  decimalPlaces?: number,
  carrySymbol?: boolean,
): undefined;
export function formatPercentage(
  input: OutType,
  decimalPlaces?: number | boolean,
  carrySymbol = true,
): OutType {
  if (input === null || input === undefined || input === "") {
    return input;
  }

  // 判断第一个参数是否为数字或字符串数字
  if (typeof input === "string") {
    if (Number.isNaN(Number(input))) {
      return input;
    } else {
      input = Number(input);
    }
  }

  // 判断是否有第二个参数
  if (decimalPlaces === undefined) {
    decimalPlaces = Math.max(0, getDecimalPlaces(input) - 2);
  } else if (typeof decimalPlaces === "boolean") {
    carrySymbol = decimalPlaces;
    decimalPlaces = Math.max(0, getDecimalPlaces(input) - 2);
  }
  // 判断是否有第三个参数
  if (carrySymbol === undefined) {
    carrySymbol = true;
  }

  return `${padZero(
    math.computeExpression(`${input} * 100`, decimalPlaces),
    decimalPlaces,
  )}${carrySymbol ? "%" : ""}`;
}
