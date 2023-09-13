# 添加千位分隔符 and 移除千位分隔符

## 语法

```ts
function addThousandSeparator(value: string | number, asString?: boolean): string;

// and

function removeThousandSeparator(input: string, defaultReturn?: any): number;
```

## 描述

`addThousandSeparator` 函数用于将数字或字符串类型数字转换为千位分隔符（逗号分隔）的格式

`removeThousandSeparator` 函数用于从字符串中删除千位分隔符并将其转换回数字

## 参数

**addThousandSeparator**

- value (string | number): 要格式化的值。 它可以是数字或字符串类型数字

- asString (boolean): 可选参数。 如果输入为null或undefined，则此参数确定是否应将结果作为字符串“null”或“undefined”返回。 默认为 false。

**removeThousandSeparator**

- input (string): 应删除千位分隔符的字符串

- defaultReturn (any): 可选参数，当参数为 null、defined或空字符串时的默认返回值。

## 返回值

**addThousandSeparator**

- (string): 带千位分隔符的格式化字符串。 如果输入为 null、undefined、0 或空字符串，则它根据 asString 参数返回输入值或其字符串表示形式。

**removeThousandSeparator**

- (string): 从输入字符串中去掉千位分隔符后得到的数字。 如果输入为 null、undefined或空字符串，则返回 0。

## 使用

```ts
import { addThousandSeparator, removeThousandSeparator } from "@handsomewolf/num-utils";

const value = 123456789;
const formattedValue = addThousandSeparator(value);

console.log(formattedValue);
// 输出: "123,456,789"

const originalValue = removeThousandSeparator(formattedValue);

console.log(originalValue);
// 输出: 123456789
```

在此示例中，使用 `addThousandSeparator` 函数将数字 `123456789` 格式化为带有千位分隔符的字符串 `123,456,789`。 然后，使用`removeThousandSeparator` 函数从格式化字符串中删除千位分隔符，返回原始数字 `123456789`
