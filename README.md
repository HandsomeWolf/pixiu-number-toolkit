# 使用说明

## 安装与导入

1. 安装

```bash
npm i @handsomewolf/num-utils
```

2. 导入
```ts
import { converter,formatter,math } from "@handsomewolf/num-utils";
```

## math.computeExpression 计算表达式的值

javascript中的数学运算存在精度问题，例如`0.1+0.2`的结果是`0.30000000000000004`，之前我使用过**decimal.js**库来解决，但当财务公式复杂时，它的语法并不直观

1. 计算表达式
```ts
math.computeExpression("0.1+0.2") // 结果为0.3，数字类型
```
当然，我们可以使用字符串模板
```ts
const parameters = { x: 0.1, y: 0.2 };
math.computeExpression(`${parameters.x}+${parameters.y}`) // 结果为0.3，数字类型
```

2. 计算带参表达式
```ts
math.computeExpression("x+y", { x: 0.1, y: 0.2 }) // 结果为0.3，数字类型
```
3. 保留指定小数位，超出的四舍五入
```ts
math.computeExpression("0.113+0.223", 2) // 结果为0.34 数字类型
```
4. 返回值携带千位分隔符
```ts
math.computeExpression("1111.1+2222.2", true) // 结果为"3,333.3" 字符串类型
```
5. 保留小数位数+千位分隔符
```ts
math.computeExpression("1111.113+2222.223", 2, true) //结果为"3,333.34" 字符串类型
```
## math.unitConversion 单位转换
单位可以为：
1. 长度单位：km、m、dm、cm、mm、um、nm、pm
2. 重量单位：t、kg、g、mg
3. 面积单位：km2、m2、cm2、mm2
4. 体积单位：km3、m3、cm3
5. 速度单位：km/h、m/s
6. 压力单位：kPa、Pa
7. 功率单位：kW、W
8. 电量单位：kWh、Wh
9. 电压单位：kV、V
10. 电流单位：kA、A
......

### 使用示例

```ts
math.unitConversion(0.3, "km", "m") //结果为300 数字类型
math.unitConversion(0.3, "km", "m", true) //结果为"300 m" 字符串类型
```

## formatter.addThousandSeparator 数字增加千位分隔符

### 使用示例
```ts

formatter.addThousandSeparator(123456789) //结果为："123,456,789" 字符串类型

formatter.addThousandSeparator("123456789") //结果为："123,456,789" 字符串类型

formatter.addThousandSeparator(0) //结果为：0 数字类型

formatter.addThousandSeparator(null) //结果为：null null类型

formatter.addThousandSeparator() //结果为：undefined undefined类型

formatter.addThousandSeparator(1.123) //结果为：”1.123“ 字符串类型

```

## formatter.removeThousandSeparator 带千位分隔符的字符串转为数字类型

### 使用示例
```ts
formatter.removeThousandSeparator("123,456,789") //结果为123456789 数字类型
formatter.removeThousandSeparator("123456789") //结果为123456789 数字类型
formatter.removeThousandSeparator("") //结果为0 数字类型
formatter.removeThousandSeparator(1.123) //结果为1.123 数字类型
formatter.removeThousandSeparator(0) //结果为0 数字类型
formatter.removeThousandSeparator(null) //结果为0 数字类型
formatter.removeThousandSeparator() //结果为0 数字类型
```

## formatter.formatPercentage 数字转百分比

### 使用示例
```ts
formatter.formatPercentage(0.15) //结果为"15%" 字符串类型
formatter.formatPercentage(0.15, false) //结果为"15" 字符串类型
 
formatter.formatPercentage(0.15678) //结果为"15.678%" 字符串类型
formatter.formatPercentage(0.15,2) //结果为"15.00%" 字符串类型
 
formatter.formatPercentage(0.15678,2) //结果为"15.68%" 字符串类型
formatter.formatPercentage(0.15, 2, false) //结果为"15.00" 字符串类型
formatter.formatPercentage(0) //结果为"0%" 字符串类型
formatter.formatPercentage(null) //结果为null null类型
formatter.formatPercentage() //结果为undefined undefined类型
```

## converter.digitUppercase 金额中文大写转换

### 使用示例
```ts
converter.digitUppercase(123456789) //结果为"壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元整" 字符串类型
converter.digitUppercase(123.45) //结果为"壹佰贰拾叁元肆角伍分" 字符串类型
converter.digitUppercase(-123.45) //结果为"欠壹佰贰拾叁元肆角伍分" 字符串类型
```
