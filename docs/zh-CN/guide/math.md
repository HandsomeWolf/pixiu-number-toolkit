# 数学

如果您正在计算非常复杂的公式，请使用[计算表达式](/guide/compute-expression.html)

## 描述

数学模块提供了一组用于执行各种数学运算的函数。 它包括算术、概率和关系运算的函数。

## 函数

### 算术

- add(...values: (number | string)[]): number: 计算所有值相加的和
- subtract(...values: (number | string)[]): number: 将第一个值中减去之后所有输入值
- multiply(...values: (number | string)[]): number: 计算所有值的乘积
- divide(...values: (number | string)[]): number: 将第一个值中除以之后所有输入值
- modulo(value: number, divisor: number): number: 余数
- round(value: number, decimalPlaces: number = 0): 将值四舍五入到最接近的整数或小数位
- ceil(value: number): number: 将值向上舍入到最接近的整数
- floor(value: number): number: 将值向下舍入到最接近的整数

### 概率

- pickRandom(value: any[]): number: 从数组中取一个随机数
- random(min?: number, max?: number): number: 返回最小值和最大值之间的随机数。 如果仅提供一个参数，则返回 0 和提供的数字之间的随机数
- randomInt(min: number, max?: number): 返回最小值和最大值之间的随机整数。 如果仅提供 min，则返回 0 到 min 之间的随机整数

### 关系

- equal(x: number | string, y: number | string): boolean: 检查 x 是否等于 y
- unequal(x: number | string, y: number | string): boolean: 检查 x 是否不等于 y
- larger(x: number | string, y: number | string): boolean: 检查 x 是否大于 y
- largerEq(x: number | string, y: number | string):检查 x 是否大于或等于 y
- smaller(x: number | string, y: number | string): boolean: 检查x是否小于y
- smallerEq(x: number | string, y: number | string): boolean: 检查 x 是否小于或等于 y

## 注意事项

- 如果输入参数不是数字或字符串数字，则所有函数都会抛出 TypeError。
- 加、减、乘、除函数至少需要两个参数。
- random、randomInt函数如果未提供参数，函数将返回 0 到 1 之间的随机数。
- equal、unequal、larger、largerEq、smaller 和smallerEq 函数返回布尔值。
