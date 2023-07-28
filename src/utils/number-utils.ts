export function getDecimalPlaces(value: number): number {
  const valueString = value.toString();
  const decimalIndex = valueString.indexOf(".");
  if (decimalIndex === -1) {
    return 0;
  }
  return valueString.length - decimalIndex - 1;
}

//小数点不足位数补0
export function padZero(value: number, decimalPlaces?: number): string {
  if (!decimalPlaces) {
    return value.toString();
  }
  const valueString = value.toString();
  const decimalIndex = valueString.indexOf(".");
  if (decimalIndex === -1) {
    return `${valueString}.${"0".repeat(decimalPlaces)}`;
  }
  const decimalLength = valueString.length - decimalIndex - 1;
  if (decimalLength < decimalPlaces) {
    return valueString + "0".repeat(decimalPlaces - decimalLength);
  }
  return valueString;
}
