# Digit Chinese Uppercase

## syntax

```TypeScript
function digitUppercase(n: number): string
```

## Description

The digitUppercase function is used to convert a numerical amount into its uppercase Chinese representation. This is often used in financial contexts where amounts are written out in words to prevent fraud.

## Parameters

- **n** (number): The numerical amount to be converted.

## Returns

- (string): The uppercase Chinese representation of the input amount.

## Usage

```TypeScript
import { digitUppercase } from '@handsomewolf/num-utils'

const amount = 1234.56;
const result = digitUppercase(amount);
console.log(result); // Outputs: "壹仟贰佰叁拾肆元伍角陆分"
```

In this example, the numerical amount 1234.56 is converted into its uppercase Chinese representation "壹仟贰佰叁拾肆元伍角陆分".

## Notes

- The function handles both the integer and fractional parts of the input amount.
- The function also handles negative amounts, prefixing the result with "欠" (owe).
- Zero amounts are represented as "零元整".