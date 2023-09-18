import {
  BLANK_STRING_REGEX,
  CHINESE_ID_CARD_REGEX,
  THOUSAND_SEPARATED_NUMBER_REGEX,
} from "../../constants/regex";

/**
 *  判断是否为千分位格式
 * @param value 要判断的字符串
 * @returns 如果value为千分位格式，返回true；否则返回false。
 */
export function isValidThousandSeparatedNumber(value: string) {
  return THOUSAND_SEPARATED_NUMBER_REGEX.test(value);
}

/**
 * 判断字符串是否为空或只包含空格
 * @param {string} value - 待检查的字符串
 * @returns {boolean} 是空字符串或只包含空格时返回 true，否则返回 false
 */
export function isBlank(value: string): boolean {
  return !value || BLANK_STRING_REGEX.test(value);
}

/**
 * 判断参数是否为数字或字符串数字
 * @param {string | number} value - 待检查的参数
 * @returns {boolean} 是数字或字符串数字时返回 true，否则返回 false
 */
export function isNumeric(value: string | number): boolean {
  const isNumber =
    (!Number.isNaN(value as any) && typeof value === "number") ||
    (!Number.isNaN(Number.parseFloat(value as any)) &&
      !Number.isNaN((value as any) - 0));
  return isNumber;
}
/**
 * 判断是否为身份证号码
 * @param id 身份证号码
 * @returns 如果是身份证号码，返回true；否则返回false。
 */
export function isValidChineseIdCard(id: string) {
  if (!CHINESE_ID_CARD_REGEX.test(id)) {
    return false;
  }

  const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const validate = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
  const idArray = [...id];
  let sum = 0;

  for (let index = 0; index < 17; index++) {
    sum += Number.parseInt(idArray[index]) * weight[index];
  }

  return validate[sum % 11].toUpperCase() === idArray[17].toUpperCase();
}
