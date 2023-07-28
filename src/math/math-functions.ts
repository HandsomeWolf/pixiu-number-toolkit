import { type BigNumber, all, create } from "mathjs";
import { addThousandSeparator } from "../formatters/index";
import { isValidThousandSeparatedNumber } from "../utils/validation-utils";

const math = create(all, { number: "BigNumber" });

interface Parameters {
  [key: string]: number | string | BigNumber;
}

// 该函数将参数转为BigNumber类型
export function convertParameters(parameters: Parameters) {
  const convertedParameters: Parameters = {};
  for (const [key, value] of Object.entries(parameters)) {
    if (typeof value === "number") {
      convertedParameters[key] = math.bignumber(value);
    } else if (typeof value === "string") {
      convertedParameters[key] = isValidThousandSeparatedNumber(value)
        ? math.bignumber(Number(value.replaceAll(",", "")))
        : math.bignumber(value);
    }
  }
  return convertedParameters;
}

export function computeExpression(
  formula: string,
  parameters: Parameters,
  decimalPlaces: number,
): number;

export function computeExpression(
  formula: string,
  parameters: Parameters,
  decimalPlaces: number,
  useThousandSeparator: boolean,
): string;

export function computeExpression(
  formula: string,
  parameters: Parameters,
): number;

export function computeExpression(
  formula: string,
  parameters: Parameters,
  useThousandSeparator: boolean,
): string;

export function computeExpression(
  formula: string,
  decimalPlaces: number,
): number;

export function computeExpression(
  formula: string,
  decimalPlaces: number,
  useThousandSeparator: boolean,
): string;

export function computeExpression(formula: string): number;

export function computeExpression(
  formula: string,
  useThousandSeparator: boolean,
): string;

// 实现以上函数重载
export function computeExpression(
  formula: string,
  parameters?: Parameters | number | boolean,
  decimalPlaces?: number | boolean,
  useThousandSeparator?: boolean,
) {
  let result;
  const formulaResult = formula.replaceAll(",", "");

  // 判断是否有第二个参数
  if (parameters === undefined) {
    return Number(math.evaluate(formulaResult));
  } else {
    switch (typeof parameters) {
      // 替换表达式参数
      case "object": {
        result = math
          .evaluate(formulaResult, convertParameters(parameters))
          .toString();
        break;
      }
      case "number": {
        result = Number(math.evaluate(formulaResult).toFixed(parameters));
        break;
      }
      case "boolean": {
        return parameters
          ? addThousandSeparator(Number(math.evaluate(formulaResult)))
          : Number(math.evaluate(formulaResult));
      }
    }
  }

  // 判断是否有第三参数
  if (decimalPlaces === undefined) {
    return isValidThousandSeparatedNumber(result) ? result : Number(result);
  } else {
    switch (typeof decimalPlaces) {
      case "number": {
        result = result.toFixed(decimalPlaces);
        break;
      }
      case "boolean": {
        return decimalPlaces ? addThousandSeparator(result) : Number(result);
      }
    }
  }

  //判断是否有第四个参数
  if (useThousandSeparator === undefined) {
    return Number(result);
  } else {
    return useThousandSeparator ? addThousandSeparator(result) : Number(result);
  }
}
// https://mathjs.org/docs/datatypes/units.html
export function unitConversion(
  value: number,
  fromUnit: string,
  toUnit: string,
  withUnit = false,
): string | number {
  const result = math.evaluate(`${value} ${fromUnit} to ${toUnit}`);
  return withUnit ? result.toString() : result.toNumber();
}
