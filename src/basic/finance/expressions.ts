// TODO: 改为mathjs
// 计算含税金额
export function calculateGrossAmount(
  netAmount: number,
  taxRate: number,
): number {
  return netAmount * (1 + taxRate);
}

// 计算税率
export function calculateTaxRate(
  grossAmount: number,
  netAmount: number,
): number {
  return (grossAmount - netAmount) / netAmount;
}

// 计算税额
export function calculateTaxAmount(
  grossAmount: number,
  netAmount: number,
): number {
  return grossAmount - netAmount;
}

// 计算裸税金额
export function calculateNetAmount(
  grossAmount: number,
  taxRate: number,
): number {
  return grossAmount / (1 + taxRate);
}

// 计算累积税率
export function calculateCompoundTaxRate(
  taxRates: number[],
): number {
  return taxRates.reduce((acc, rate) => acc * (1 + rate), 1) - 1;
}

/**
 * Calculate the price after discount (计算折扣后的价格).
 *
 * @param originalPrice - The original price (原价)
 * @param discountRate - The discount rate (折扣率)
 * @returns The price after discount (折扣后的价格)
 */
export function calculateDiscountPrice(originalPrice: number, discountRate: number): number {
  return originalPrice * (1 - discountRate);
}

/**
 * Calculate the discount amount (计算折扣金额).
 *
 * @param originalPrice - The original price (原价)
 * @param discountRate - The discount rate (折扣率)
 * @returns The discount amount (折扣金额)
 */
export function calculateDiscountAmount(originalPrice: number, discountRate: number): number {
  return originalPrice * discountRate;
}
