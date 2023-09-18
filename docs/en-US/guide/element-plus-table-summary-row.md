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

# Summary Row For Element Plus

## Introduction

The `summaryRowForElementPlus` function is a summary row for Element Plus. This function is particularly useful when you need to calculate and display summary information in a table. Additionally, it addresses the issue of precision loss in JavaScript mathematical operations.

## Syntax

```ts
summaryRowForElementPlus(parameter, options);
```

## Parameters

- `parameter`(unimportant): Parameters passed by the :summary-method attribute of element plus

- `options`: An optional object of type Options which includes:

| Name           | Description                                                                                                                                                                    | Default    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| totalCostLabel | The label for the total cost.                                                                                                                                                  | Total Cost |
| excludeColumns | An array of column property names to exclude from the summary.                                                                                                                 | []         |
| includeColumns | An array of column property names to include in the summary.                                                                                                                   | []         |
| currency       | The currency symbol to prepend to the sum.                                                                                                                                     |            |
| placeholder    | The placeholder to display for excluded columns.                                                                                                                               |            |
| decimalPlaces  | The number of decimal places to display for the sum.                                                                                                                           |            |
| columnOptions  | An object that specifies options for individual columns. Each key is a column property name, and the value is an object with decimalPlaces, currency, and placeholder options. | {}         |

## Example

**Basic**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Custom all decimal places**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Custom placeholder**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Custom Amount Prefix Symbol**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Custom total cost label**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Use thousand separator**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Exclude Columns**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Include Columns**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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

**Customize the style of a column**
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
import {summaryRowForElementPlus} from 'pixiu-number-toolkit-vue';
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
