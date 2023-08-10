import { BigNumber } from 'mathjs';

/**
 * Convert amount to uppercase (将金额转换为大写)
 * @param n amount (金额)
 * @returns amount in uppercase (金额的大写形式)
 */
declare function digitUppercase(n: number): string;

declare function calculateGrossAmount(netAmount: number, taxRate: number): number;
declare function calculateTaxRate(grossAmount: number, netAmount: number): number;
declare function calculateTaxAmount(grossAmount: number, netAmount: number): number;
declare function calculateNetAmount(grossAmount: number, taxRate: number): number;

/**
 *  转换为千分位格式
 * @param value 要转换的数字，可以是数字、字符串
 * @param asString 是否将结果转换为字符串，默认为false
 * @returns 如果value为数字或字符串，返回千分位格式的数字或字符串；
 *          如果value为null或undefined，返回null或undefined；
 *          如果value为0或空字符串，根据asString参数返回0或"0"。
 */
declare function addThousandSeparator(value: string | number, asString?: boolean): IOType;
/**
 *  移除千分位格式
 * @param input 要移除千分位格式的字符串数字
 * @returns 如果input为数字或字符串，返回移除千分位格式后的数字；
 *          如果input为null或undefined或空字符串，返回0。
 */
declare function removeThousandSeparator(input: string, defaultReturn?: any): IOType;

/**
 *  格式化人民币
 * @param value 要格式化的数字
 * @returns 返回格式化后的人民币字符串
 */
declare function formatCurrencyRenminbi(value: number): string;

/**
 *  格式化百分比
 * @param input 要格式化的数字或字符串，可以是数字、字符串、null或undefined
 * @param decimalPlaces 小数位数，如果为boolean类型，将被视为carrySymbol参数
 * @param carrySymbol 是否带有百分号，默认为true
 * @returns 如果input为数字或字符串，返回格式化后的百分比字符串；
 *          如果input为null或undefined，返回null或undefined；
 *          如果input为非数字字符串，返回原字符串。
 */
declare function formatPercentage(input: IOType, options?: {
    decimalPlaces?: number;
    carrySymbol?: boolean;
}): IOType;

interface Parameters {
    [key: string]: number | string | BigNumber;
}
declare function computeExpression(formula: string, parameters: Parameters, decimalPlaces: number): number;
declare function computeExpression(formula: string, parameters: Parameters, decimalPlaces: number, useThousandSeparator: boolean): string;
declare function computeExpression(formula: string, parameters: Parameters): number;
declare function computeExpression(formula: string, parameters: Parameters, useThousandSeparator: boolean): string;
declare function computeExpression(formula: string, decimalPlaces: number): number;
declare function computeExpression(formula: string, decimalPlaces: number, useThousandSeparator: boolean): string;
declare function computeExpression(formula: string): number;
declare function computeExpression(formula: string, useThousandSeparator: boolean): string;
declare function unitConversion(value: number, fromUnit: string, toUnit: string, withUnit?: boolean): string | number;

/**
 *  判断是否为千分位格式
 * @param string_ 要判断的字符串
 * @returns 如果string_为千分位格式，返回true；否则返回false。
 */
declare function isValidThousandSeparatedNumber(string_: string): boolean;
/**
 * 判断字符串是否为空或只包含空格
 * @param {string} str - 待检查的字符串
 * @returns {boolean} 是空字符串或只包含空格时返回 true，否则返回 false
 */
declare function isBlank(string_: string): boolean;
/**
 * 判断参数是否为数字或字符串数字
 * @param {string | number} val - 待检查的参数
 * @returns {boolean} 是数字或字符串数字时返回 true，否则返回 false
 */
declare function isNumeric(value: string | number): boolean;

interface DecimalInfo {
    /**
     * The string form of the number (数字的字符串形式)
     */
    valueString: string;
    /**
     * The index position of the decimal point (小数点的索引位置)
     */
    decimalIndex: number;
    /**
     * The length of the decimal part (小数部分的长度)
     */
    decimalLength: number;
    /**
     * The integer part of the number (整数部分)
     */
    integerPart: string;
    /**
     * The decimal part of the number (小数部分)
     */
    decimalPart: string;
    /**
     * The length of the integer part (整数部分的长度)
     */
    integerLength: number;
}
/**
 * Get the decimal information of a number (获取数字的小数信息)
 * @param value - The input number (输入的数字)
 * @returns The decimal information object (小数信息对象)
 */
declare const getDecimalInfo: (value: number) => DecimalInfo;
/**
 * Get the number of decimal places of a number
 *
 * 获取数字的小数位数
 * @param value - The input number (输入的数字)
 * @returns The number of decimal places of the input number (返回输入数字的小数位数)
 */
declare const getDecimalPlaces: (value: number) => number;
/**
 * Pad a number with zeros
 *
 * 为数字填充零
 * @param value - The number to be padded (需要填充的数字)
 * @param decimalLength - The number of decimal places (小数位数)
 * @returns If no decimal places are specified, return the original number string; otherwise, return the padded number string
 *          如果没有指定小数位数，返回原数字字符串；否则，返回填充后的数字字符串
 */
declare const padZero: (value: number, decimalLength?: number) => string;

declare const addThousandSeparatorForElementPlus: (value: string) => string;
declare const removeThousandSeparatorForElementPlus: (value: string, options?: {
    decimalPlaces?: number;
    defaultReturn?: string;
}) => string;
/**
 * `formatDecimalForElementPlus` 函数用于删除千位分隔符并保留2位小数
 * @param {string} value - 输入的字符串，期望是一个包含千位分隔符的数字字符串
 * @param {object} options - 可选参数，包含 `defaultReturn` 属性，当输入的 `value` 不符合预期时，将返回 `defaultReturn` 的值
 * @returns {string} 返回处理后的字符串，该字符串已删除千位分隔符，并保留2位小数
 * @example https://github.com/element-plus/element-plus/blob/dev/packages/utils/number.ts
 */
declare const formatDecimalForElementPlus: (value: string, options?: {
    defaultReturn?: string;
}) => string;

interface Options {
    /**
     * Whether the value is required (值是否必填)
     */
    positive?: boolean;
    /**
     * Whether to allow integers (是否允许整数)
     */
    integer?: boolean;
    /**
     * Whether to allow positive integers (是否允许正整数)
     */
    positiveInteger?: boolean;
    /**
     * Whether to allow negative numbers (是否允许负数)
     */
    negative?: boolean;
    /**
     * Whether to allow negative integers (是否允许负整数)
     */
    negativeInteger?: boolean;
    /**
     * The number of decimal places (小数位数)
     */
    decimal?: number;
    /**
     * The minimum value (最小值)
     */
    min?: number;
    /**
     * The maximum value (最大值)
     */
    max?: number;
    /**
     * The unit of the value (值的单位)
     */
    unit?: string;
}
interface Rule {
    required: boolean;
}
type Callback = (error?: Error) => void;
declare const isInRangeForElementPlus: (name: string, options?: Options, lang?: "en" | "zh") => (rule: Rule, value: any, callback: Callback) => void;

export { addThousandSeparator, addThousandSeparatorForElementPlus, calculateGrossAmount, calculateNetAmount, calculateTaxAmount, calculateTaxRate, computeExpression, digitUppercase, formatCurrencyRenminbi, formatDecimalForElementPlus, formatPercentage, getDecimalInfo, getDecimalPlaces, isBlank, isInRangeForElementPlus, isNumeric, isValidThousandSeparatedNumber, padZero, removeThousandSeparator, removeThousandSeparatorForElementPlus, unitConversion };
