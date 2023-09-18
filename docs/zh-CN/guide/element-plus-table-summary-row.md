<script setup lang="ts">
import {ref} from 'vue'
import { useData } from 'vitepress'
import { ElInput } from 'element-plus'
import type { TableColumnCtx } from 'element-plus'
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';

const { site, theme, page, frontmatter } = useData()


const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

# 在 `Element-Plus`的 `el-table` 组件中行尾合计

`summaryRowForElementPlus` 函数是 `Element Plus` 的行尾合计。 当您需要计算并在表格中显示汇总信息时，此功能特别有用。 此外，它还解决了 JavaScript 数学运算中精度损失的问题。

## 语法

```ts
summaryRowForElementPlus(parameter, options);
```

## 参数

- `parameter`（不重要）：element plus 的 :summary-method 属性传递的参数

- `options`: 可选项，包括：

| 属性           | 描述                                                                                                            | 默认值     |
| -------------- | --------------------------------------------------------------------------------------------------------------- | ---------- |
| totalCostLabel | 合计行的显示名称                                                                                                | Total Cost |
| excludeColumns | 要排除的列属性名称                                                                                              | []         |
| includeColumns | 要包含的列属性名称                                                                                              | []         |
| currency       | 货币符号                                                                                                        |            |
| placeholder    | 占位符                                                                                                          |            |
| decimalPlaces  | 小数位数                                                                                                        |            |
| columnOptions  | 为各个列指定选项的对象。 每个键都是一个列属性名称，值是一个带有decimalPlaces、currency和placeholder选项的对象。 | {}         |

## 示例

**基础**
<el-table :data="tableData" border :summary-method="summaryRowForElementPlus" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="summaryRowForElementPlus" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**自定义所有小数位**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{decimalPlaces:2})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{decimalPlaces:2})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**自定义占位符**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{placeholder:'-'})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{placeholder:'-'})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**自定义金额符号**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{currency:'$'})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{currency:'$'})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**自定义合计行显示的名称**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{totalCostLabel:'Sum'})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{totalCostLabel:'Sum'})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**使用千位分隔符**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{useThousandSeparator:true})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{useThousandSeparator:true})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**排除某列**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{excludeColumns:['amount1','amount2']})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{excludeColumns:['amount1','amount2']})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**包含某列**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{includeColumns:['id','amount1','amount2']})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{includeColumns:['amount1','amount2']})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```

---

**自定义每一列的风格**
<el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{columnOptions:{'amount1':{decimalPlaces:2,currency:'￥',placeholder:''},'amount2':{decimalPlaces:3,currency:'$',placeholder:''},'amount3':{decimalPlaces:5},'amount4':{useThousandSeparator:true}}})" show-summary style="width: 100%">
<el-table-column prop="id" label="ID" width="180" />
<el-table-column prop="name" label="Name" />
<el-table-column prop="amount1" label="Amount 1" />
<el-table-column prop="amount2" label="Amount 2" />
<el-table-column prop="amount3" label="Amount 3" />
<el-table-column prop="amount4" label="Amount 4" />
</el-table>

```Vue
<script setup lang="ts">
import {summaryRowForElementPlus} from '@handmewolf/pixiu-number-toolkit';
const tableData = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    amount4: 1111.1,
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12,
    amount4: 0.2,
  },
]
</script>

<template>
  <el-table :data="tableData" border :summary-method="value=>summaryRowForElementPlus(value,{columnOptions:{'amount1':{decimalPlaces:2,currency:'￥',placeholder:''},'amount2':{decimalPlaces:3,currency:'$',placeholder:''},'amount3':{decimalPlaces:5},'amount4':{useThousandSeparator:true}}})" show-summary style="width: 100%">
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="amount1" label="Amount 1" />
    <el-table-column prop="amount2" label="Amount 2" />
    <el-table-column prop="amount3" label="Amount 3" />
    <el-table-column prop="amount4" label="Amount 4" />
  </el-table>
</template>
```
