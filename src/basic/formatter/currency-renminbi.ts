/**
 * Formats a number as RMB currency, with options for precision and grouping.
 * 根据需要格式化人民币，提供精度和分组配置的选项。
 *
 * @param value The number to format. (要格式化的数字。)
 * @param options (Optional) Formatting options, including precision and useGrouping.
 * (可选) 格式化选项，包括精度和是否使用分组分割。
 * @returns The formatted RMB string. (返回格式化后的人民币字符串。)
 */

export function formatCurrencyRMB(
  value: number,
  options?: {
    precision?: number;
    useGrouping?: boolean;
  },
): string {
  const { precision = 2, useGrouping = true } = options || {};
  const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
    useGrouping,
  });
  return formatter.format(value);
}
