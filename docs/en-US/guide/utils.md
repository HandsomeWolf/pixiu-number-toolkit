# Utils

## Syntax

```ts
function getDecimalInfo(value: number): DecimalInfo;

function getDecimalPlaces(value: number): number;

function padZero(value: number, decimalLength?: number): string;

function parseIdCard(value: string): IdCardInfo;
```

## Description

The `getDecimalInfo` function is used to get the decimal information of a number.

The `getDecimalPlaces` function is used to get the number of decimal places of a number.

The `padZero` function is used to pad a number with zeros to a specified number of decimal places.

The `parseIdCard` Parsing Chinese ID card information

## Parameters

**getDecimalInfo**

- `value` (number): The input number.

**getDecimalPlaces**

- `value` (number): The input number.

**padZero**

- `value` (number): The number to be padded.

- `decimalLength` (number): An optional parameter that specifies the number of decimal places. Default is 0.

**parseIdCard**

- `value` (string): The ID card number to be parsed.

## Returns

**getDecimalInfo**

- (DecimalInfo): An object that contains the decimal information of the input number.

**getDecimalPlaces**

- (number): The number of decimal places of the input number.

**padZero**

- (string): If no decimal places are specified, it returns the original number string. Otherwise, it returns the padded number string.

**parseIdCard**

- (IdCardInfo): An object that contains the information of the ID card number.

This interface represents the information of an ID card.

- `region` (string): The region of the ID card holder.
- `birthdate` (string): The birthdate of the ID card holder in the format 'YYYY-MM-DD'.
- `gender` (string): The gender of the ID card holder. '男' for male and '女' for female.
- `valid` (boolean): Whether the ID card number is valid.

## Usage

```ts
import { getDecimalInfo, getDecimalPlaces, padZero, parseIdCard } from "@handsomewolf/num-utils";

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

const idCardNumber = "110105197208108139";
const idCardInfo = parseIdCard(idCardNumber);
console.log(idCardInfo);
// Outputs:
// {
//   birthdate: "1972-08-10",
//   gender: "男",
//   region: "110105",
//   valid: true,
// }
```
