# add Thousand Separator and remove Thousand Separator

## Syntax

```ts
function addThousandSeparator(value: string | number, asString?: boolean): string;

// and

function removeThousandSeparator(input: string, defaultReturn?: any): number;
```

## Description

The `addThousandSeparator` function is used to convert a number or a string into a format with thousand separators (comma-separated).

The `removeThousandSeparator` function is used to remove the thousand separators from a string and convert it back into a number.

## Parameters

**addThousandSeparator**

- value (string | number): The value to be formatted. It can be a number or a string.

- asString (boolean): An optional parameter. If the input is null or undefined, this parameter determines whether the result should be returned as a string "null" or "undefined". Default is false.

**removeThousandSeparator**

- input (string): The input string from which the thousand separators should be removed.

- defaultReturn (any): An optional parameter that specifies the default return value when the input is null, undefined, or an empty string.

## Returns

**addThousandSeparator**

- (string): The formatted string with thousand separators. If the input is null, undefined, 0, or an empty string, it returns the input value or its string representation based on the asString parameter.

**removeThousandSeparator**

- (string): The number obtained after removing the thousand separators from the input string. If the input is null, undefined, or an empty string, it returns 0.

## Usage

```ts
import { addThousandSeparator, removeThousandSeparator } from "@handsomewolf/num-utils";

const value = 123456789;
const formattedValue = addThousandSeparator(value);
console.log(formattedValue); // Outputs: "123,456,789"

const originalValue = removeThousandSeparator(formattedValue);
console.log(originalValue); // Outputs: 123456789
```

In this example, the number `123456789` is formatted into the string `"123,456,789"` with thousand separators using the `addThousandSeparator` function. Then, the thousand separators are removed from the formatted string using the `removeThousandSeparator` function, returning the original number `123456789`.
