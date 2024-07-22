import { describe, it, expect } from '@jest/globals';
import { createRangeMap, getRangeValue, Range } from '../../../src';

// 使用示例
const ranges: Range[] = [
  { start: 0, end: 100, value: 'A' },
  { start: 100, end: 200, value: 'B' },
  { start: 200, end: 300, value: 'C' },
  { start: 300, end: Infinity, value: 'D' },
];

const rangeMap = createRangeMap(ranges);


describe('valid id card', () => {
  it('map', () => {
    expect(getRangeValue(50, rangeMap)).toBe('A');
    expect(getRangeValue(150, rangeMap)).toBe('B');
    expect(getRangeValue(250, rangeMap)).toBe('C');
    expect(getRangeValue(350, rangeMap)).toBe('D');
    expect(getRangeValue(-10, rangeMap)).toBe(null);
  });
});
