# 单位转换

## 语法

```ts
function unitConversion(value: number, fromUnit: string, toUnit: string, withUnit?: boolean): string | number;
```

## 描述

`unitConversion` 函数用于将值从一种单位转换为另一种单位。 它支持多种单位，包括长度、重量、面积、体积、速度、温度、压力、功率、电荷、电压、电流等。

## 参数

- `value` (number): 要转换的值

- `fromUnit` (string): 值的单位

- `toUnit` (string): 要转换为的单位

- `withUnit` (boolean): 可选参数，返回值是否携带单位。 默认为 `false` ，即不携带单位。

## 返回值

- (string | number): 如果 `withUnit` 为 `true`，它将返回一个包含值和单位的字符串。 如果`withUnit` 为 `false`，则返回一个数字。

## 使用

```ts
import { unitConversion } from "@handsomewolf/num-utils";

const value = 1;
const fromUnit = "km";
const toUnit = "m";
const result = unitConversion(value, fromUnit, toUnit, true);

console.log(result);
// 输出: "1000 m"
```

在此示例中，使用 `unitConversion` 函数将以公里为单位的值 `1` 转换为米，结果为 `"1000 m"`。

## 注意事项

- 该函数使用 mathjs 库中的 math.evaluate 函数来执行单位转换。

- 该功能支持多种单位。 有关受支持单位的完整列表，请参阅 mathjs 文档。

- 该功能还支持不同类型单位之间的转换，例如从速度到长度或从温度到能量。 然而，这种转换在物理环境中可能并不总是有意义。

- 该函数处理正值和负值以及零。

- 如果 `当前单位` 和 `转换后的单位` 相同，则函数返回输入值而不进行任何转换。
