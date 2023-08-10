import { addThousandSeparator, padZero } from "../../index";
import { convertToBigNumbers, math } from "../utils/math";

interface ComputeExpressionOptions {
  parameters?: NumberDictionary;
  decimalPlaces?: number;
  useThousandSeparator?: boolean;
}

export function computeExpression(
  formula: string,
  options: ComputeExpressionOptions = {},
): number | string {
  let result;
  const formulaResult = formula.replaceAll(",", "");

  // Check if parameters are provided (检查是否提供了参数)
  result =
    options.parameters === undefined
      ? math.evaluate(formulaResult)
      : math.evaluate(formulaResult, convertToBigNumbers(options.parameters));

  // Check if decimalPlaces are provided (检查是否提供了 decimalPlaces)
  if (options.decimalPlaces !== undefined) {
    result = padZero(
      result.toFixed(options.decimalPlaces),
      options.decimalPlaces,
    );
  }

  // Check if useThousandSeparator is provided (检查是否提供了 useThousandSeparator)
  if (options.useThousandSeparator) {
    result = addThousandSeparator(result);
  }

  return result.toString();
}
