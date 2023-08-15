export const THOUSAND_SEPARATED_NUMBER_REGEX = /^\d{1,3}(,\d{3})+(\.\d+)?$/; // thousand separated number(千分位数字)
export const THOUSAND_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g; // thousand separator(千分位分隔符)
export const REMOVE_THOUSAND_SEPARATOR_REGEX = /\$\s?|(,*)/g; // remove thousand separator(移除千分位分隔符)
export const BLANK_STRING_REGEX = /^\s*$/; // blank string(空白字符串)

// digit-uppercase
export const ZERO_DOT_REGEX = /零./;
export const ZERO_DOT_END_REGEX = /(零.)*零$/;
export const EMPTY_START_REGEX = /^$/;
export const ZERO_YUAN_REGEX = /(零.)*零元/;
export const ZERO_DOT_PLUS_REGEX = /(零.)+/g;
export const WHOLE_REGEX = /^整$/;

// ------------------------------- common -------------------------------
// number
export const NUMBER_REGEX = /^-?\d+(\.\d+)?$/; // number(数字)
export const INTEGER_REGEX = /^-?\d+$/; // integer(整数)
export const POSITIVE_INTEGER_REGEX = /^\d+$/; // positive integer(正整数)
export const NEGATIVE_INTEGER_REGEX = /^-\d+$/; // negative integer(负整数)
export const NON_POSITIVE_INTEGER_REGEX = /^((-\d+)|(0+))$/; // non-positive integer(非正整数)
export const NON_NEGATIVE_INTEGER_REGEX = /^\d+$/; // non-negative integer(非负整数)
export const FLOAT_REGEX = /^-?\d+\.\d+$/; // float(浮点数)
export const POSITIVE_FLOAT_REGEX = /^\d+\.\d+$/; // positive float(正浮点数)
export const NEGATIVE_FLOAT_REGEX = /^-\d+\.\d+$/; // negative float(负浮点数)
export const NON_POSITIVE_FLOAT_REGEX = /^((-\d+\.\d+)|(0+(\.0+)?))$/; // non-positive float(非正浮点数)
export const NON_NEGATIVE_FLOAT_REGEX = /^\d+(\.\d+)?$/; // non-negative float(非负浮点数)

// other
export const EMAIL_REGEX =
  /^(([^\s"(),.:;<>@[\\\]]+(\.[^\s"(),.:;<>@[\\\]]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([\dA-Za-z-]+\.)+[A-Za-z]{2,}))$/; // email(电子邮件)
export const IP_REGEX =
  /^((https?|ftp|file):\/\/)?((\d{1,3}\.){3}\d{1,3}|localhost)(:\d{1,5})?(\/[\w.-]*)*\/?$/; // ip(网址)
export const SUBNET_MASK_REGEX =
  /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/; // subnet mask(子网掩码)

export const URL_REGEX =
  /^((https?|ftp|file):\/\/)?([\d.a-z-]+)\.([.a-z]{2,6})(\/[\w.-]*)*\/?$/; // url(网址)

export const CHINESE_REGEX = /^[\u4E00-\u9FA5]+$/; // chinese(中文)

export const CHINESE_NAME_REGEX = /^[\u4E00-\u9FA5]{2,4}$/; // chinese name(中文姓名)

// chinese id card(中国身份证号)
export const CHINESE_ID_CARD_1G_REGEX =
  /^[1-9]\d{7}(?:0\d|10|11|12)(?:0[1-9]|[12]\d|30|31)\d{3}$/;
export const CHINESE_ID_CARD_2G_REGEX =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[12]\d|30|31)\d{3}[\dXx]$/;
export const CHINESE_ID_CARD_REGEX =
  /^\d{6}((((((19|20)\d{2})(0[13-9]|1[0-2])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[0-2])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))([\dXx])$/;

// Unified Social Credit Identifier (统一社会信用代码)
export const UNIFIED_SOCIAL_CREDIT_IDENTIFIER_REGEX =
  /^[\dA-HJ-NP-RTUW-Y]{2}\d{6}[\dA-HJ-NP-RTUW-Y]{10}$/;
export const LOOSE_UNIFIED_SOCIAL_CREDIT_IDENTIFIER_REGEX =
  /^(([\dA-Za-z]{15})|([\dA-Za-z]{18})|([\dA-Za-z]{20}))$/;

export const NUMBER_CURRENCY_REGEX = /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/; // 数字/货币金额（支持负数、千分位分隔符）

export const CHINESE_POSTAL_CODE_REGEX =
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/; // chinese postal code(中国邮政编码)

export const CHINESE_MOBILE_REGEX = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/; // chinese mobile(中国手机号)

export const CHINESE_TEL_REGEX =
  /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/; // chinese tel(中国固话号码)

export const CHINESE_BANK_CARD_REGEX = /^[1-9]\d{9,29}$/; // chinese bank card(中国银行卡号)

export const CHINESE_TAX_NUMBER_REGEX = /^[\dA-Za-z]{15,20}$/; // chinese tax number(中国税号)

// account is valid (starts with a letter, allows 5-16 bytes, allows combination of letters, numbers, and underscores)
export const VALID_ACCOUNT_REGEX = /^[A-Za-z]\w{4,15}$/;

// chinese characters
export const CHINESE_CHARACTERS_REGEX =
  /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/;

// decimal (supports scientific notation)
export const DECIMAL_SCIENTIFIC_NOTATION_REGEX =
  /^[+-]?(\d+(\.\d*)?([Ee][+-]?\d+)?|\.\d+([Ee][+-]?\d+)?)$/;

// contains only numbers
export const ONLY_NUMBERS_REGEX = /^\d+$/;
// english letters
export const ENGLISH_LETTER_REGEX = /^[A-Za-z]+$/;

// lower case english letters
export const LOWERCASE_ENGLISH_LETTER_REGEX = /^[a-z]+$/;

// upper case english letters
export const UPPERCASE_ENGLISH_LETTER_REGEX = /^[A-Z]+$/;
// hexadecimal color
export const HEX_COLOR_REGEX =
  /^#?([\dA-Fa-f]{6}|[\dA-Fa-f]{3}|[\dA-Fa-f]{8}|[\dA-Fa-f]{4})$/;

// mac address
export const MAC_ADDRESS_REGEX =
  /^(([\da-f][,02468ace]:([\da-f]{2}:){4})|([\da-f][,02468ace]-([\da-f]{2}-){4}))[\da-f]{2}$/i;

export const REGEX_MAP = {};
