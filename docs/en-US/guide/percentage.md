# Format Percentage

## syntax

```ts
function formatPercentage(
  input: number | string,
  options: {
    decimalPlaces?: number;
    carrySymbol?: boolean;
  } = {},
): string;
```

## Description

The `formatPercentage` function is used to format a number into a percentage string. The function also provides options to specify the number of decimal places and whether to carry the percentage symbol.

## Parameters

- `input` (Number|string): The input to be formatted.

- `options` (Object): An optional parameter that can have the following properties:
- `decimalPlaces` (number): The number of decimal places in the output string.
- `carrySymbol` (boolean): Whether to carry the percentage symbol in the output string. Default is true.

## Returns

- (String): The formatted percentage string.

## Usage

```ts
import { formatPercentage } from "@handsomewolf/num-utils";

const input = 0.15678;
const result = formatPercentage(input, { decimalPlaces: 2, carrySymbol: true });
console.log(result); // Outputs: "15.68%"
```

In this example, the number `0.15678` is formatted into the percentage string `"15.68%"` with 2 decimal places and carrying the percentage symbol.
