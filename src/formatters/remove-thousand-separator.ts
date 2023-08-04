/**
 *  移除千分位格式
 * @param input 要移除千分位格式的数字，可以是数字、字符串、null或undefined
 * @returns 如果input为数字或字符串，返回移除千分位格式后的数字；
 *          如果input为null或undefined或空字符串，返回0。
 */
export function removeThousandSeparator(
  input: number,
  defaultReturn?: any,
): number;
export function removeThousandSeparator(
  input: string,
  defaultReturn?: any,
): number | string;
export function removeThousandSeparator(
  input: null | undefined,
  defaultReturn?: any,
): 0;
export function removeThousandSeparator(
  input: OutType,
  defaultReturn?: any,
): OutType {
  const getDefaultReturn = (result: OutType) =>
    defaultReturn === undefined ? result : defaultReturn;

  if (input === null || input === undefined || input === "") {
    return getDefaultReturn(input);
  }

  if (typeof input === "number") {
    return input;
  }

  const result = input.replaceAll(/\$\s?|(,*)/g, "");

  return result === "" ? getDefaultReturn(result) : Number(result);
}
