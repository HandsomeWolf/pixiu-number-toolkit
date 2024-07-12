<!-- [README](README.md) | [中文文档](README_zh-CN.md) -->

<!-- markdownlint-disable-next-line no-inline-html -->
<img src="https://user-images.githubusercontent.com/27292774/270527737-a6986457-21de-41f6-8874-7bf70f404fec.png" width="180" align="right">

# pixiu-number-toolkit 文档

pixiu-number-toolkit 是一个用 TypeScript 编写的数字工具集。它提供了一组用于数字转换、财务计算、格式化和数学运算的函数。

## 安装

要安装 `pixiu-number-toolkit`，使用以下命令：

```command
npm install pixiu-number-toolkit
```

## 功能

### 基础功能

- [货币格式化](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/currency)：提供了一套完整的货币处理工具，包括货币格式化、货币字符串到数字的转换以及获取货币的千位分隔符和小数点符号等功能。这些功能基于 `Intl.NumberFormat` 对象实现，能够适应多种语言环境下的货币显示需求。
- [数字、大写金额相互转换](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/digit-chinese-uppercase)：提供了将数值金额转换为其汉字大写形式的功能，适用于需要将金额正式表述的财务情境。
- [数字、中文文字相互转换](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/number-to-words)：提供了将数字转换为中文的大写文字形式，适用于需要将数字以中文文字形式展示的场合。
- [计算数学表达式](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/compute-expression)：提供了计算数学表达式的能力，支持参数化计算、自定义小数位数以及千位分隔符的显示选项，适用于各种数学和财务计算场景。解决 JavaScript 浮点数精度丢失问题
- [解析中国身份证信息](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/id-card)：提供了对中国居民身份证号的解析能力，能够提取出生日期、性别及所属地区信息，并验证身份证号的有效性。这在身份验证、人口统计分析及各类用户信息处理场景中极为有用。
- [数字过渡动画](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/animate)：用于在给定时间内从一个数值平滑过渡到另一个数值，常用于创建动态计数器、数据可视化中的数值变化等动画效果。
- [常用正则](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/regex)：一系列预定义的正则表达式，用于验证和匹配各种数据类型和格式，旨在简化前端和后端的数据验证流程。无论是基本的数字、字符串验证，还是复杂的身份证、车牌号识别，这些正则表达式都能提供强大的支持。

- [单位转换](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/unit-conversions)：功能强大的单位转换函数，旨在帮助开发者轻松进行各种物理量的单位之间的转换。该函数支持长度、重量、面积、体积、速度、温度、压力、功率、电量、电压、电流、时间、角度、数据存储、频率、力及压强等多种单位类型的转换，并允许用户选择是否在返回的结果中保留单位标识。

- [工具函数](https://www.muchappy.com/open_source/pixiu-number-toolkit/basic/util)：

  - 复杂公式的计算：对于需要执行高级数学计算的场景，推荐使用计算表达式功能。
  - 数据分析与统计：模块中的概率运算函数非常适合进行随机抽样或生成随机数，适用于数据分析及模拟实验。
  - 数据比较：关系运算函数帮助快速判断数值大小，适用于条件判断和排序算法。
  - 分析和操作数字的整数、小数部分。
