import { type BigNumber, all, create } from "mathjs";
import { addThousandSeparator } from "./formatter";
import { isValidThousandSeparatedNumber } from "./utils/validation";

interface Parameters {
  [key: string]: number | string | BigNumber;
}

export class MathHelper {
  private math = create(all, { number: "BigNumber" });

  private convertParameters(parameters: Parameters) {
    const convertedParameters: Parameters = {};
    for (const [key, value] of Object.entries(parameters)) {
      if (typeof value === "number") {
        convertedParameters[key] = this.math.bignumber(value);
      } else if (typeof value === "string") {
        convertedParameters[key] = isValidThousandSeparatedNumber(value)
          ? this.math.bignumber(Number(value.replaceAll(",", "")))
          : this.math.bignumber(value);
      }
    }
    return convertedParameters;
  }

  public computeExpression(
    formula: string,
    parameters?: Parameters | number | boolean,
    decimalPlaces?: number | boolean,
    useThousandSeparator?: boolean
  ) {
    let result;
    const formulaResult = formula.replaceAll(",", "");

    if (parameters === undefined) {
      return Number(this.math.evaluate(formulaResult));
    } else {
      switch (typeof parameters) {
        case "object": {
          result = this.math.evaluate(
            formulaResult,
            this.convertParameters(parameters)
          );
          break;
        }
        case "number": {
          result = this.math.evaluate(formulaResult).toFixed(parameters);
          break;
        }
        case "boolean": {
          return parameters
            ? addThousandSeparator(Number(this.math.evaluate(formulaResult)))
            : Number(this.math.evaluate(formulaResult));
        }
      }
    }

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

    if (useThousandSeparator === undefined) {
      return Number(result);
    } else {
      return useThousandSeparator
        ? addThousandSeparator(result)
        : Number(result);
    }
  }

  public unitConversion(
    value: number,
    fromUnit: string,
    toUnit: string,
    withUnit = false
  ): string | number {
    const result = this.math.evaluate(`${value} ${fromUnit} to ${toUnit}`);
    return withUnit ? result.toString() : result.toNumber();
  }
}
