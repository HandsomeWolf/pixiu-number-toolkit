import { type BigNumber } from 'mathjs';
import { math, isValidNumeric } from '..';

// Check parameters (检查参数)
function checkParameters(values: Array<number | string>, length?: number): void {
  if (length !== undefined && values.length < length) {
    throw new TypeError(
      'Invalid parameter: at least two parameters are required',
    );
  }
  for (const item of values) {
    if (!isValidNumeric(item)) {
      throw new TypeError(
        'Invalid parameter: parameter must be a number or a string number',
      );
    }
  }
}

function arrayToBigNumber(values: Array<number | string>): BigNumber[] {
  return values.map((value) => math.bignumber(value));
}

// ------------------------ Arithmetic (算术) ------------------------

export function add(...values: Array<number | string>): number {
  checkParameters(values, 2);
  return Number(math.add(...arrayToBigNumber(values)));
}
export function subtract(...values: Array<number | string>): number {
  checkParameters(values, 2);
  const bigNumberValues = arrayToBigNumber(values);
  let result = bigNumberValues[0];
  for (let index = 1; index < bigNumberValues.length; index++) {
    result = math.subtract(result, bigNumberValues[index]);
  }
  return Number(result);
}
export function multiply(...values: Array<number | string>): number {
  checkParameters(values, 2);
  return Number(math.multiply(...arrayToBigNumber(values)));
}
export function divide(...values: Array<number | string>): number {
  checkParameters(values, 2);
  const bigNumberValues = arrayToBigNumber(values);
  let result = bigNumberValues[0];
  for (let index = 1; index < bigNumberValues.length; index++) {
    result = math.divide(result, bigNumberValues[index]);
  }
  return Number(result);
}
export function modulo(value: number, divisor: number): number {
  if (!isValidNumeric(value) || !isValidNumeric(divisor)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.mod(value, divisor);
}
export function round(value: number, decimalPlaces = 0): number {
  if (!isValidNumeric(value) || !isValidNumeric(decimalPlaces)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.round(value, decimalPlaces);
}
export function ceil(value: number): number {
  if (!isValidNumeric(value)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.ceil(value);
}
export function floor(value: number): number {
  if (!isValidNumeric(value)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.floor(value);
}

// ------------------------ Probability (概率) ------------------------
export function pickRandom(value: any[]): number {
  checkParameters(value);
  return math.pickRandom(value);
}
export function random(min?: number, max?: number): number {
  if (min === undefined && max === undefined) {
    return math.random();
  }
  if (min !== undefined && max === undefined) {
    return math.random(min);
  }
  if (min === undefined && max !== undefined) {
    return math.random(max);
  }
  return math.random(min, max);
}
export function randomInt(min: number, max?: number): number {
  if (max === undefined) {
    if (!isValidNumeric(min)) {
      throw new TypeError(
        'Invalid parameter: parameter must be a number or a string number',
      );
    }
    return math.randomInt(min);
  }
  if (!isValidNumeric(min) || !isValidNumeric(max)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.randomInt(min, max);
}

// ------------------------ Relational (关系) ------------------------
export function equal(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.equal(x, y) as boolean;
}
export function unequal(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.unequal(x, y) as boolean;
}
export function larger(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.larger(x, y) as boolean;
}
export function largerEq(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.largerEq(x, y) as boolean;
}
export function smaller(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.smaller(x, y) as boolean;
}
export function smallerEq(x: number | string, y: number | string): boolean {
  if (!isValidNumeric(x) || !isValidNumeric(y)) {
    throw new TypeError(
      'Invalid parameter: parameter must be a number or a string number',
    );
  }
  return math.smallerEq(x, y) as boolean;
}
