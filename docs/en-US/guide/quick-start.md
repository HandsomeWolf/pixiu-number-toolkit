# Quick Start

To get started with num-utils, you need to install it in your project. You can do this by running the following command:

```command
npm install pixiu-number-toolkit
```

Once installed, you can import the required utilities from the library and use them in your code. Here's an example:

In the following sections, we will explore each feature in detail and provide examples to help you understand how to use them effectively. Let's get started!

### digitUppercase

```ts
import { digitUppercase } from "pixiu-number-toolkit";

console.log(digitUppercase(12345)); // Outputs: "壹万贰仟叁佰肆拾伍元整"
```

### addThousandSeparator & removeThousandSeparator

```ts
import { addThousandSeparator, removeThousandSeparator } from "pixiu-number-toolkit";

console.log(addThousandSeparator(1234567)); // Outputs: "1,234,567"
console.log(removeThousandSeparator("1,234,567")); // Outputs: 1234567
```

### formatPercentage

```ts
import { formatPercentage } from "pixiu-number-toolkit";

console.log(formatPercentage(0.12345, { decimalPlaces: 2 })); // Outputs: "12.35%"
console.log(formatPercentage(0.12345, { decimalPlaces: 2, carrySymbol: false })); // Outputs: "12.35"
```

### formatCurrency

```ts
import { formatCurrencyRenminbi } from "pixiu-number-toolkit";

console.log(formatCurrencyRenminbi(12345)); // Outputs: "￥12,345.00"
```

### Math Operations & Unit Conversion

```ts
import { computeExpression, unitConversion } from "pixiu-number-toolkit";

// Using computeExpression for mathematical operations
console.log(computeExpression("2 + 3 * 4")); // Outputs: 14
console.log(computeExpression("2 + 3 * 4", 2)); // Outputs: "14.00"
console.log(computeExpression("2 + 3 * 4", true)); // Outputs: "14"

// Using computeExpression with parameters
const parameters = { x: 2, y: 3 };
console.log(computeExpression("x * y + 4", parameters)); // Outputs: 10

// Using unitConversion for converting units
console.log(unitConversion(1, "m", "cm")); // Outputs: 100
console.log(unitConversion(1, "m", "cm", true)); // Outputs: "100 cm"
```

### Decimal Information, Decimal Places & Padding Zeros

```ts
import { getDecimalInfo, getDecimalPlaces, padZero } from "pixiu-number-toolkit";

// Using getDecimalInfo to get decimal information of a number
console.log(getDecimalInfo(123.45));
// Outputs: { valueString: '123.45', decimalIndex: 3, decimalLength: 2, integerPart: '123', decimalPart: '45', integerLength: 3 }

// Using getDecimalPlaces to get the number of decimal places of a number
console.log(getDecimalPlaces(123.45)); // Outputs: 2

// Using padZero to pad a number with zeros
console.log(padZero(123.45, 4)); // Outputs: "123.4500"
```

### validation

```ts
import { isBlank, isNumeric, isValidThousandSeparatedNumber } from "pixiu-number-toolkit";

// Using isValidThousandSeparatedNumber to check if a string is in thousand separated format
console.log(isValidThousandSeparatedNumber("1,234,567.89")); // Outputs: true
console.log(isValidThousandSeparatedNumber("1234567.89")); // Outputs: false

// Using isBlank to check if a string is blank or contains only spaces
console.log(isBlank("")); // Outputs: true
console.log(isBlank(" ")); // Outputs: true
console.log(isBlank("123")); // Outputs: false

// Using isNumeric to check if a value is a number or a numeric string
console.log(isNumeric(123)); // Outputs: true
console.log(isNumeric("123")); // Outputs: true
console.log(isNumeric("abc")); // Outputs: false
```
