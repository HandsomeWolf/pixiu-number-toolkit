import { describe, it, expect } from '@jest/globals';
import { computeExpression } from '../../../src';

describe('computeExpression', () => {
  const parameters = { x: 0.1, y: 0.2 };

  describe('Calculate expression without parameters', () => {
    it('Basic', () => {
      expect(computeExpression('0.1+0.2')).toBe('0.3');
      expect(computeExpression(`${parameters.x}+${parameters.y}`)).toBe('0.3');
    });
    it('Keep two decimal places', () => {
      expect(computeExpression('0.1+0.2', { decimalPlaces: 2 })).toBe('0.30');
      expect(computeExpression('0.111+0.222', { decimalPlaces: 2 })).toBe(
        '0.33',
      );
    });
    it('Thousand separator', () => {
      expect(
        computeExpression('1111+2222', { useThousandSeparator: true }),
      ).toBe('3,333');
      expect(
        computeExpression('1111.113+2222.223', { useThousandSeparator: true }),
      ).toBe('3,333.336');
    });
    it('Keep two decimal places + Thousand separator', () => {
      expect(
        computeExpression('1111+2222', {
          decimalPlaces: 2,
          useThousandSeparator: true,
        }),
      ).toBe('3,333.00');
      expect(
        computeExpression('1111.1+2222.2', {
          decimalPlaces: 2,
          useThousandSeparator: true,
        }),
      ).toBe('3,333.30');
      expect(
        computeExpression('1111.113+2222.223', {
          decimalPlaces: 2,
          useThousandSeparator: true,
        }),
      ).toBe('3,333.34');
    });
  });

  describe('Calculate expression without parameters', () => {
    it('Basic', () => {
      expect(computeExpression('x+y', { parameters: { x: 0.1, y: 0.2 } })).toBe(
        '0.3',
      );
    });
    it('Keep two decimal places', () => {
      expect(
        computeExpression('x+y', {
          parameters: { x: 0.1, y: 0.2 },
          decimalPlaces: 2,
        }),
      ).toBe('0.30');
    });
    it('Thousand separator', () => {
      expect(
        computeExpression('x+y', {
          parameters: { x: 1111, y: 2222 },
          useThousandSeparator: true,
        }),
      ).toBe('3,333');
      expect(
        computeExpression('x+y', {
          parameters: { x: 1111.113, y: 2222.223 },
          useThousandSeparator: true,
        }),
      ).toBe('3,333.336');
    });
    it('Keep two decimal places + Thousand separator', () => {
      expect(
        computeExpression('x+y', {
          parameters: { x: 1111.1, y: 2222.2 },
          decimalPlaces: 2,
          useThousandSeparator: true,
        }),
      ).toBe('3,333.30');
    });
  });
});
