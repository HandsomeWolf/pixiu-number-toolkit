/**
 *  判断是否为千分位格式
 * @param string_ 要判断的字符串
 * @returns 如果string_为千分位格式，返回true；否则返回false。
 */
export function isValidThousandSeparatedNumber(string_: string) {
  const regex = /^\d{1,3}(,\d{3})+(\.\d+)?$/;
  return regex.test(string_);
}

/**
 * 判断字符串是否为空或只包含空格
 * @param {string} str - 待检查的字符串
 * @returns {boolean} 是空字符串或只包含空格时返回 true，否则返回 false
 */
export function isBlank(string_: string): boolean {
  return !string_ || /^\s*$/.test(string_);
}

/**
 * 判断参数是否为数字或字符串数字
 * @param {string | number} val - 待检查的参数
 * @returns {boolean} 是数字或字符串数字时返回 true，否则返回 false
 */
export function isNumeric(value: string | number): boolean {
  const isNumber =
    (!Number.isNaN(value as any) && typeof value === "number") ||
    (!Number.isNaN(Number.parseFloat(value as any)) &&
      !Number.isNaN((value as any) - 0));
  return isNumber;
}
