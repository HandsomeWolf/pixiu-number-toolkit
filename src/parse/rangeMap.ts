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

  // 处理边界情况
  if (number < breakpoints[0]) {
    return null;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (number >= breakpoints[mid]) {
      if (mid === breakpoints.length - 1 || number < breakpoints[mid + 1]) {
        return values[mid];
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
}
