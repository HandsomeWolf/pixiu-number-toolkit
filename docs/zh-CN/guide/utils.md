# 工具

## 语法

```ts
function getDecimalInfo(value: number): DecimalInfo;

function getDecimalPlaces(value: number): number;

function padZero(value: number, decimalLength?: number): string;

function parseIdCard(value: string): IdCardInfo;
```

## 描述

`getDecimalInfo` 函数用于获取数字的整数与小数的信息

`getDecimalPlaces` 函数用于获取数字的小数位数

`padZero` 函数用于将数字用零填充到指定的小数位数

`parseIdCard` 解析中国身份证信息

## 参数

**getDecimalInfo**

- `value` (number): 数字

**getDecimalPlaces**

- `value` (number): 数字

**padZero**

- `value` (number): 数字

- `decimalLength` (number): 可选参数，指定小数位数

**parseIdCard**

- `value` (string): 身份证号码

## 返回值

**getDecimalInfo**

- (DecimalInfo): 包含输入数字的小数信息的对象.

**getDecimalPlaces**

- (number): 数字的小数位数

**padZero**

- (string): 如果没有指定小数位，则返回原始数字字符串。 否则，它返回填充的数字字符串。

**parseIdCard**

- (IdCardInfo): 包含身份证号码信息的对象
  - `region` (string): 身份证持有者所在的区域
  - `birthdate` (string): 身份证持有者的出生日期，格式为 `YYYY-MM-DD`
  - `gender` (string): 身份证持有者的性别
  - `valid` (boolean): 身份证号码是否有效

## 使用

```ts
import { getDecimalInfo, getDecimalPlaces, padZero, parseIdCard } from "@handsomewolf/num-utils";

const value = 123.456;
const decimalInfo = getDecimalInfo(value);

console.log(decimalInfo);
// 输出:
// {
// valueString: '123.456',
// decimalIndex: 3,
// decimalLength: 3,
// integerPart: '123',
// decimalPart: '456',
// integerLength: 3
// }

const decimalPlaces = getDecimalPlaces(value);

console.log(decimalPlaces);
// 输出: 3

const paddedValue = padZero(value, 5);

console.log(paddedValue);
// 输出: '123.45600'

const idCardNumber = "110105197208108139";
const idCardInfo = parseIdCard(idCardNumber);

console.log(idCardInfo);
// 输出:
// {
//   birthdate: "1972-08-10",
//   gender: "男",
//   region: "110105",
//   valid: true,
// }
```
