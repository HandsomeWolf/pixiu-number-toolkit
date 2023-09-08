export const addThousandSeparatorForElementPlus = (value: string) => {
  if (!value) return "";
  const parts = value.toString().split(".");
  parts[0] = parts[0]
    .replaceAll(",", "")
    .replaceAll(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  return parts.join(".");
};
export const removeThousandSeparatorForElementPlus = (
  value: string,
  options: { decimalPlaces?: number; defaultReturn?: string } = {},
) => {
  if (!value)
    return options.defaultReturn === undefined ? "" : options.defaultReturn;

  // 处理以.开头的情况
  value = value.startsWith(".") ? `0${value}` : value;

  // 只允许数字和小数点，且只允许一个小数点
  const result = value.replaceAll(/[^\d.]/g, "").replaceAll(/(\..*)\./g, "$1");
  if (result === "")
    return options.defaultReturn === undefined ? "" : options.defaultReturn;

  const parts = result.split(".");
  if (
    parts[1] &&
    options.decimalPlaces &&
    parts[1].length > options.decimalPlaces
  ) {
    parts[1] = parts[1].slice(0, options.decimalPlaces);
  }

  // 处理数字以0开头的情况，但不包括0后面跟着小数点的情况
  if (
    parts[0].startsWith("0") &&
    !parts[0].startsWith("0.") &&
    parts[0].length > 1
  ) {
    parts[0] = parts[0].slice(1);
  }

  return parts.join(".");
};

/**
 * `formatDecimalForElementPlus` 函数用于删除千位分隔符并保留2位小数
 * @param {string} value - 输入的字符串，期望是一个包含千位分隔符的数字字符串
 * @param {object} options - 可选参数，包含 `defaultReturn` 属性，当输入的 `value` 不符合预期时，将返回 `defaultReturn` 的值
 * @returns {string} 返回处理后的字符串，该字符串已删除千位分隔符，并保留2位小数
 * @example https://github.com/element-plus/element-plus/blob/dev/packages/utils/number.ts
 */

export const formatDecimalForElementPlus = (
  value: string,
  options: { defaultReturn?: string } = {},
) => {
  return removeThousandSeparatorForElementPlus(value, {
    decimalPlaces: 2,
    defaultReturn: options.defaultReturn,
  });
};
