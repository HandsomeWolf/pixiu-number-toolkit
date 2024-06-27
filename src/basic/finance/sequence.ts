import { math } from '../utils/math';

/**
 * 生成等差数列。
 *
 * @param a 首项。
 * @param d 公差。
 * @param n 项数。
 * @returns 返回一个等差数列数组。
 */
export function arithmeticSequence(a: number, d: number, n: number): number[] {
  const sequence: number[] = [];
  for (let index = 0; index < n; index++) {
    sequence.push(math.add(a, index * d));
  }
  return sequence;
}

/**
 * 生成等比数列。
 *
 * @param a 首项。
 * @param r 公比。
 * @param n 项数。
 * @returns 返回一个等比数列数组。
 */
export function geometricSequence(a: number, r: number, n: number): number[] {
  const sequence: number[] = [];
  for (let index = 0; index < n; index++) {
    sequence.push(math.multiply(a, Number(math.pow(r, index))));
  }
  return sequence;
}
