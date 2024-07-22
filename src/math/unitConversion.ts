import { math } from '..';

export function unitConversion(
  value: number,
  fromUnit: string,
  toUnit: string,
  withUnit = false,
): string | number {
  // const result = math.evaluate(`${value} ${fromUnit} to ${toUnit}`);
  const result = math.unit(math.bignumber(value), fromUnit).to(toUnit);
  return withUnit ? result.toString() : result.toNumber();
}
