# 校验

## 语法

```ts
function isValidThousandSeparatedNumber(value: string): boolean;

function isBlank(value: string): boolean;

function isNumeric(value: string | number): boolean;
```

## 描述

`isValidThousandSeparatedNumber` 函数用于检查字符串是否采用千位分隔格式  
`isBlank` 函数用于检查字符串是否为空或仅包含空白字符  
`isNumeric` 函数用于检查值是数字还是数字字符串

## 参数

**isValidThousandSeparatedNumber**

- `value` (string): 要校验的值

**isBlank**

- `value` (string): 要校验的值

**isNumeric**

- `value` (string | number): 要校验的值

## 返回值

**isValidThousandSeparatedNumber**

- (boolean): 如果字符串采用千位分隔格式，则为`true`，否则为`false`。

**isBlank**

- (boolean): 如果字符串为空或仅包含空格字符，则为`true`，否则为`false`。

**isNumeric**

- (boolean): 如果值是数字或数字字符串，则为`true`，否则为`false`。

## 使用

```ts
import { isBlank, isNumeric, isValidThousandSeparatedNumber } from "pixiu-number-toolkit";

const value = "123,456";
const isValid = isValidThousandSeparatedNumber(value);

console.log(isValid);
// 输出: true

const isBlankString = isBlank(" ");

console.log(isBlankString);
// 输出: true

const isNumber = isNumeric("123");

console.log(isNumber);
// 输出: true
```
