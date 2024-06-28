import { buildRegex, REGEX } from '../../constants/regex';
import { RegexOptions } from '../../../types/common';

/**
 *  判断是否为千分位格式
 * @param value 要判断的字符串
 * @param options
 * @returns 如果value为千分位格式，返回true；否则返回false。
 */
export function isValidThousandSeparatedNumber(
  value: string,
  options: RegexOptions = { strict: true },
) {
  return buildRegex(REGEX.THOUSAND_SEPARATED_NUMBER, options).test(value);
}

/**
 * 判断字符串是否为空或只包含空格
 * @param {string} value - 待检查的字符串
 * @param options
 * @returns {boolean} 是空字符串或只包含空格时返回 true，否则返回 false
 */
export function isBlank(value: string, options: RegexOptions = { strict: true }): boolean {
  return !value || buildRegex(REGEX.BLANK, options).test(value);
}

/**
 * 判断是否为纯数字
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是纯数字时返回 true，否则返回 false
 */
export function isNumber(value: string, options: RegexOptions = { strict: true }): boolean {
  return buildRegex(REGEX.NUMBER, options).test(value);
}

/**
 * 判断数组中的所有元素是否都是数字
 * @returns {boolean} 如果数组中的所有元素都是数字，返回 true，否则返回 false
 * @param array
 */
export function areAllElementsNumbers(
  array: any[],
): boolean {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => isNumber(item));
}

/**
 * 判断参数是否为数字或字符串数字
 * @param {string | number} value - 待检查的参数
 * @returns {boolean} 是数字或字符串数字时返回 true，否则返回 false
 */
export function isNumeric(value: string | number): boolean {
  return (!Number.isNaN(value) && typeof value === 'number') ||
    (!Number.isNaN(Number.parseFloat(value as any)) &&
      !Number.isNaN((value as any) - 0));
}

/**
 * 判断数组中的所有元素是否都是数字
 * @returns {boolean} 如果数组中的所有元素都是数字，返回 true，否则返回 false
 * @param array
 */
export function areAllElementsNumeric(array: any[]): boolean {
  if (array.length === 0) {
    return false;
  }
  return array.every((item) => isNumeric(item));
}

/**
 * 判断是否为正整数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是正整数时返回 true，否则返回 false
 */
export function isPositiveInteger(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.POSITIVE_INTEGER, options).test(value);
}

/**
 * 判断是否为负整数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是负整数时返回 true，否则返回 false
 */
export function isNegativeInteger(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NEGATIVE_INTEGER, options).test(value);
}

/**
 * 判断是否为非正整数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是非正整数时返回 true，否则返回 false
 */
export function isNonPositiveInteger(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NON_POSITIVE_INTEGER, options).test(value);
}

/**
 * 判断是否为浮点数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是浮点数时返回 true，否则返回 false
 */
export function isFloat(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.FLOAT, options).test(value);
}

/**
 * 判断是否为正浮点数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是正浮点数时返回 true，否则返回 false
 */
export function isPositiveFloat(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.POSITIVE_FLOAT, options).test(value);
}

/**
 * 判断是否为负浮点数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是负浮点数时返回 true，否则返回 false
 */
export function isNegativeFloat(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NEGATIVE_FLOAT, options).test(value);
}

/**
 * 判断是否为非正浮点数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是非正浮点数时返回 true，否则返回 false
 */
export function isNonPositiveFloat(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NON_POSITIVE_FLOAT, options).test(value);
}

/**
 * 判断是否为非负浮点数
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是非负浮点数时返回 true，否则返回 false
 */
export function isNonNegativeFloat(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NON_NEGATIVE_FLOAT, options).test(value);
}

/**
 * 判断是否为电子邮件
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是电子邮件时返回 true，否则返回 false
 */
export function isEmail(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.EMAIL, options).test(value);
}

/**
 * 判断是否为网址
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是网址时返回 true，否则返回 false
 */
export function isIP(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.IP_ADDRESS, options).test(value);
}

/**
 * 判断是否为子网掩码
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是子网掩码时返回 true，否则返回 false
 */
export function isSubnetMask(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.SUBNET_MASK, options).test(value);
}

/**
 * 判断是否为URL
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是URL时返回 true，否则返回 false
 */
export function isURL(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.URL, options).test(value);
}

/**
 * 判断是否为中文
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中文时返回 true，否则返回 false
 */
export function isChinese(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE, options).test(value);
}

/**
 * 判断是否为中文姓名
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中文姓名时返回 true，否则返回 false
 */
export function isChineseName(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_NAME, options).test(value);
}

/**
 * 判断是否为统一社会信用代码
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是统一社会信用代码时返回 true，否则返回 false
 */
