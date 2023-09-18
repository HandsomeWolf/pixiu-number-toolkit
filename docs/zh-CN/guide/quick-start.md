# 快速开始

开始使用 `num-utils` 之前，需要将其安装到您的项目中。 可以通过运行以下命令来执行此操作：

```cmd
npm install pixiu-number-toolkit
```

安装后，可以从库中导入所需的实用程序并在代码中使用它们。

在以下部分中，我们将详细探讨每个功能并提供示例以帮助您了解如何有效地使用它们。

### 数字金额转中文

```ts
import { digitUppercase } from "pixiu-number-toolkit";
const a = 123;

console.log(digitUppercase(12345));
// 输出: "壹万贰仟叁佰肆拾伍元整"
```

### 添加千位分隔符 & 移除千位分隔符

```ts
import { addThousandSeparator, removeThousandSeparator } from "pixiu-number-toolkit";

console.log(addThousandSeparator(1234567));
// 输出: "1,234,567"

console.log(removeThousandSeparator("1,234,567"));
// 输出: 1234567
```

### 格式化百分比

```ts
import { formatPercentage } from "pixiu-number-toolkit";

console.log(formatPercentage(0.12345, { decimalPlaces: 2 }));
// 输出: "12.35%"

console.log(formatPercentage(0.12345, { decimalPlaces: 2, carrySymbol: false }));
// 输出: "12.35"
```

### 格式化金额

```ts
import { formatCurrencyRenminbi } from "pixiu-number-toolkit";

console.log(formatCurrencyRenminbi(12345));
// 输出: "￥12,345.00"
```

### 数学运算、单位转换

```ts
import { computeExpression, unitConversion } from "pixiu-number-toolkit";

// 使用computeExpression进行数学运算
console.log(computeExpression("2 + 3 * 4"));
// 输出: 14

console.log(computeExpression("2 + 3 * 4", 2));
// 输出: "14.00"

console.log(computeExpression("2 + 3 * 4", true));
// 输出: "14"

// 使用带有参数的computeExpression
const parameters = { x: 2, y: 3 };

console.log(computeExpression("x * y + 4", parameters));
// 输出: 10

// 使用unitConversion转换单位
console.log(unitConversion(1, "m", "cm"));
// 输出: 100

console.log(unitConversion(1, "m", "cm", true));
// 输出: "100 cm"
```

### 小数信息、小数位和补零

```ts
import { getDecimalInfo, getDecimalPlaces, padZero } from "pixiu-number-toolkit";

// 使用 getDecimalInfo 获取数字的小数信息
console.log(getDecimalInfo(123.45));
// 输出:
// {
// 	valueString: '123.45',
// 	decimalIndex: 3, // 小数点索引位置
// 	decimalLength: 2, // 小数位长度
// 	integerPart: '123', // 整数部分
// 	decimalPart: '45', // 小数部分
// 	integerLength: 3 // 整数位长度
// }

// 使用 getDecimalPlaces 获取数字的小数位数
console.log(getDecimalPlaces(123.45));
// 输出: 2

// 使用 padZero 用零填充
console.log(padZero(123.45, 4));
// 输出: "123.4500"
```

### 校验

```ts
import { isBlank, isNumeric, isValidThousandSeparatedNumber } from "pixiu-number-toolkit";

// 使用 isValidThousandSeparatedNumber 检查字符串是否采用千位分隔格式
console.log(isValidThousandSeparatedNumber("1,234,567.89"));
// 输出: true

console.log(isValidThousandSeparatedNumber("1234567.89"));
// 输出: false

// 使用 isBlank 检查字符串是否为空或仅包含空格
console.log(isBlank(""));
// 输出: true

console.log(isBlank(" "));
// 输出: true

console.log(isBlank("123"));
// 输出: false

// 使用 isNumeric 检查值是数字或数字字符串
console.log(isNumeric(123));
// 输出: true

console.log(isNumeric("123"));
// 输出: true

console.log(isNumeric("abc"));
// 输出: false
```
