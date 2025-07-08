import { describe, it, expect } from '@jest/globals';
import { numberToEnglishCharacter, englishCharacterToNumber } from '../../../src';

describe('numberToEnglishCharacter', () => {
    it('应该为0返回"zero"', () => {
        const result = numberToEnglishCharacter(0);
        expect(result).toBe('zero');
    });

    it('应该正确转换小于1000的数字', () => {
        expect(numberToEnglishCharacter(1)).toBe('one');
        expect(numberToEnglishCharacter(10)).toBe('ten');
        expect(numberToEnglishCharacter(21)).toBe('twenty-one');
        expect(numberToEnglishCharacter(100)).toBe('one hundred');
        expect(numberToEnglishCharacter(101)).toBe('one hundred and one');
        expect(numberToEnglishCharacter(111)).toBe('one hundred and eleven');
        expect(numberToEnglishCharacter(999)).toBe('nine hundred and ninety-nine');
    });

    it('应该正确转换千位数字', () => {
        expect(numberToEnglishCharacter(1000)).toBe('one thousand');
        expect(numberToEnglishCharacter(1001)).toBe('one thousand one');
        expect(numberToEnglishCharacter(1234)).toBe('one thousand two hundred and thirty-four');
        expect(numberToEnglishCharacter(9999)).toBe('nine thousand nine hundred and ninety-nine');
    });

    it('应该正确转换百万位数字', () => {
        expect(numberToEnglishCharacter(1000000)).toBe('one million');
        expect(numberToEnglishCharacter(1000001)).toBe('one million one');
        expect(numberToEnglishCharacter(1234567)).toBe('one million two hundred and thirty-four thousand five hundred and sixty-seven');
    });

    it('应该正确转换十亿位数字', () => {
        expect(numberToEnglishCharacter(1000000000)).toBe('one billion');
        expect(numberToEnglishCharacter(1234567890)).toBe('one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety');
    });

    it('应该正确处理负数', () => {
        expect(numberToEnglishCharacter(-1)).toBe('negative one');
        expect(numberToEnglishCharacter(-123)).toBe('negative one hundred and twenty-three');
    });

    it('应该正确处理小数', () => {
        expect(numberToEnglishCharacter(0.5)).toBe('zero point five');
        expect(numberToEnglishCharacter(1.23)).toBe('one point two three');
        expect(numberToEnglishCharacter(-1.05)).toBe('negative one point zero five');
    });
});

describe('englishCharacterToNumber', () => {
    it('应该将"zero"转换为0', () => {
        expect(englishCharacterToNumber('zero')).toBe(0);
    });

    it('应该正确转换基本数字', () => {
        expect(englishCharacterToNumber('one')).toBe(1);
        expect(englishCharacterToNumber('twenty-one')).toBe(21);
        expect(englishCharacterToNumber('one hundred')).toBe(100);
        expect(englishCharacterToNumber('one hundred and one')).toBe(101);
    });

    it('应该正确转换复杂数字', () => {
        expect(englishCharacterToNumber('one thousand')).toBe(1000);
        expect(englishCharacterToNumber('one thousand two hundred and thirty-four')).toBe(1234);
        expect(englishCharacterToNumber('one million')).toBe(1000000);
        expect(englishCharacterToNumber('one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety')).toBe(1234567890);
    });

    it('应该正确处理负数', () => {
        expect(englishCharacterToNumber('negative one')).toBe(-1);
        expect(englishCharacterToNumber('negative one hundred and twenty-three')).toBe(-123);
    });

    it('应该正确处理小数', () => {
        expect(englishCharacterToNumber('zero point five')).toBe(0.5);
        expect(englishCharacterToNumber('one point two three')).toBe(1.23);
        expect(englishCharacterToNumber('negative one point zero five')).toBe(-1.05);
    });

    it('应该忽略大小写和多余空格', () => {
        expect(englishCharacterToNumber('ONE')).toBe(1);
        expect(englishCharacterToNumber('  one hundred  ')).toBe(100);
    });
}); 