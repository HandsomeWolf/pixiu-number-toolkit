import { describe, it, expect } from '@jest/globals';
import {
  add,
  ceil,
  divide,
  equal,
  floor,
  larger,
  largerEq,
  modulo,
  multiply,
  pickRandom,
  random,
  randomInt,
  round,
  smaller,
  smallerEq,
  subtract,
  unequal,
} from '../../../src';

describe('add', () => {
  describe('error', () => {
    it('empty', () => {
      expect(() => {
        add();
      }).toThrow(TypeError);
    });
    it('not number', () => {
      expect(() => {
        add('a');
      }).toThrow(TypeError);
    });
    it('one params', () => {
      expect(() => {
        add('1');
      }).toThrow(TypeError);
    });
    it('undefined', () => {
      expect(() => {
        add('1', undefined as any);
      }).toThrow(TypeError);
    });
  });
  describe('right', () => {
    it('should return the sum of all values', () => {
      expect(add(0.1, 0.2)).toBe(0.3);
    });
    it('should return the sum of all values', () => {
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    it('should ignore non-numeric values', () => {
      expect(add(1, 2, '3', '4')).toBe(10);
    });
  });
});

describe('subtract', () => {
  describe('error', () => {
    it('not number', () => {
      expect(() => {
        subtract('a');
      }).toThrow(TypeError);
    });
    it('one params', () => {
      expect(() => {
        subtract('1');
      }).toThrow(TypeError);
    });
    it('undefined', () => {
      expect(() => {
        subtract('1', undefined as any);
      }).toThrow(TypeError);
    });
  });
  describe('right', () => {
    it('should return the sum of all values', () => {
      expect(subtract(0.3, 0.2)).toBe(0.1);
    });
    it('should return the sum of all values', () => {
      expect(subtract(10, 4, 3, 4)).toBe(-1);
    });

    it('should ignore non-numeric values', () => {
      expect(subtract(10, 2, '3', '4')).toBe(1);
    });
  });
});

describe('multiply', () => {
  describe('error', () => {
    it('not number', () => {
      expect(() => {
        multiply('a');
      }).toThrow(TypeError);
    });
    it('one params', () => {
      expect(() => {
        multiply('1');
      }).toThrow(TypeError);
    });
    it('undefined', () => {
      expect(() => {
        multiply('1', undefined as any);
      }).toThrow(TypeError);
    });
  });
  describe('right', () => {
    it('should return the sum of all values', () => {
      expect(multiply(19.9, 100)).toBe(1990);
    });
    it('should return the sum of all values', () => {
      expect(multiply(10, 4, 3, 4)).toBe(480);
    });

    it('should ignore non-numeric values', () => {
      expect(multiply(10, 2, '3', '4')).toBe(240);
    });
  });
});

describe('divide', () => {
  describe('error', () => {
    it('not number', () => {
      expect(() => {
        divide('a');
      }).toThrow(TypeError);
    });
    it('one params', () => {
      expect(() => {
        divide('1');
      }).toThrow(TypeError);
    });
    it('undefined', () => {
      expect(() => {
        divide('1', undefined as any);
      }).toThrow(TypeError);
    });
  });
  describe('right', () => {
    it('should return the sum of all values', () => {
      expect(divide(0.69, 10)).toBe(0.069);
    });

    it('should ignore non-numeric values', () => {
      expect(divide('0.69', 10)).toBe(0.069);
    });
  });
});

describe('mod', () => {
  it('modulo - positive values', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it('modulo - negative values', () => {
    expect(modulo(-10, 3)).toBe(2);
  });

  it('modulo - zero divisor', () => {
    expect(modulo(10, 0)).toBe(10);
  });

  it('modulo - non-numeric parameters', () => {
    expect(() => modulo('abc' as any, 3)).toThrow(TypeError);
    expect(() => modulo(10, 'def' as any)).toThrow(TypeError);
  });

  it('modulo - decimal numbers', () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });
});

describe('round', () => {
  it('should round a number to the nearest whole number', () => {
    expect(round(5.4)).toEqual(5);
    expect(round(5.6)).toEqual(6);
  });

  it('should round a number to the specified decimal places', () => {
    expect(round(5.456, 2)).toEqual(5.46);
    expect(round(5.654, 2)).toEqual(5.65);
  });

  it('should round a negative number to the nearest whole number', () => {
    expect(round(-5.4)).toEqual(-5);
    expect(round(-5.6)).toEqual(-6);
  });

  it('should round a negative number to the specified decimal places', () => {
    expect(round(-5.456, 2)).toEqual(-5.46);
    expect(round(-5.654, 2)).toEqual(-5.65);
  });

  it('error', () => {
    expect(() => round(undefined as any)).toThrow(TypeError);
    expect(() => round('a' as any)).toThrow(TypeError);
    expect(() => round('1.123' as any, 'a' as any)).toThrow(TypeError);
  });
});

describe('ceil', () => {
  it('should return the ceiling of a positive integer', () => {
    expect(ceil(4)).toEqual(4);
  });

  it('should return the ceiling of a negative integer', () => {
    expect(ceil(-4)).toEqual(-4);
  });

  it('should return the ceiling of a positive decimal', () => {
    expect(ceil(4.2)).toEqual(5);
  });

  it('should return the ceiling of a negative decimal', () => {
    expect(ceil(-4.2)).toEqual(-4);
  });

  it('not number', () => {
    expect(() => {
      ceil('a' as any);
    }).toThrow(TypeError);
  });
});

describe('floor', () => {
  it('should return the floor value of a positive number', () => {
    expect(floor(3.5)).toBe(3);
  });

  it('should return the floor value of a negative number', () => {
    expect(floor(-2.7)).toBe(-3);
  });

  it('should return the floor value of zero', () => {
    expect(floor(0)).toBe(0);
  });

  it('should throw a TypeError if the parameter is not a number or a string number', () => {
    expect(() => floor('abc' as any)).toThrow(TypeError);
  });
});

describe('pickRandom', () => {
  it('should return a random number from the given array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pickRandom(array);
    expect(array).toContain(result);
  });

  it('should return undefined if the given array is empty', () => {
    const array: number[] = [];
    const result = pickRandom(array);
    expect(result).toBeUndefined();
  });
});

describe('random', () => {
  it('should return a random number between 0 and 1 when no arguments are provided', () => {
    const result = random();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1);
  });

  it('should return a random number between 0 and max when only max argument is provided', () => {
    const max = 10;
    const result = random(undefined, max);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should return a random number between min and max when both min and max arguments are provided', () => {
    const min = 5;
    const max = 10;
    const result = random(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

describe('randomInt', () => {
  it('should return a random integer between min and max', () => {
    const result = randomInt(0, 100);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should return a random integer between 0 and min if max is not provided', () => {
    const result = randomInt(100);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(100);
    expect(Number.isInteger(result)).toBe(true);
  });

  it('should throw a TypeError if min is not a number', () => {
    expect(() => randomInt('invalid' as any)).toThrow(TypeError);
  });

  it('should throw a TypeError if min or max is not a number', () => {
    expect(() => randomInt('invalid' as any, 100)).toThrow(TypeError);
    expect(() => randomInt(0, 'invalid' as any)).toThrow(TypeError);
  });
});

describe('equal', () => {
  it('should return true if the two numbers are equal', () => {
    expect(equal(3, 3)).toBe(true);
    expect(equal('3', 3)).toBe(true);
  });

  it('should return false if the two numbers are not equal', () => {
    expect(equal(2, 3)).toBe(false);
  });

  it('should throw a TypeError if either parameter is not a number', () => {
    expect(equal('2', 3)).toBe(false);
    expect(equal(2, '3')).toBe(false);
    expect(equal('2', '3')).toBe(false);
  });
});

describe('unequal', () => {
  it('should return true if x and y are unequal numbers', () => {
    const result = unequal(5, 10);
    expect(result).toBe(true);
  });

  it('should return true if x and y are unequal strings', () => {
    expect(() => {
      unequal('hello', 'world');
    }).toThrow(TypeError);
  });

  it('should throw a TypeError if x is not a number or string number', () => {
    expect(() => {
      unequal(true as any, 10);
    }).toThrow(TypeError);
  });

  it('should throw a TypeError if y is not a number or string number', () => {
    expect(() => {
      unequal(5, undefined as any);
    }).toThrow(TypeError);
  });
});

describe('larger function', () => {
  it('should return true if x is larger than y', () => {
    expect(larger(5, 3)).toBe(true);
  });

  it('should return false if x is smaller than y', () => {
    expect(larger(3, 5)).toBe(false);
  });

  it('should return false if x and y are equal', () => {
    expect(larger(3, 3)).toBe(false);
  });

  it('should throw an error if x is not a number or string number', () => {
    expect(() => larger('abc', 3)).toThrow(TypeError);
  });

  it('should throw an error if y is not a number or string number', () => {
    expect(() => larger(3, 'xyz')).toThrow(TypeError);
  });

  it('should throw an error if both x and y are not numbers or string numbers', () => {
    expect(() => larger('abc', 'xyz')).toThrow(TypeError);
  });
});

describe('largerEq', () => {
  it('should return true when x is larger than y', () => {
    expect(largerEq(10, 5)).toBe(true);
    expect(largerEq('10', '5')).toBe(true);
  });

  it('should return true when x is equal to y', () => {
    expect(largerEq(5, 5)).toBe(true);
    expect(largerEq('5', '5')).toBe(true);
  });

  it('should return false when x is smaller than y', () => {
    expect(largerEq(5, 10)).toBe(false);
    expect(largerEq('5', '10')).toBe(false);
  });

  it('should throw a TypeError when x or y is not a number or string number', () => {
    expect(() => largerEq('foo', 10)).toThrow(TypeError);
    expect(() => largerEq(10, 'bar')).toThrow(TypeError);
    expect(() => largerEq(true as any, false as any)).toThrow(TypeError);
  });
});

describe('smaller', () => {
  it('should throw an error if parameters are not numbers or string numbers', () => {
    expect(() => smaller(5, 'abc')).toThrowError(TypeError);
    expect(() => smaller('abc', 10)).toThrowError(TypeError);
    expect(() => smaller(true as any, 20)).toThrowError(TypeError);
  });

  it('should return true if x is smaller than y', () => {
    expect(smaller(5, 10)).toBe(true);
    expect(smaller('5', '10')).toBe(true);
    expect(smaller('5', 10)).toBe(true);
  });

  it('should return false if x is greater than or equal to y', () => {
    expect(smaller(10, 5)).toBe(false);
    expect(smaller('10', '5')).toBe(false);
    expect(smaller(10, '5')).toBe(false);
    expect(smaller(5, 5)).toBe(false);
    expect(smaller('5', '5')).toBe(false);
  });
});

describe('smallerEq', () => {
  it('should return true if x is smaller than or equal to y', () => {
    expect(smallerEq(1, 2)).toBe(true);
    expect(smallerEq(1, 1)).toBe(true);
    expect(smallerEq('1', '2')).toBe(true);
    expect(smallerEq('1', '1')).toBe(true);
  });

  it('should return false if x is greater than y', () => {
    expect(smallerEq(2, 1)).toBe(false);
    expect(smallerEq('2', '1')).toBe(false);
  });

  it('should throw a TypeError if x or y is not a number or a string number', () => {
    expect(() => smallerEq('abc', 2)).toThrow(TypeError);
    expect(() => smallerEq(2, true as any)).toThrow(TypeError);
    expect(() => smallerEq(undefined as any, 2)).toThrow(TypeError);
  });
});
