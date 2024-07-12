// ------------------------ converter ------------------------

export { currency, CurrencyCodeType, CurrencyUnitType, CurrencyOptions, convertCurrencyToNumber, getCurrencySeparators } from './basic/converter/currency';

export { CurrencyUnit, CurrencyCode } from './constants/enum';

// digit-uppercase (数字大写)
export { digitUppercase } from './basic/converter/digit-uppercase';

// number to words or Chinese (数字转换为英文单词或中文汉字)
export { numberToWords } from './basic/converter/number-to-words';

// ------------------------ finance ------------------------

// Finance expressions  (财务表达式)
export {
  calculateGrossAmount,
  calculateNetAmount,
  calculateTaxAmount,
  calculateTaxRate,
} from './basic/finance/expressions';
// Finance Sequences (财务序列)

export {
  arithmeticSequence,
  geometricSequence,
} from './basic/finance/sequence';

// ------------------------ formatter ------------------------


// ------------------------ math ------------------------

// computeExpression (计算表达式)
export { computeExpression } from './basic/math/compute-expression';

// unitConversion (单位换算)
export { unitConversion } from './basic/math/unit-conversion';

// math function (数学函数)
export {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  round,
  ceil,
  floor,
  pickRandom,
  random,
  randomInt,
  equal,
  unequal,
  larger,
  largerEq,
  smaller,
  smallerEq,
} from './basic/math/math';

// ------------------------ utils ------------------------

// validation (校验)
export {
  isValidNumber,
  isValidNumeric,
  isValidThousandSeparatedNumber,
  isValidBlank,
  areAllElementsNumbers,
  areAllElementsNumeric,
  isValidNumberCurrency,
  isValidNegativeInteger,
  isValidPositiveInteger,
  isValidNegativeFloat,
  isValidNonNegativeFloat,
  isValidPositiveFloat,
  isValidDecimalScientificNotation,
  isValidChinese,
  isValidChineseName,
  isValidChineseCharacters,
  isValidChineseBankCard,
  isValidChineseMobile,
  isValidChineseTel,
  isValidChinesePostalCode,
  isValidChineseTaxNumber,
  isValidEnglishLetter,
  isValidLowercaseEnglishLetter,
  isValidNonPositiveInteger,
  isValidFloat,
  isValidNonPositiveFloat,
  isValidEmail,
  isValidIP,
  isValidSubnetMask,
  isValidURL,
  isValidUnifiedSocialCreditIdentifier,
  isValidAccount,
  isValidUppercaseEnglishLetter,
  isValidHexColor,
  isValidMacAddress,
  isValidChineseIdCard,
  isValidNewEnergyLicensePlate,
  isValidNonNewEnergyLicensePlate,
  isValidLicensePlate,
} from './basic/utils/validation';

// getDecimalInfo (获取小数信息), getDecimalPlaces (获取小数位数), padZero (补零)
export {
  getDecimalInfo,
  getDecimalPlaces,
  padZero,
} from './basic/utils/common';

// id-card (身份证)
export { parseIdCard } from './basic/utils/id-card';

// animate number change (数字变化动画)
export { countTo } from './basic/animate/count-to';

// regex (正则)
export { REGEX, buildRegex } from './constants/regex';