export function isUnifiedSocialCreditIdentifier(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.UNIFIED_SOCIAL_CREDIT_IDENTIFIER, options).test(value);
}

/**
 * 判断是否为数字/货币金额
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是数字/货币金额时返回 true，否则返回 false
 */
export function isNumberCurrency(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NUMBER_CURRENCY, options).test(value);
}

/**
 * 判断是否为中国邮政编码
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中国邮政编码时返回 true，否则返回 false
 */
export function isChinesePostalCode(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_POSTAL_CODE, options).test(value);
}

/**
 * 判断是否为中国手机号
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中国手机号时返回 true，否则返回 false
 */
export function isChineseMobile(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_MOBILE, options).test(value);
}

/**
 * 判断是否为中国固话号码
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中国固话号码时返回 true，否则返回 false
 */
export function isChineseTel(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_TEL, options).test(value);
}

/**
 * 判断是否为中国银行卡号
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中国银行卡号时返回 true，否则返回 false
 */
export function isChineseBankCard(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_BANK_CARD, options).test(value);
}

/**
 * 判断是否为中国税号
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中国税号时返回 true，否则返回 false
 */
export function isChineseTaxNumber(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_TAX_NUMBER, options).test(value);
}

/**
 * 判断是否为有效的账户名
 * 以字母开头，允许5-16个字节，
 * 允许字母、数字和下划线组合
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是有效的账户名时返回 true，否则返回 false
 */
export function isValidAccount(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.ACCOUNT, options).test(value);
}

/**
 * 判断是否为中文字符
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是中文字符时返回 true，否则返回 false
 */
export function isChineseCharacters(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.CHINESE_CHARACTERS, options).test(value);
}

/**
 * 判断是否为十进制数（支持科学记数法）
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是十进制数时返回 true，否则返回 false
 */
export function isDecimalScientificNotation(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.DECIMAL_SCIENTIFIC_NOTATION, options).test(value);
}

/**
 * 判断是否为英文字母
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是英文字母时返回 true，否则返回 false
 */
export function isEnglishLetter(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.ENGLISH_LETTER, options).test(value);
}

/**
 * 判断是否为小写英文字母
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是小写英文字母时返回 true，否则返回 false
 */
export function isLowercaseEnglishLetter(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.LOWERCASE_ENGLISH_LETTER, options).test(value);
}

/**
 * 判断是否为大写英文字母
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是大写英文字母时返回 true，否则返回 false
 */
export function isUppercaseEnglishLetter(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.UPPERCASE_ENGLISH_LETTER, options).test(value);
}

/**
 * 判断是否为十六进制颜色
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是十六进制颜色时返回 true，否则返回 false
 */
export function isHexColor(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.HEX_COLOR, options).test(value);
}

/**
 * 判断是否为MAC地址
 * @param value - 待检查的参数
 * @param options
 * @returns {boolean} 是MAC地址时返回 true，否则返回 false
 */
export function isMacAddress(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.MAC_ADDRESS, options).test(value);
}

/**
 * 判断是否为身份证号码
 * @param id 身份证号码
 * @param options
 * @returns 如果是身份证号码，返回true；否则返回false。
 */
export function isValidChineseIdCard(
  id: string,
  options: RegexOptions = { strict: true },
) {
  if (!buildRegex(REGEX.CHINESE_ID_CARD, options).test(id)) {
    return false;
  }

  const weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const validate = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const idArray = [...id];
  let sum = 0;

  for (let index = 0; index < 17; index++) {
    sum += Number.parseInt(idArray[index], 10) * weight[index];
  }

  return validate[sum % 11].toUpperCase() === idArray[17].toUpperCase();
}

/**
 * 判断是否为有效的新能源车牌号
 * @param value - 待检查的车牌号
 * @param options
 * @returns {boolean} 是有效的新能源车牌号时返回 true，否则返回 false
 */
export function isValidNewEnergyLicensePlate(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NEW_ENERGY_LICENSE_PLATE, options).test(value);
}

/**
 * 判断是否为有效的非新能源车牌号
 * @param value - 待检查的车牌号
 * @param options
 * @returns {boolean} 是有效的非新能源车牌号时返回 true，否则返回 false
 */
export function isValidNonNewEnergyLicensePlate(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.NON_NEW_ENERGY_LICENSE_PLATE, options).test(value);
}

/**
 * 判断是否为有效的车牌号（包括新能源和非新能源）
 * @param value - 待检查的车牌号
 * @param options
 * @returns {boolean} 是有效的车牌号时返回 true，否则返回 false
 */
export function isValidLicensePlate(
  value: string,
  options: RegexOptions = { strict: true },
): boolean {
  return buildRegex(REGEX.COMBINED_LICENSE_PLATE, options).test(value);
}
