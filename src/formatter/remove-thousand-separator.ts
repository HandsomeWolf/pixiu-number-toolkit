/**
 *  移除千分位格式
 * @param input 要移除千分位格式的数字，可以是数字、字符串、null或undefined
 * @returns 如果input为数字或字符串，返回移除千分位格式后的数字；
 *          如果input为null或undefined或空字符串，返回0。
 */
export function removeThousandSeparator(input: number): number;
export function removeThousandSeparator(input: string): number;
export function removeThousandSeparator(input: null | undefined): 0;
export function removeThousandSeparator(input: OutType): OutType {
  if (input === null || input === undefined || input === "") {
    return 0;
  }

  if (typeof input === "number") {
    return input;
  }
  const result = Number(input.replaceAll(",", ""));
  if (Number.isNaN(result)) {
    return 0;
  }

  return result;
}
