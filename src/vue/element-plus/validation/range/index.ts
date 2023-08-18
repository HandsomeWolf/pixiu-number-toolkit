import { removeThousandSeparator } from "../../../../basic/formatter/thousand-separator";

export interface Options {
  /**
   * Whether the value is required (值是否必填)
   */
  positive?: boolean;
  /**
   * Whether to allow integers (是否允许整数)
   */
  integer?: boolean;
  /**
   * Whether to allow positive integers (是否允许正整数)
   */
  positiveInteger?: boolean;
  /**
   * Whether to allow negative numbers (是否允许负数)
   */
  negative?: boolean;
  /**
   * Whether to allow negative integers (是否允许负整数)
   */
  negativeInteger?: boolean;
  /**
   * The number of decimal places (小数位数)
   */
  decimal?: number;
  /**
   * The minimum value (最小值)
   */
  min?: number;
  /**
   * The maximum value (最大值)
   */
  max?: number;
  /**
   * The unit of the value (值的单位)
   */
  unit?: string;
}

interface Rule {
  required: boolean;
}

type Callback = (error?: Error) => void;

export const isInRangeForElementPlus = (
  name: string,
  options: Options = {},
  lang: "en" | "zh" = "en",
) => {
  const messages = {
    en: {
      mustBeNumber: `${name} must be a number`,
      required: `Please enter ${name}`,
      mustBePositive: `${name} must be a positive number`,
      mustBeInteger: `${name} must be an integer`,
      mustBePositiveInteger: `${name} must be a positive integer`,
      mustBeNegative: `${name} must be a negative number`,
      mustBeNegativeInteger: `${name} must be a negative integer`,
      decimalExceed: `The number of decimal places in ${name} cannot exceed ${options.decimal}`,
      lessThanMin: `${name} cannot be less than ${options.min}${
        options.unit ?? ""
      }`,
      moreThanMax: `${name} cannot be more than ${options.max}${
        options.unit ?? ""
      }`,
    },
    zh: {
      mustBeNumber: `${name}必须是数字`,
      required: `请输入${name}`,
      mustBePositive: `${name}必须是正数`,
      mustBeInteger: `${name}必须是整数`,
      mustBePositiveInteger: `${name}必须是正整数`,
      mustBeNegative: `${name}必须是负数`,
      mustBeNegativeInteger: `${name}必须是负整数`,
      decimalExceed: `${name}的小数点位数不能超过${options.decimal}`,
      lessThanMin: `${name}不能小于${options.min}${options.unit ?? ""}`,
      moreThanMax: `${name}不能大于${options.max}${options.unit ?? ""}`,
    },
  };

  return (rule: Rule, value: any, callback: Callback) => {
    const handleError = (message: string) => callback(new Error(message));

    // Convert to number
    value = removeThousandSeparator(value);

    // Error handling function

    // Check if the input value is a number
    if (Number.isNaN(value)) {
      return handleError(messages[lang].mustBeNumber);
    }
    // Is it a required field?
    if (rule.required && !value) {
      return handleError(messages[lang].required);
    }

    // Is it a positive number?
    if (options.positive && (!Number.isFinite(value) || value <= 0)) {
      return handleError(messages[lang].mustBePositive);
    }

    // Is it an integer?
    if (options.integer && !Number.isInteger(value)) {
      return handleError(messages[lang].mustBeInteger);
    }

    // Is it a positive integer?
    if (options.positiveInteger && (!Number.isInteger(value) || value <= 0)) {
      return handleError(messages[lang].mustBePositiveInteger);
    }

    // Is it a negative number?
    if (options.negative && (!Number.isFinite(value) || value >= 0)) {
      return handleError(messages[lang].mustBeNegative);
    }

    // Is it a negative integer?
    if (options.negativeInteger && (!Number.isInteger(value) || value >= 0)) {
      return handleError(messages[lang].mustBeNegativeInteger);
    }

    // Check the number of decimal places
    if (options.decimal !== undefined) {
      const decimalPart = value.toString().split(".")[1];
      if (!decimalPart || decimalPart.length > options.decimal) {
        return handleError(messages[lang].decimalExceed);
      }
    }

    // Check the minimum value
    if (options.min !== undefined && value < options.min) {
      return handleError(messages[lang].lessThanMin);
    }

    // Check the maximum value
    if (options.max !== undefined && value > options.max) {
      return handleError(messages[lang].moreThanMax);
    }

    callback();
  };
};
