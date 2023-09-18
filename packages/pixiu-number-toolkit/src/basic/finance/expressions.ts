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
