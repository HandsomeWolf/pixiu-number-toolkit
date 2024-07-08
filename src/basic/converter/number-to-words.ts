const onesEn = [
  '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
];
const teensEn = [
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
];
const tensEn = [
  '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
];
const thousandsEn = ['', 'thousand', 'million', 'billion'];

const onesZh = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const tensZh = ['', '十', '百', '千'];
const thousandsZh = ['', '万', '亿', '兆'];

/**
 * Convert number to words in English or Chinese.
 * 将数字转换为英文或中文表示的文字
 *
 * @param number_ - The number to convert (要转换的数字)
 * @param lang - The language for the conversion ('en' for English, 'zh' for Chinese) (转换的语言)
 * @returns The number in words (文字形式的数字)
 */
export function numberToWords(number_: number, lang: 'en' | 'zh' = 'zh'): string {
  if (number_ === 0) return lang === 'en' ? 'zero' : '零';

  let words = '';
  if (lang === 'en') {
    for (let index = 0; number_ > 0; index++) {
      if (number_ % 1000 !== 0) {
        words = `${helperEn(number_ % 1000) + thousandsEn[index]} ${words}`;
      }
      number_ = Math.floor(number_ / 1000);
    }
  } else {
    let previousPart = 0; // 用于记录前一部分的数字
    for (let index = 0; number_ > 0; index++) {
      const currentPart = number_ % 10_000;
      if (currentPart !== 0) {
        const currentWords = helperZh(currentPart);
        if (previousPart < 1000 && previousPart !== 0 && index > 0) {
          // 如果当前部分小于1000且不为0，且不是第一部分，则在前一部分和当前部分之间添加“零”
          words = `零${words}`;
        }
        words = currentWords + thousandsZh[index] + words;
      }
      previousPart = currentPart;
      number_ = Math.floor(number_ / 10_000);
    }
  }
  return words.trim();
}

/**
 * Helper function to convert numbers to English words.
 * 将数字转换为英文文字的辅助函数.
 *
 * @param number_ - The number to convert (要转换的数字)
 * @returns The number in English words (英文文字形式的数字)
 */
function helperEn(number_: number): string {
  if (number_ === 0) {
    return '';
  } else if (number_ < 10) {
    return `${onesEn[number_]} `;
  } else if (number_ < 20) {
    return `${teensEn[number_ - 11]} `;
  } else if (number_ < 100) {
    return `${tensEn[Math.floor(number_ / 10)]} ${helperEn(number_ % 10)}`;
  } else {
    return `${onesEn[Math.floor(number_ / 100)]} hundred ${helperEn(number_ % 100)}`;
  }
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
