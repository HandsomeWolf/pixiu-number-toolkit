import { removeThousandSeparator } from "../../../../basic/formatter/thousand-separator";

export interface Options {
  // 是否为正数
  positive?: boolean;
  // 是否为整数
  integer?: boolean;
  // 是否为正整数
  positiveInteger?: boolean;
  // 是否为负数
  negative?: boolean;
  // 是否为负整数
  negativeInteger?: boolean;
  // 小数点位数
  decimal?: number;
  // 最小值
  min?: number;
  // 最大值
  max?: number;
  // 单位
  unit?: string;
}

interface Rule {
  required: boolean;
}

type Callback = (error?: Error) => void;

export const isInRangeForElementPlus = (
  name: string,
  options: Options = {},
) => {
  return (rule: Rule, value: any, callback: Callback) => {
    const handleError = (message: string) => callback(new Error(message));

    // 转换为数字
    value = removeThousandSeparator(value);

    // 错误处理函数

    // 检查输入的值是否为数字
    if (Number.isNaN(value)) {
      return handleError(`${name}必须是数字`);
    }
    // 是否为必填项
    if (rule.required && !value) {
      return handleError(`请输入${name}`);
    }

    // 是否为正数
    if (options.positive && (!Number.isFinite(value) || value <= 0)) {
      return handleError(`${name}必须是正数`);
    }

    // 是否为整数
    if (options.integer && !Number.isInteger(value)) {
      return handleError(`${name}必须是整数`);
    }

    // 是否为正整数
    if (options.positiveInteger && (!Number.isInteger(value) || value <= 0)) {
      return handleError(`${name}必须是正整数`);
    }

    // 是否为负数
    if (options.negative && (!Number.isFinite(value) || value >= 0)) {
      return handleError(`${name}必须是负数`);
    }

    // 是否为负整数
    if (options.negativeInteger && (!Number.isInteger(value) || value >= 0)) {
      return handleError(`${name}必须是负整数`);
    }

    // 检查小数点位数
    if (options.decimal !== undefined) {
      const decimalPart = value.toString().split(".")[1];
      if (!decimalPart || decimalPart.length > options.decimal) {
        return handleError(`${name}的小数点位数不能超过${options.decimal}`);
      }
    }

    // 检查最小值
    if (options.min !== undefined && value < options.min) {
      return handleError(`${name}不能小于${options.min}${options.unit}`);
    }

    // 检查最大值
    if (options.max !== undefined && value > options.max) {
      return handleError(`${name}不能大于${options.max}${options.unit}`);
    }

    callback();
  };
};
