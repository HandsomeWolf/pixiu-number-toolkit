import { computeExpression } from '../index';

const onesZh = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const tensZh = ['', '十', '百', '千'];
const thousandsZh = ['', '万', '亿'];
const MAX_SAFE_INTEGER = 100_000_000_000; // 1000亿
/**
 * Convert number to words in English or Chinese.
 * 将数字转换为英文或中文表示的文字
 *
 * @param number_ - The number to convert (要转换的数字)
 * @returns The number in words (文字形式的数字)
 */
export function numberToChineseCharacter(number_: number): string {
  if (Math.abs(number_) >= MAX_SAFE_INTEGER) {
    throw new Error('输入的整数部分必须在-1000亿到1000亿之间');
  }

  if (number_ === 0) return '零';

  const isNegative = number_ < 0;
  number_ = Math.abs(number_);

  const integerPart = Math.floor(number_);
  const decimalPart = Number(computeExpression(`${number_} - ${integerPart}`));

  let words = integerPart === 0 ? '零' : convertInteger(integerPart);

  if (decimalPart > 0) {
    words += `点${convertDecimal(decimalPart)}`;
  }

  return isNegative ? `负${words}` : words;
}

function convertInteger(number_: number): string {
  let words = '';
  let previousPart = 0;
  for (let index = 0; number_ > 0; index++) {
    const currentPart = number_ % 10_000;
    if (currentPart !== 0) {
      const currentWords = helperZh(currentPart);
      if (previousPart < 1000 && previousPart !== 0 && index > 0) {
        words = `零${words}`;
      }
      words = currentWords + (index > 0 ? thousandsZh[index] : '') + words;
    }
    previousPart = currentPart;
    number_ = Math.floor(number_ / 10_000);
  }
  return words.trim();
}

function convertDecimal(decimal: number): string {
  const decimalStr = decimal.toString().slice(2); // 保留两位小数并去掉"0."
  return decimalStr.split('').map((digit) => {
    // 如果当前数字是0，并且不是第一个数字，并且下一个数字不是0，则添加"零"
    if (digit === '0') {
      return '零';
    }
    return onesZh[parseInt(digit, 10)];
  }).join('');
}

/**
 * Helper function to convert numbers to Chinese words.
 * 将数字转换为中文文字的辅助函数.
 *
 * @param number_ - The number to convert (要转换的数字)
 * @returns The number in Chinese words (中文文字形式的数字)
 */
function helperZh(number_: number): string {
  if (number_ === 0) {
    return '';
  } else if (number_ < 10) {
    return onesZh[number_];
  } else if (number_ === 10) {
    return tensZh[1]; // eg. 10 -> 十
  } else {
    let words = '';
    let unit = 0;
    let zeroFlag = false; // Flag to mark the need to add "零" (标记是否需要添加“零”)
    let hasNonZero = false; // Flag to mark the encounter of non-zero digit (标记是否遇到非零数字)
    while (number_ > 0) {
      const digit = number_ % 10;
      if (digit === 0) {
        if (hasNonZero) {
          zeroFlag = true;
        }
      } else {
        hasNonZero = true;
        if (zeroFlag) {
          words = `零${words}`;
          zeroFlag = false;
        }
        words = onesZh[digit] + tensZh[unit] + words;
      }
      number_ = Math.floor(number_ / 10);
      unit++;
    }
    return words.replace(/零+$/, ''); // Remove trailing zeros (去除末尾多余的零)
  }
}
