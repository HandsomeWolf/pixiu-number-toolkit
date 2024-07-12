import { RegexOptions } from '../../types/common';

// thousand separator(千分位分隔符)
// example: "1234567890".replace(THOUSAND_SEPARATOR_REGEX, ','); -> "1,234,567,890"
export const THOUSAND_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;

// export const TRIM_NON_NUMERIC_REGEX = /^[^\d.-]+|[^\d.-]+$/g;
export const TRIM_NON_NUMERIC_REGEX = /[^\d.-]+/g;
// digit-uppercase
// export const ZERO_DOT_REGEX = /零./;
export const ZERO_DOT_END_REGEX = /(零.)*零$/;
export const EMPTY_START_REGEX = /^$/;
export const ZERO_YUAN_REGEX = /(零.)*零元/;
export const ZERO_DOT_PLUS_REGEX = /(零.)+/g;
export const WHOLE_REGEX = /^整$/;

// ------------------------------- common -------------------------------


export const REGEX = {

  /**
   * a thousand separated number(千分位数字)
   */
  THOUSAND_SEPARATED_NUMBER: /\d{1,3}(,\d{3})+(\.\d+)?/,

  /**
   * number(数字)
   */
  NUMBER: /-?\d+(\.\d+)?/,
  /**
   * integer(整数)
   */
  INTEGER: /-?\d+/,

  /**
   * positive integer(正整数)
   */
  POSITIVE_INTEGER: /\d+/,

  /**
   * negative integer(负整数)
   */
  NEGATIVE_INTEGER: /-\d+/,

  /**
   * non-positive integer(非正整数)
   */
  NON_POSITIVE_INTEGER: /((-\d+)|(0+))/,

  /**
   * float(浮点数)
   */
  FLOAT: /-?\d+\.\d+/,

  /**
   * positive float(正浮点数)
   */
  POSITIVE_FLOAT: /\d+\.\d+/,

  /**
   * negative float(负浮点数)
   */
  NEGATIVE_FLOAT: /-\d+\.\d+/,

  /**
   * non-positive float(非正浮点数)
   */
  NON_POSITIVE_FLOAT: /((-\d+\.\d+)|(0+(\.0+)?))/,

  /**
   * non-negative float(非负浮点数)
   */
  NON_NEGATIVE_FLOAT: /\d+(\.\d+)?/,

  /**
   *   Numeric/currency amount (supports negative numbers, thousand separators)
   *   数字/货币金额（支持负数、千分位分隔符）
   */
  NUMBER_CURRENCY: /-?\d{1,3}(,\d{3})*(\.\d+)?/,

  /**
   * chinese postal code(中国邮政编码)
   */
  CHINESE_POSTAL_CODE: /(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}/,

  /**
   * chinese mobile(中国手机号)
   */
  CHINESE_MOBILE: /(?:(?:\+|00)86)?1[3-9]\d{9}/,

  /**
   * chinese tel(中国固话号码)
   */
  CHINESE_TEL: /(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?/,

  /**
   * chinese bank card(中国银行卡号)
   */
  CHINESE_BANK_CARD: /[1-9]\d{9,29}/,

  /**
   * chinese tax number(中国税号)
   */
  CHINESE_TAX_NUMBER: /[\dA-Za-z]{15,20}/,
  /**
   * decimal number (supports scientific notation)
   * 十进制数（支持科学记数法）
   */
  DECIMAL_SCIENTIFIC_NOTATION: /[+-]?(\d+(\.\d*)?([Ee][+-]?\d+)?|\.\d+([Ee][+-]?\d+)?)/,
  // },
  // string: {
  //
  /**
   * blank string(空白字符串)
   */
  BLANK: /\s*/,

  /**
   * non-special characters(非特殊字符)
   */
  NON_SPECIAL_CHARACTERS: /[^!@#$%^&*()_+\-=\[\]{};:"|,.<>\/?]*/, // eslint-disable-line no-useless-escape
  EMOJI: /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/,
  EMAIL: /(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))/,

  /**
   * ip address(IP网址)
   */
  IP_ADDRESS: /((https?|ftp|file):\/\/)?((\d{1,3}\.){3}\d{1,3}|localhost)(:\d{1,5})?(\/[\w.-]*)*/,
  IPV4: /(([01]?\d\d?|2[0-4]\d|25[0-5])((:([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?$|\.(?!$))){4}/,

  /**
   * subnet mask(子网掩码)
   */
  SUBNET_MASK: /(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)/,

  /**
   * mac address(mac地址)
   */
  MAC_ADDRESS: /(([\da-f][,02468ace]:([\da-f]{2}:){4})|([\da-f][,02468ace]-([\da-f]{2}-){4}))[\da-f]{2}/i,
  URL: /((https?|ftp|file):\/\/)?([\d.a-z-]+)\.([.a-z]{2,6})(\/[\w.-]*)*\/?/,

  /**
   * simplified chinese(简体中文)
   */
  CHINESE: /[\u4E00-\u9FA5]+/,

  /**
   * chinese name(中文姓名)
   */
  CHINESE_NAME: /[\u4E00-\u9FA5]{2,4}/,

  /**
   * chinese id card 1G(中国身份证号1代)
   */
  CHINESE_ID_CARD_1: /[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[12]\d|30|31)\d{3}/,

  /**
   * chinese id card 2G(中国身份证号2代)
   */
  CHINESE_ID_CARD_2: /[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[12]\d|30|31)\d{3}[\dXx]/,

  /**
   * chinese id card(中国身份证号)
   */
  CHINESE_ID_CARD: /\d{6}((((((19|20)\d{2})(0[13-9]|1[0-2])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[0-2])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))([\dXx])/,

  /**
   * Unified Social Credit Identifier (统一社会信用代码)
   */
  UNIFIED_SOCIAL_CREDIT_IDENTIFIER: /[\dA-HJ-NP-RTUW-Y]{2}\d{6}[\dA-HJ-NP-RTUW-Y]{10}/,

  /**
   * loose unified social credit identifier(宽松统一社会信用代码)
   */
  LOOSE_UNIFIED_SOCIAL_CREDIT_IDENTIFIER: /(([\dA-Za-z]{15})|([\dA-Za-z]{18})|([\dA-Za-z]{20}))/,

  /**
   * New energy vehicle license plate(新能源车牌号)
   */
  NEW_ENERGY_LICENSE_PLATE: /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](([DF]((?![IO])[a-zA-Z0-9](?![IO]))[0-9]{4})|([0-9]{5}[DF]))/,

  /**
   * Non-new energy vehicle license plate(非新能源车牌号)
   */
  NON_NEW_ENERGY_LICENSE_PLATE: /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]/,
  /**
   * Combined, for both new energy and non-new energy vehicle license plates(联合新能源和非新能源车牌号)
   */
  COMBINED_LICENSE_PLATE: /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]/,

  /**
   *   starts with a letter, allows 5-16 bytes,
   *   allows combination of letters, numbers, and underscores
   *   以字母开头，允许5-16个字节，
   *   允许字母、数字和下划线组合
   */
  ACCOUNT: /[A-Za-z]\w{4,15}/,

  /**
   * chinese characters(中文字符，包括繁体)
   */
  CHINESE_CHARACTERS:
      /(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+/,

  /**
   * hexadecimal color(十六进制颜色#cf0cf0)
   */
  HEX_COLOR: /#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3}|[\dA-Fa-f]{8}|[\dA-Fa-f]{4})/,

  /**
   * english letters(英文字母)
   */
  ENGLISH_LETTER: /[A-Za-z]+/,

  /**
   * lower case english letters(小写英文字母)
   */
  LOWERCASE_ENGLISH_LETTER: /[a-z]+/,

  /**
   * upper case english letters(大写英文字母)
   */
  UPPERCASE_ENGLISH_LETTER: /[A-Z]+/,

  // },
};

/**
 * dynamically build regex(动态构建正则表达式)
 * @param baseRegex - regex(正则表达式)
 * @param options - 选项对象，包含是否全字符串匹配、是否全局搜索等选项
 * @return 返回构建的正则表达式
 */
export function buildRegex(baseRegex: RegExp, options: RegexOptions = {}): RegExp {
  const {
    strict = false,
    global = false,
    ignoreCase = false,
    multiLine = false,
    dotAll = false,
    unicode = false,
    sticky = false,
  } = options;

  let { flags } = baseRegex;
  flags += global ? 'g' : '';
  flags += ignoreCase ? 'i' : '';
  flags += multiLine ? 'm' : '';
  flags += dotAll ? 's' : '';
  flags += unicode ? 'u' : '';
  flags += sticky ? 'y' : '';

  // remove duplicate flags(移除重复的标志)
  flags = Array.from(new Set(flags)).join('');

  let regexStr = baseRegex.source;
  if (strict) {
    regexStr = `^${regexStr}$`;
  }

  return new RegExp(regexStr, flags);
}
