import {
  REMOVE_THOUSAND_SEPARATOR_REGEX,
  THOUSAND_SEPARATOR_REGEX,
} from '../../constants/regex';
import { isValidThousandSeparatedNumber } from '../utils/validation';

/**
 *  转换为千分位格式
 * @param value 要转换的数字，可以是数字、字符串
 * @param asString 是否将结果转换为字符串，默认为false
 * @returns 如果value为数字或字符串，返回千分位格式的数字或字符串；
 *          如果value为null或undefined，返回null或undefined；
 *          如果value为0或空字符串，根据asString参数返回0或"0"。
 */
export function addThousandSeparator(
  value: string | number,
  asString = false,
): IOType {
  if (value === null || value === undefined || value === 0 || value === '') {
    return asString ? String(value) : value;
  }

  const [integerPart, decimalPart] = String(value).split('.');
  const formattedIntegerPart = integerPart.replaceAll(
    THOUSAND_SEPARATOR_REGEX,
    ',',
  );

  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
}

/**
 *  移除千分位格式
 * @param input 要移除千分位格式的字符串数字
 * @param defaultReturn
 * @returns 如果input为数字或字符串，返回移除千分位格式后的数字；
 *          如果input为null或undefined或空字符串，返回0。
 */
export function removeThousandSeparator(
  input: string,
  defaultReturn?: any,
): IOType {
  const getDefaultReturn = (result: IOType) =>
    (defaultReturn === undefined ? result : defaultReturn);

  if (input === null || input === undefined || input === '') {
    console.warn(`removeThousandSeparator: parameter is ${input}`);
    return getDefaultReturn(input);
  }

  if (!isValidThousandSeparatedNumber(input)) {
    console.warn(
      `removeThousandSeparator: ${input} is not a valid thousand separated number`,
    );
  }

  if (typeof input === 'number') {
    return input;
  }

  const result = input.replaceAll(REMOVE_THOUSAND_SEPARATOR_REGEX, '');

  return result === '' ? getDefaultReturn(result) : Number(result);
}
