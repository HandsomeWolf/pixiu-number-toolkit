# Number to Words

## Syntax

```ts
function numberToWords(number_: number, lang: "en" | "zh"): string;
```

## Description

The numberToWords function is used to convert a numerical value into its word representation in either English or Chinese. This can be useful in various contexts, such as financial or educational applications.

## Parameters

- number\_ (number): The numerical value to be converted.
- lang ("en" | "zh"): The language to convert the number into. "en" for English and "zh" for Chinese.

## Returns

- (string): The word representation of the input number in the specified language.

## Usage

```ts
import { numberToWords } from "src/basic/converter/number-to-words";

const number = 1234;
const resultEn = numberToWords(number, "en");
console.log(resultEn); // Outputs: "one thousand two hundred thirty four"

const resultZh = numberToWords(number, "zh");
console.log(resultZh); // Outputs: "一千二百三十四"
```

In these examples, the numerical value 1234 is converted into its word representation in English and Chinese.

## Notes

- The function handles both small and large numbers, up to billions in English and up to billions (亿) in Chinese.
- Zero is represented as "zero" in English and "零" in Chinese.
- The function does not handle fractional parts or negative numbers.
