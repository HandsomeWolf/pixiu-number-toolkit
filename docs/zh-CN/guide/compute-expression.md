# 计算表达式的值

## 语法

```ts
function computeExpression(
  formula: string,
  options?: {
    parameters?: Parameters;
    decimalPlaces?: number;
    useThousandSeparator?: boolean;
  },
): string;
```

## 描述

`computeExpression` 函数用于计算数学表达式的值。表达式以字符串的形式表示，可以包含变量。

## 参数

- `formula`(string) ：要计算的数学表达式
- `options` 可选对象，可能包括：
  - `parameters`: key-value， 其中键是公式中的变量名称，值是要替换该变量的数字。
  - `decimalPlaces`(number): 结果中包含的小数位数。如果未提供，结果将包括所有小数位。
  - `useThousandSeparator`(boolean): 指示结果中是否包含千位分隔符。如果为 true，结果将包含千位分隔符。

## 基础使用

`computeExpression(formula: string)`: 计算以字符串表示的数学表达式。

```ts
const result = computeExpression("0.1+0.2");

console.log(result);
// 输出 "0.3"
// or
const object = { x: 0.1, y: 0.2 };
const result = computeExpression(`${object.x}+${object.y}`);

console.log(result);
// returns "0.3"
```

`computeExpression(formula: string, {parameters:Parameters})`: 使用参数计算表达式

```ts
const parameters = { x: 0.1, y: 0.2 };
const result = computeExpression("x+y", {
  parameters,
});

console.log(result);
// returns "0.3"
```

`computeExpression(formula: string, {decimalPlaces: number})`: 返回值保留指定小数位

```ts
const result = computeExpression("0.1+0.2", {
  decimalPlaces: 2,
});

console.log(result);
// returns "0.30"

const result = computeExpression("0.113+0.223", {
  decimalPlaces: 2,
});

console.log(result);
// returns "0.34"
```

`computeExpression(formula: string, {useThousandSeparator: boolean})`: 返回值带有千位分隔符

```ts
const result = computeExpression("1111.1+2222.2", {
  useThousandSeparator: true,
});

console.log(result);
// returns "3,333.3"
```

`computeExpression(formula: string, {parameters: Parameters, decimalPlaces: number})`: 带有参数，并且返回值保留指定小数位

```ts
const result = computeExpression("x+y", {
  parameters: { x: 1111.113, y: 2222.223 },
  decimalPlaces: 2,
});

console.log(result);
// returns "3333.34"
```

`computeExpression(formula: string, {parameters: Parameters, useThousandSeparator: boolean})`: 返回值保留指定小数位，并带有千位分隔符

```ts
const result = computeExpression("1111.113+2222.223", {
  decimalPlaces: 2,
  useThousandSeparator: true,
});

console.log(result);
// returns "3,333.34"
```

`computeExpression(formula: string, {parameters: Parameters, decimalPlaces: number, useThousandSeparator: boolean})`: 使用参数、小数位和千位分隔符

```ts
const result = computeExpression("1111.113+2222.223", {
  parameters: { x: 1111.113, y: 2222.223 },
  decimalPlaces: 2,
  useThousandSeparator: true,
});

console.log(result);
// returns "3,333.34"
```
