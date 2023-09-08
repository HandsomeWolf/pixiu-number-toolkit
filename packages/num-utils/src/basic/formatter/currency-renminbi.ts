/**
 *  格式化人民币
 * @param value 要格式化的数字
 * @returns 返回格式化后的人民币字符串
 */
export function formatCurrencyRenminbi(value: number): string {
  const formatter = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
  });
  return formatter.format(value);
}
