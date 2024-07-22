import { larger, largerEq } from '..';

export interface Range {
  start: number;
  end: number;
  value: string;
}

interface RangeMap {
  breakpoints: number[];
  values: string[];
}

export function createRangeMap(ranges: Range[]): RangeMap {
  const sortedRanges = ranges.sort((a, b) => a.start - b.start);
  return {
    breakpoints: sortedRanges.map((r) => r.start),
    values: sortedRanges.map((r) => r.value),
  };
}

export function getRangeValue(
  number: number,
  rangeMap: RangeMap,
): string | null {
  const { breakpoints, values } = rangeMap;
  let left = 0;
  let right = breakpoints.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (larger(number, breakpoints[mid])) {
      left = mid + 1;
    } else if (largerEq(breakpoints[mid], number)) {
      right = mid - 1;
    }
  }

  return left > 0 && left <= values.length ? values[left - 1] : null;
}
