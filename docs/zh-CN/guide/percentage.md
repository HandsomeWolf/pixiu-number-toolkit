# 数字转百分比

## 语法

```ts
function formatPercentage(
  input: number | string,
  options: {
    decimalPlaces?: number;
    carrySymbol?: boolean;
  } = {},
): string;
```

## 描述

`formatPercentage` 函数用于将数字格式化为百分比字符串。 该函数还提供了指定小数位数以及是否携带百分比符号选项。

## 参数

- `input` (Number|string): 要格式化的数字或字符串类型数字.

- `options` (Object): 可选参数，具有以下属性：
  - `decimalPlaces` (number): 输出字符串中的小数位数
  - `carrySymbol` (boolean): 是否在输出字符串中携带百分比符号。 默认为 true。

## 返回值

- (String): 格式化的百分比字符串。

## 使用

```ts
import { formatPercentage } from "pixiu-number-toolkit";

const input = 0.15678;
const result = formatPercentage(input, { decimalPlaces: 2, carrySymbol: true });

console.log(result);
// 输出: "15.68%"
```

在此示例中，数字 `“0.15678”` 被格式化为带有 `2 `位小数并带有百分比符号的百分比字符串 `“15.68%”`。
