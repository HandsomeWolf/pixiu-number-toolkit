import {
  EMPTY_START_REGEX,
  WHOLE_REGEX,
  ZERO_DOT_END_REGEX,
  ZERO_DOT_PLUS_REGEX,
  ZERO_YUAN_REGEX,
} from '../../constants/regex';

// Define the fraction part (定义小数部分)
const fraction = ['角', '分'];
// Define the digit part (定义数字部分)
const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
// Define the unit part (定义单位部分)
const unit = [
  ['元', '万', '亿', '万亿', '兆'],
  ['', '拾', '佰', '仟'],
];

/**
 * Convert amount to uppercase (将金额转换为大写)
 * @param n amount (金额)
 * @returns amount in uppercase (金额的大写形式)
 */
export function digitUppercase(n: number): string {
  // Handle negative numbers (处理负数)
  const head = n < 0 ? '欠' : '';
  n = Math.abs(n);

  // Convert the fraction part (转换小数部分)
  let s = fraction.reduce((acc, curr, idx) => {
    const value = digit[Math.floor(n * 10 * (10 ** idx)) % 10];
    return value !== '零' ? acc + value + curr : acc;
  }, '') || '整';

  // Convert the integer part (转换整数部分)
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(ZERO_DOT_END_REGEX, '').replace(EMPTY_START_REGEX, '零') + unit[0][i] + s;
  }

  // Return the final result (返回最终结果)
  return (
    head +
    s
      .replace(ZERO_YUAN_REGEX, '元')
      .replaceAll(ZERO_DOT_PLUS_REGEX, '零')
      .replace(WHOLE_REGEX, '零元整')
  );
}
