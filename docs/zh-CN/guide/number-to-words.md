# 数字转文字

## 语法

```ts
function numberToWords(number: number, lang: "en" | "zh"): string;
```

## 描述

`numberToWords` 函数用于将数字转换为英文或中文的文字表示形式。

## 参数

- number (number): 要转换的数字
- lang ("en" | "zh"): 将数字转换成的语言。 “en”代表英语，“zh”代表中文。

## 返回值

- (string): 输入数字在指定语言中的单词表示形式。

## 使用

```ts
import { numberToWords } from "src/basic/converter/number-to-words";

const number = 1234;
const resultEn = numberToWords(number, "en");

console.log(resultEn);
// 输出: "one thousand two hundred thirty four"

const resultZh = numberToWords(number, "zh");

console.log(resultZh);
// 输出: "一千二百三十四"
```

在该示例中，数值 `1234` 被转换为其英文和中文的文字表示形式。

## 注意事项

- 该函数可处理小数和大数，英文最多可达十亿，中文最多可达十亿（亿）。
- 零在英文中表示为“zero”，在中文中表示为“零”。
- 该函数不处理小数部分或负数。
