# Validation

## Syntax

```ts
function isValidThousandSeparatedNumber(value: string): boolean;

function isBlank(value: string): boolean;

function isNumeric(value: string | number): boolean;
```

## Description

The `isValidThousandSeparatedNumber` function is used to check if a string is in the thousand-separated format. The `isBlank` function is used to check if a string is blank or contains only whitespace characters. The `isNumeric` function is used to check if a value is a number or a numeric string.

## Parameters

**isValidThousandSeparatedNumber**

- `value` (string): The string to be checked.

**isBlank**

- `value` (string): The string to be checked.

**isNumeric**

- `value` (string | number): The value to be checked.

## Returns

**isValidThousandSeparatedNumber**

- (boolean): `true` if the string is in the thousand-separated format, `false` otherwise.

**isBlank**

- (boolean): `true` if the string is blank or contains only whitespace characters, `false` otherwise.

**isNumeric**

- (boolean): `true` if the value is a number or a numeric string, `false` otherwise.

## Usage

```ts
import { isBlank, isNumeric, isValidThousandSeparatedNumber } from "@handsomewolf/num-utils";

const value = "123,456";
const isValid = isValidThousandSeparatedNumber(value);
console.log(isValid); // Outputs: true

const isBlankString = isBlank(" ");
console.log(isBlankString); // Outputs: true

const isNumber = isNumeric("123");
console.log(isNumber); // Outputs: true
```
