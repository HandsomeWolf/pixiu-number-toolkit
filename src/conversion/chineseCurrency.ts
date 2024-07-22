import {
  EMPTY_START_REGEX,
  WHOLE_REGEX,
  ZERO_DOT_END_REGEX,
  ZERO_DOT_PLUS_REGEX,
  ZERO_YUAN_REGEX,
} from '../index';

const fractionUnit = ['角', '分'];
const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
const unit = [
  ['元', '万', '亿'],
  ['', '拾', '佰', '仟'],
];

const MAX_CONVERTIBLE_AMOUNT = 999999999999.99;

export function numberToChineseUppercaseCurrency(n: number): string {
  if (Math.abs(n) > MAX_CONVERTIBLE_AMOUNT) {
    throw new Error('金额超出可转换范围');
  }

  const head = n < 0 ? '欠' : '';
  n = Math.abs(n);

  const fraction = fractionUnit.reduce((acc, curr, idx) => {
    const value = digit[Math.floor(n * 10 * (10 ** idx)) % 10];
    return value !== '零' ? acc + value + curr : acc;
  }, '') || '整';

  let integer = '';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    integer = p.replace(ZERO_DOT_END_REGEX, '').replace(EMPTY_START_REGEX, '零') + unit[0][i] + integer;
  }

  return head + (integer + fraction)
    .replace(ZERO_YUAN_REGEX, '元')
    .replace(ZERO_DOT_PLUS_REGEX, '零')
    .replace(WHOLE_REGEX, '零元整');
}

const digitMap: Record<string, number> = {
  零: 0, 壹: 1, 贰: 2, 叁: 3, 肆: 4, 伍: 5, 陆: 6, 柒: 7, 捌: 8, 玖: 9,
};

const unitMap: Record<string, number> = {
  拾: 10, 佰: 100, 仟: 1000, 万: 10000, 亿: 100000000,
};

export function chineseUppercaseCurrencyToNumber(s: string): number {
  let result = 0;
  let currentNum = 0;
  let isNegative = false;
  let temp = 0;
  let tempResult = 0;

  if (s.startsWith('欠')) {
    isNegative = true;
    s = s.slice(1);
  }

  for (const char of s) {
    if (char in digitMap) {
      currentNum = digitMap[char];
    } else if (char in unitMap) {
      if (currentNum === 0 && char === '拾') {
        currentNum = 1;
      }
      if (unitMap[char] >= 10000) {
        temp += currentNum;
        tempResult += temp * unitMap[char];
        if (char === '亿') {
          result += tempResult;
          tempResult = 0;
        }
        temp = 0;
      } else {
        temp += currentNum * unitMap[char];
      }
      currentNum = 0;
    } else if (char === '元' || char === '整') {
      temp += currentNum;
      tempResult += temp;
      result += tempResult;
      temp = 0;
      tempResult = 0;
      currentNum = 0;
    } else if (char === '角') {
      result += currentNum * 0.1;
      currentNum = 0;
    } else if (char === '分') {
      result += currentNum * 0.01;
      currentNum = 0;
    }
  }

  result += tempResult + temp + currentNum;
  return isNegative ? -result : result;
}
