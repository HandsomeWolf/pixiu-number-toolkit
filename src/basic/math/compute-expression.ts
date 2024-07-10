import { currency, padZero } from '../../index';
import { convertToBigNumbers, math } from '../utils/math';
import { NumberDictionary } from '../../../types/common';

interface ComputeExpressionOptions {
  parameters?: NumberDictionary;
  decimalPlaces?: number;
  useThousandSeparator?: boolean;
}

export function computeExpression(
  formula: string,
  options: ComputeExpressionOptions = {},
): string {
  let result;

  // Check if parameters are provided (检查是否提供了参数)
  result =
    options.parameters === undefined
      ? math.evaluate(formula)
      : math.evaluate(formula, convertToBigNumbers(options.parameters));

  // Check if useThousandSeparator is provided (检查是否提供了 useThousandSeparator)
  if (options.useThousandSeparator) {
    if (options.decimalPlaces !== undefined) {
      result = currency(result.toFixed(), {
        minimumFractionDigits: options.decimalPlaces,
        maximumFractionDigits: options.decimalPlaces,
      });
    } else {
      result = currency(result.toFixed());
    }
  } else if (options.decimalPlaces !== undefined) {
    result = padZero(
      result.toFixed(options.decimalPlaces),
      options.decimalPlaces,
    );
  }

  return result.toString();
}
