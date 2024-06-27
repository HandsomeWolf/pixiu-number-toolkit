import { type BigNumber, type MathJsInstance, all, create } from "mathjs";
import { isValidThousandSeparatedNumber } from "../../index";

export const math: MathJsInstance = create(all, { number: "BigNumber" });

interface Parameters {
  [key: string]: number | string | BigNumber;
}

// 该函数将参数转为BigNumber类型
export function convertToBigNumbers(parameters: Parameters) {
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
