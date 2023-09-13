# 数字金额转中文

## 语法

```ts
function digitUppercase(n: number): string;
```

## 描述

digitalUppercase 函数用于将数字金额转换为其中文表示形式，这通常用于金融环境中。

## 参数

- **n** (number): 要转换的值

## 返回值

- (string): 金额中文表示。

## 使用

```ts
import { digitUppercase } from "@handsomewolf/num-utils";

const amount = 1234.56;
const result = digitUppercase(amount);

console.log(result);
// 输出: "壹仟贰佰叁拾肆元伍角陆分"
```

在此示例中，数字金额 `1234.56` 转换为其中文表示形式 "壹仟贰佰叁拾肆元伍角陆分".

## 注意事项

- 该函数处理输入金额的整数和小数部分。
- 该函数还处理负金额，在结果前加上“欠”。
- 零金额表示为“零元整”。
