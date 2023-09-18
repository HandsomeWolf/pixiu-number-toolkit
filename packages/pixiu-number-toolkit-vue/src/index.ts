// ------------------------ converter ------------------------

// digit-uppercase (数字大写)
export { digitUppercase } from "pixiu-number-toolkit";

// number to words or Chinese (数字转换为英文单词或中文汉字)
export { numberToWords } from "pixiu-number-toolkit";

// ------------------------ finance ------------------------

// Finance expressions  (财务表达式)
export {
  calculateGrossAmount,
  calculateNetAmount,
  calculateTaxAmount,
  calculateTaxRate,
} from "pixiu-number-toolkit";
// Finance Sequences (财务序列)
export { arithmeticSequence, geometricSequence } from "pixiu-number-toolkit";

// ------------------------ formatter ------------------------

// Thousand Separator (千位分隔符)
export {
  addThousandSeparator,
  removeThousandSeparator,
} from "pixiu-number-toolkit";

// currency (货币)
export { formatCurrencyRenminbi } from "pixiu-number-toolkit";

// percentage (百分比)
export { formatPercentage } from "pixiu-number-toolkit";

// ------------------------ math ------------------------

// computeExpression (计算表达式)
export { computeExpression } from "pixiu-number-toolkit";

// unitConversion (单位换算)
export { unitConversion } from "pixiu-number-toolkit";

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
} from "pixiu-number-toolkit";

// ------------------------ utils ------------------------

// validation (校验)
export {
  isNumeric,
  isValidThousandSeparatedNumber,
  isBlank,
} from "pixiu-number-toolkit";

// getDecimalInfo (获取小数信息), getDecimalPlaces (获取小数位数), padZero (补零)
export {
  getDecimalInfo,
  getDecimalPlaces,
  padZero,
} from "pixiu-number-toolkit";

// id-card (身份证)
export { parseIdCard } from "pixiu-number-toolkit";

// animate number change (数字变化动画)
export { countTo } from "pixiu-number-toolkit";
// ------------------------ Element Plus ------------------------

// thousand-separator for Element Plus input (el-input的千位分隔符)
export {
  formatDecimalForElementPlus,
  addThousandSeparatorForElementPlus,
  removeThousandSeparatorForElementPlus,
} from "./element-plus/utils/formatter";

// Validation rule for Element Plus form (Element Plus表单校验规则)
export { isInRangeForElementPlus } from "./element-plus/validation/range/index";

// Summary row for Element Plus table (Element Plus表格尾合计行)
export { summaryRowForElementPlus } from "./element-plus/utils/summary-row";
