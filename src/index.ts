// ------------------------ converter ------------------------

// digit-uppercase (数字大写)
export { digitUppercase } from "./basic/converter/digit-uppercase";

// ------------------------ finance ------------------------

// Finance Calculations (财务计算)
export {
  calculateGrossAmount,
  calculateNetAmount,
  calculateTaxAmount,
  calculateTaxRate,
} from "./basic/finance";

// ------------------------ formatter ------------------------

// Thousand Separator (千位分隔符)
export {
  addThousandSeparator,
  removeThousandSeparator,
} from "./basic/formatter/thousand-separator";

// currency (货币)
export { formatCurrencyRenminbi } from "./basic/formatter/currency-renminbi";

// percentage (百分比)
export { formatPercentage } from "./basic/formatter/percentage";

// ------------------------ math ------------------------

// computeExpression (计算表达式)
export { computeExpression } from "./basic/math/compute-expression";

// unitConversion (单位换算)
export { unitConversion } from "./basic/math/unit-conversion";

// ------------------------ utils ------------------------

// validation (校验)
export {
  isNumeric,
  isValidThousandSeparatedNumber,
  isBlank,
} from "./basic/utils/validation";

// getDecimalInfo (获取小数信息), getDecimalPlaces (获取小数位数), padZero (补零)
export {
  getDecimalInfo,
  getDecimalPlaces,
  padZero,
} from "./basic/utils/common";

// ------------------------ Element Plus ------------------------

// thousand-separator for Element Plus input (el-input的千位分隔符)
export {
  formatDecimalForElementPlus,
  addThousandSeparatorForElementPlus,
  removeThousandSeparatorForElementPlus,
} from "./vue/element-plus/utils/formatter";

// Validation rule for Element Plus form (Element Plus表单校验规则)
export { isInRangeForElementPlus } from "./vue/element-plus/validation/range/index";
