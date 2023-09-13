# Unit Conversion

## Syntax

```TypeScript
function unitConversion(
  value: number,
  fromUnit: string,
  toUnit: string,
  withUnit?: boolean
): string | number
```
## Description

The `unitConversion` function is used to convert a value from one unit to another. It supports a wide range of units including length, weight, area, volume, speed, temperature, pressure, power, electric charge, voltage, current, etc.



## Parameters

- `value` (number): The value to be converted.

- `fromUnit` (string): The unit of the input value.

- `toUnit` (string): The unit to which the input value should be converted.

- `withUnit` (boolean): An optional parameter that determines whether the result should be returned with the unit. Default is `false`.

## Returns

- (string | number): The converted value. If `withUnit` is `true`, it returns a string with the value and the unit. If `withUnit` is `false`, it returns a number.

## Usage
```TypeScript
import { unitConversion } from '@handsomewolf/num-utils'

const value = 1;
const fromUnit = 'km';
const toUnit = 'm';
const result = unitConversion(value, fromUnit, toUnit, true);
console.log(result); // Outputs: "1000 m"
```

In this example, the value `1` in kilometers is converted into meters using the `unitConversion` function, resulting in `"1000 m"`.

## Notes

- The function uses the math.evaluate function from the mathjs library to perform the unit conversion.

- The function supports a wide range of units. For a full list of supported units, refer to the mathjs documentation.

- The function also supports conversion between different types of units, such as from speed to length or from temperature to energy. However, such conversions may not always make sense in a physical context.

- The function handles both positive and negative values, as well as zero.

- If the fromUnit and toUnit are the same, the function returns the input value without any conversion.