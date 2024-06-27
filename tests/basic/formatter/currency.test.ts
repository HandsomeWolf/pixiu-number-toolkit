import { describe, it, expect } from '@jest/globals';
import { formatCurrencyRMB } from '../../../src';

describe('formatter', () => {
  it('formatCurrencyRMB', () => {
    expect(formatCurrencyRMB(123_456_789)).toBe('¥123,456,789.00');
  });
});
