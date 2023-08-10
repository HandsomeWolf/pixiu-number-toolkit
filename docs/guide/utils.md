# Utils

## Syntax
```TypeScript
function getDecimalInfo(value: number): DecimalInfo

function getDecimalPlaces(value: number): number

function padZero(value: number, decimalLength?: number): string
```

## Description

The `getDecimalInfo` function is used to get the decimal information of a number. 

The `getDecimalPlaces` function is used to get the number of decimal places of a number. 

The `padZero` function is used to pad a number with zeros to a specified number of decimal places.

## Parameters

**getDecimalInfo**

- `value` (number): The input number.

**getDecimalPlaces**

- `value` (number): The input number.

**padZero**

- `value` (number): The number to be padded.

- `decimalLength` (number): An optional parameter that specifies the number of decimal places. Default is 0.

## Returns

**getDecimalInfo**

- (DecimalInfo): An object that contains the decimal information of the input number.
**getDecimalPlaces**

- (number): The number of decimal places of the input number.
**padZero**

- (string): If no decimal places are specified, it returns the original number string. Otherwise, it returns the padded number string.

## Usage

```TypeScript
import { getDecimalInfo, getDecimalPlaces, padZero } from '@handsomewolf/num-utils'

const value = 123.456;
const decimalInfo = getDecimalInfo(value);
console.log(decimalInfo);
// Outputs: 
// {
// valueString: '123.456',
// decimalIndex: 3,
// decimalLength: 3,
// integerPart: '123',
// decimalPart: '456',
// integerLength: 3
// }

const decimalPlaces = getDecimalPlaces(value);
console.log(decimalPlaces); // Outputs: 3

const paddedValue = padZero(value, 5);
console.log(paddedValue); // Outputs: '123.45600'
```

In this example, the `getDecimalInfo` function is used to get the decimal information of the number `123.456`. The getDecimalPlaces function is used to get the number of decimal places of the number `123.456`. The `padZero` function is used to pad the number `123.456` with zeros to 5 decimal places.