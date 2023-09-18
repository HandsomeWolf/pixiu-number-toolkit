import { math } from "../utils/math";

export function arithmeticSequence(a: number, d: number, n: number): number[] {
  const sequence: number[] = [];
  for (let index = 0; index < n; index++) {
    sequence.push(math.add(a, index * d));
  }
  return sequence;
}

export function geometricSequence(a: number, r: number, n: number): number[] {
  const sequence: number[] = [];
  for (let index = 0; index < n; index++) {
    sequence.push(math.multiply(a, Number(math.pow(r, index))));
  }
  return sequence;
}
