import { describe, it, expect } from '@jest/globals';
import { parseIdCard } from '../../../src';

describe('parseIdCard', () => {
  describe('valid id card', () => {
    it('valid is true', () => {
      expect(parseIdCard('110105197208108139')).toStrictEqual({
        birthDate: '1972-08-10',
        gender: '男',
        region: '110105',
        valid: true,
      });
      expect(parseIdCard('11010519751030611X')).toStrictEqual({
        birthDate: '1975-10-30',
        gender: '男',
        region: '110105',
        valid: true,
      });
    });
    it('valid is false', () => {
      expect(parseIdCard('11010119900307861X')).toStrictEqual({
        birthDate: '',
        gender: '',
        region: '',
        valid: false,
      });
    });
  });
});
