import { computeExpression } from '../../../src';

/**
 * Calculate the gross amount including tax.
 * 计算含税金额。
 *
 * @param netAmount - The net amount (不含税金额).
 * @param taxRate - The tax rate in decimal form (税率，以小数形式表示).
 * @returns The gross amount including tax (含税金额).
 */
export function calculateGrossAmount(netAmount: number, taxRate: number): number {
  return Number(computeExpression(`${netAmount}*(1+${taxRate})`));
}

/**
 * Calculate the tax rate based on gross and net amounts.
 * 根据总金额和净金额计算税率。
 *
 * @param grossAmount - The gross amount (总金额).
 * @param netAmount - The net amount (净金额).
 * @returns The tax rate as a decimal (税率，以小数形式).
 */
export function calculateTaxRate(grossAmount: number, netAmount: number): number {
  return Number(computeExpression(`(${grossAmount} - ${netAmount}) / ${netAmount}`));
}

/**
 * Calculate the tax amount based on gross and net amounts.
 * 根据总金额和净金额计算税额。
 *
 * @param grossAmount - The gross amount (总金额).
 * @param netAmount - The net amount (净金额).
 * @returns The tax amount (税额).
 */
export function calculateTaxAmount(grossAmount: number, netAmount: number): number {
  return Number(computeExpression(`${grossAmount} - ${netAmount}`));
}

/**
 * Calculate the net amount excluding tax.
 * 计算裸税金额。
 *
 * @param grossAmount - The gross amount (含税金额).
 * @param taxRate - The tax rate in decimal form (税率，以小数形式表示).
 * @returns The net amount excluding tax (裸税金额).
 */
export function calculateNetAmount(grossAmount: number, taxRate: number): number {
  return Number(computeExpression(`${grossAmount} / (1 + ${taxRate})`));
}

/**
 * Calculate the price after applying a discount rate to the original price.
 * 根据原价和折扣率计算折扣后的价格。
 *
 * @param originalPrice - The original price (原价).
 * @param discountRate - The discount rate (折扣率).
 * @returns The price after discount (折扣后的价格).
 */
export function calculateDiscountPrice(originalPrice: number, discountRate: number): number {
  return Number(computeExpression(`${originalPrice} * (1 - ${discountRate})`));
}

/**
 * Calculate the discount amount based on the original price and discount rate.
 * 根据原价和折扣率计算折扣金额。
 *
 * @param originalPrice - The original price (原价).
 * @param discountRate - The discount rate (折扣率).
 * @returns The discount amount (折扣金额).
 */
export function calculateDiscountAmount(originalPrice: number, discountRate: number): number {
  return Number(computeExpression(`${originalPrice} * ${discountRate}`));
}
