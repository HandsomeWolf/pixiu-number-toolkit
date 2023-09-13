# Compute Expression

## syntax

The `computeExpression` function has the following syntax:

```TypeScript
function computeExpression(
    formula: string,
    options?:{
        parameters?: Parameters,
        decimalPlaces?: number,
        useThousandSeparator?: boolean
    }
): string;
```

Where:

- `formula` is a string that represents the mathematical expression to be evaluated.
- `options` is an optional object that may include:
  - `parameters`: An object of key-value pairs where the key is the variable name in the formula, and the value is the number to substitute for that variable.
  - `decimalPlaces`: The number of decimal places to include in the result. If not provided, the result will include all decimal places.
  - `useThousandSeparator`: A boolean indicating whether to include a thousand separator in the result. If true, the result will include a thousand separator.

## Basic Usage

 `computeExpression(formula: string)`: Evaluates a mathematical expression represented as a string.

```TypeScript
computeExpression("0.1+0.2"); // returns "0.3"
// or
const obj={x: 0.1, y: 0.2}
computeExpression(`${obj.x}+${obj.y}`); // returns "0.3"
```
`computeExpression(formula: string, {parameters:Parameters})`: Evaluates an expression with parameters.
```TypeScript
const parameters = { x: 0.1, y: 0.2 };
computeExpression("x+y", {
    parameters: parameters
}); // returns "0.3"
```
`computeExpression(formula: string, {decimalPlaces: number})`: Evaluates an expression with decimal places.
```TypeScript
computeExpression("0.1+0.2", {
    decimalPlaces: 2
}); // returns "0.30"

computeExpression("0.113+0.223", {
    decimalPlaces: 2
}); // returns "0.34"
```
`computeExpression(formula: string, {useThousandSeparator: boolean})`: Evaluates an expression with thousand separator.
```TypeScript
computeExpression("1111.1+2222.2", {
    useThousandSeparator: true
}); // returns "3,333.3"
```
`computeExpression(formula: string, {parameters: Parameters, decimalPlaces: number})`: Evaluates an expression with parameters and decimal places.
```TypeScript
computeExpression("x+y",{
    parameters: {x: 1111.113, y: 2222.223},
    decimalPlaces: 2
}); // returns "3333.34"
```
`computeExpression(formula: string, {parameters: Parameters, useThousandSeparator: boolean})`: Evaluates an expression with parameters and thousand separator.
```TypeScript
computeExpression("1111.113+2222.223", {
    decimalPlaces: 2,
    useThousandSeparator: true
}); // returns "3,333.34"
```
`computeExpression(formula: string, {parameters: Parameters, decimalPlaces: number, useThousandSeparator: boolean})`: Evaluates an expression with parameters, decimal places, and thousand separator.
```TypeScript
computeExpression("1111.113+2222.223",{
    parameters: { x: 1111.113, y: 2222.223 },
    decimalPlaces: 2,
    useThousandSeparator: true
}); // returns "3,333.34"
```







