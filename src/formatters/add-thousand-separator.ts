/**
 *  转换为千分位格式
 * @param value 要转换的数字，可以是数字、字符串、null或undefined
 * @param asString 是否将结果转换为字符串，默认为false
 * @returns 如果value为数字或字符串，返回千分位格式的数字或字符串；
 *          如果value为null或undefined，返回null或undefined；
 *          如果value为0或空字符串，根据asString参数返回0或"0"。
 */
export function addThousandSeparator(value: number): number;
export function addThousandSeparator(value: number, asString?: boolean): string;
export function addThousandSeparator(value: string, asString?: boolean): string;
export function addThousandSeparator(value: null, asString?: boolean): null;
export function addThousandSeparator(
  value: undefined,
  asString?: boolean,
): undefined;
export function addThousandSeparator(
  value: OutType,
  asString = false,
): OutType {
  if (value === null || value === undefined || value === 0 || value === "") {
    return asString ? String(value) : value;
  }

  const [integerPart, decimalPart] = String(value).split(".");
  const formattedIntegerPart = integerPart.replaceAll(
    /\B(?=(\d{3})+(?!\d))/g,
    ",",
  );

  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart}`
    : formattedIntegerPart;
}
