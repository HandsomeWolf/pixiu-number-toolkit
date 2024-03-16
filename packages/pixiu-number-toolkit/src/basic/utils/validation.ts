import {
  BLANK_STRING_REGEX,
  CHINESE_BANK_CARD_REGEX,
  CHINESE_CHARACTERS_REGEX,
  CHINESE_ID_CARD_REGEX,
  CHINESE_MOBILE_REGEX,
  CHINESE_NAME_REGEX,
  CHINESE_POSTAL_CODE_REGEX,
  CHINESE_REGEX,
  CHINESE_TAX_NUMBER_REGEX,
  CHINESE_TEL_REGEX,
  DECIMAL_SCIENTIFIC_NOTATION_REGEX,
  EMAIL_REGEX,
  ENGLISH_LETTER_REGEX,
  FLOAT_REGEX,
  HEX_COLOR_REGEX,
  IP_REGEX,
  LOWERCASE_ENGLISH_LETTER_REGEX,
  MAC_ADDRESS_REGEX,
  NEGATIVE_FLOAT_REGEX,
  NEGATIVE_INTEGER_REGEX,
  NON_NEGATIVE_FLOAT_REGEX,
  NON_NEGATIVE_INTEGER_REGEX,
  NON_POSITIVE_FLOAT_REGEX,
  NON_POSITIVE_INTEGER_REGEX,
  NUMBER_CURRENCY_REGEX,
  NUMBER_REGEX,
  ONLY_NUMBERS_REGEX,
  POSITIVE_FLOAT_REGEX,
  POSITIVE_INTEGER_REGEX,
  SUBNET_MASK_REGEX,
  THOUSAND_SEPARATED_NUMBER_REGEX,
  UNIFIED_SOCIAL_CREDIT_IDENTIFIER_REGEX,
  UPPERCASE_ENGLISH_LETTER_REGEX,
  URL_REGEX,
  VALID_ACCOUNT_REGEX,
  NEW_ENERGY_LICENSE_PLATE_REGEX,
  NON_NEW_ENERGY_LICENSE_PLATE_REGEX,
  COMBINED_LICENSE_PLATE_REGEX
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
 * 判断是否为纯数字
 * @param value - 待检查的参数
 * @returns {boolean} 是纯数字时返回 true，否则返回 false
 */
export function isNumber(value: string): boolean {
  return NUMBER_REGEX.test(value);
}
/**
 * 判断数组中的所有元素是否都是数字
 * @param {Array} arr - 待检查的数组
 * @returns {boolean} 如果数组中的所有元素都是数字，返回 true，否则返回 false
 */
export function areAllElementsNumbers(array: any[]): boolean {
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
  const isNumber =
    (!Number.isNaN(value as any) && typeof value === "number") ||
    (!Number.isNaN(Number.parseFloat(value as any)) &&
      !Number.isNaN((value as any) - 0));
  return isNumber;
}
/**
 * 判断数组中的所有元素是否都是数字
 * @param {Array} arr - 待检查的数组
 * @returns {boolean} 如果数组中的所有元素都是数字，返回 true，否则返回 false
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
 * @returns {boolean} 是正整数时返回 true，否则返回 false
 */
export function isPositiveInteger(value: string): boolean {
  return POSITIVE_INTEGER_REGEX.test(value);
}

/**
 * 判断是否为负整数
 * @param value - 待检查的参数
 * @returns {boolean} 是负整数时返回 true，否则返回 false
 */
export function isNegativeInteger(value: string): boolean {
  return NEGATIVE_INTEGER_REGEX.test(value);
}

/**
 * 判断是否为非正整数
 * @param value - 待检查的参数
 * @returns {boolean} 是非正整数时返回 true，否则返回 false
 */
export function isNonPositiveInteger(value: string): boolean {
  return NON_POSITIVE_INTEGER_REGEX.test(value);
}

/**
 * 判断是否为非负整数
 * @param value - 待检查的参数
 * @returns {boolean} 是非负整数时返回 true，否则返回 false
 */
export function isNonNegativeInteger(value: string): boolean {
  return NON_NEGATIVE_INTEGER_REGEX.test(value);
}

/**
 * 判断是否为浮点数
 * @param value - 待检查的参数
 * @returns {boolean} 是浮点数时返回 true，否则返回 false
 */
export function isFloat(value: string): boolean {
  return FLOAT_REGEX.test(value);
}

/**
 * 判断是否为正浮点数
 * @param value - 待检查的参数
 * @returns {boolean} 是正浮点数时返回 true，否则返回 false
 */
export function isPositiveFloat(value: string): boolean {
  return POSITIVE_FLOAT_REGEX.test(value);
}

/**
 * 判断是否为负浮点数
 * @param value - 待检查的参数
 * @returns {boolean} 是负浮点数时返回 true，否则返回 false
 */
export function isNegativeFloat(value: string): boolean {
  return NEGATIVE_FLOAT_REGEX.test(value);
}

/**
 * 判断是否为非正浮点数
 * @param value - 待检查的参数
 * @returns {boolean} 是非正浮点数时返回 true，否则返回 false
 */
export function isNonPositiveFloat(value: string): boolean {
  return NON_POSITIVE_FLOAT_REGEX.test(value);
}

/**
 * 判断是否为非负浮点数
 * @param value - 待检查的参数
 * @returns {boolean} 是非负浮点数时返回 true，否则返回 false
 */
export function isNonNegativeFloat(value: string): boolean {
  return NON_NEGATIVE_FLOAT_REGEX.test(value);
}
/**
 * 判断是否为电子邮件
 * @param value - 待检查的参数
 * @returns {boolean} 是电子邮件时返回 true，否则返回 false
 */
export function isEmail(value: string): boolean {
  return EMAIL_REGEX.test(value);
}

/**
 * 判断是否为网址
 * @param value - 待检查的参数
 * @returns {boolean} 是网址时返回 true，否则返回 false
 */
export function isIP(value: string): boolean {
  return IP_REGEX.test(value);
}

/**
 * 判断是否为子网掩码
 * @param value - 待检查的参数
 * @returns {boolean} 是子网掩码时返回 true，否则返回 false
 */
export function isSubnetMask(value: string): boolean {
  return SUBNET_MASK_REGEX.test(value);
}

/**
 * 判断是否为URL
 * @param value - 待检查的参数
 * @returns {boolean} 是URL时返回 true，否则返回 false
 */
export function isURL(value: string): boolean {
  return URL_REGEX.test(value);
}

/**
 * 判断是否为中文
 * @param value - 待检查的参数
 * @returns {boolean} 是中文时返回 true，否则返回 false
 */
export function isChinese(value: string): boolean {
  return CHINESE_REGEX.test(value);
}

/**
 * 判断是否为中文姓名
 * @param value - 待检查的参数
 * @returns {boolean} 是中文姓名时返回 true，否则返回 false
 */
export function isChineseName(value: string): boolean {
  return CHINESE_NAME_REGEX.test(value);
}
/**
 * 判断是否为统一社会信用代码
 * @param value - 待检查的参数
 * @returns {boolean} 是统一社会信用代码时返回 true，否则返回 false
 */
export function isUnifiedSocialCreditIdentifier(value: string): boolean {
  return UNIFIED_SOCIAL_CREDIT_IDENTIFIER_REGEX.test(value);
}

/**
 * 判断是否为数字/货币金额
 * @param value - 待检查的参数
 * @returns {boolean} 是数字/货币金额时返回 true，否则返回 false
 */
export function isNumberCurrency(value: string): boolean {
  return NUMBER_CURRENCY_REGEX.test(value);
}

/**
 * 判断是否为中国邮政编码
 * @param value - 待检查的参数
 * @returns {boolean} 是中国邮政编码时返回 true，否则返回 false
 */
export function isChinesePostalCode(value: string): boolean {
  return CHINESE_POSTAL_CODE_REGEX.test(value);
}

/**
 * 判断是否为中国手机号
 * @param value - 待检查的参数
 * @returns {boolean} 是中国手机号时返回 true，否则返回 false
 */
export function isChineseMobile(value: string): boolean {
  return CHINESE_MOBILE_REGEX.test(value);
}

/**
 * 判断是否为中国固话号码
 * @param value - 待检查的参数
 * @returns {boolean} 是中国固话号码时返回 true，否则返回 false
 */
export function isChineseTel(value: string): boolean {
  return CHINESE_TEL_REGEX.test(value);
}

/**
 * 判断是否为中国银行卡号
 * @param value - 待检查的参数
 * @returns {boolean} 是中国银行卡号时返回 true，否则返回 false
 */
export function isChineseBankCard(value: string): boolean {
  return CHINESE_BANK_CARD_REGEX.test(value);
}

/**
 * 判断是否为中国税号
 * @param value - 待检查的参数
 * @returns {boolean} 是中国税号时返回 true，否则返回 false
 */
export function isChineseTaxNumber(value: string): boolean {
  return CHINESE_TAX_NUMBER_REGEX.test(value);
}

/**
 * 判断是否为有效的账户名
 * @param value - 待检查的参数
 * @returns {boolean} 是有效的账户名时返回 true，否则返回 false
 */
export function isValidAccount(value: string): boolean {
  return VALID_ACCOUNT_REGEX.test(value);
}

/**
 * 判断是否为中文字符
 * @param value - 待检查的参数
 * @returns {boolean} 是中文字符时返回 true，否则返回 false
 */
export function isChineseCharacters(value: string): boolean {
  return CHINESE_CHARACTERS_REGEX.test(value);
}

/**
 * 判断是否为十进制数（支持科学记数法）
 * @param value - 待检查的参数
 * @returns {boolean} 是十进制数时返回 true，否则返回 false
 */
export function isDecimalScientificNotation(value: string): boolean {
  return DECIMAL_SCIENTIFIC_NOTATION_REGEX.test(value);
}

/**
 * 判断是否只包含数字
 * @param value - 待检查的参数
 * @returns {boolean} 只包含数字时返回 true，否则返回 false
 */
export function isOnlyNumbers(value: string): boolean {
  return ONLY_NUMBERS_REGEX.test(value);
}

/**
 * 判断是否为英文字母
 * @param value - 待检查的参数
 * @returns {boolean} 是英文字母时返回 true，否则返回 false
 */
export function isEnglishLetter(value: string): boolean {
  return ENGLISH_LETTER_REGEX.test(value);
}

/**
 * 判断是否为小写英文字母
 * @param value - 待检查的参数
 * @returns {boolean} 是小写英文字母时返回 true，否则返回 false
 */
export function isLowercaseEnglishLetter(value: string): boolean {
  return LOWERCASE_ENGLISH_LETTER_REGEX.test(value);
}

/**
 * 判断是否为大写英文字母
 * @param value - 待检查的参数
 * @returns {boolean} 是大写英文字母时返回 true，否则返回 false
 */
export function isUppercaseEnglishLetter(value: string): boolean {
  return UPPERCASE_ENGLISH_LETTER_REGEX.test(value);
}

/**
 * 判断是否为十六进制颜色
 * @param value - 待检查的参数
 * @returns {boolean} 是十六进制颜色时返回 true，否则返回 false
 */
export function isHexColor(value: string): boolean {
  return HEX_COLOR_REGEX.test(value);
}

/**
 * 判断是否为MAC地址
 * @param value - 待检查的参数
 * @returns {boolean} 是MAC地址时返回 true，否则返回 false
 */
export function isMacAddress(value: string): boolean {
  return MAC_ADDRESS_REGEX.test(value);
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
/**
 * 判断是否为有效的新能源车牌号
 * @param value - 待检查的车牌号
 * @returns {boolean} 是有效的新能源车牌号时返回 true，否则返回 false
 */
export function isValidNewEnergyLicensePlate(value: string): boolean {
  return NEW_ENERGY_LICENSE_PLATE_REGEX.test(value);
}

/**
 * 判断是否为有效的非新能源车牌号
 * @param value - 待检查的车牌号
 * @returns {boolean} 是有效的非新能源车牌号时返回 true，否则返回 false
 */
export function isValidNonNewEnergyLicensePlate(value: string): boolean {
  return NON_NEW_ENERGY_LICENSE_PLATE_REGEX.test(value);
}

/**
 * 判断是否为有效的车牌号（包括新能源和非新能源）
 * @param value - 待检查的车牌号
 * @returns {boolean} 是有效的车牌号时返回 true，否则返回 false
 */
export function isValidLicensePlate(value: string): boolean {
  return COMBINED_LICENSE_PLATE_REGEX.test(value);
}
