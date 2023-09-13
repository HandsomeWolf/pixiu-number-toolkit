<script lang="ts" setup>
import {ref} from 'vue'
import { useData } from 'vitepress'
import { ElInput } from 'element-plus'
import {isInRangeForElementPlus} from '@handsomewolf/num-utils';

const { site, theme, page, frontmatter } = useData()
const form=ref({amount1:'',amount2:''})
const rules={
  amount1: [
    
    { required:true,validator: isInRangeForElementPlus('Amount', { min: 0, max: 100, decimal: 2 }, 'en'), trigger: 'blur' },
  ],
  amount2: [
    { required:true,validator: isInRangeForElementPlus('数量', { min: 0, max: 100, decimal: 2 }, 'zh'), trigger: 'blur' },
  ],
}
</script>

# 在 `Element-Plus`的 `el-form` 组件中使用校验

## 语法

```ts
isInRangeForElementPlus(name, options, lang);
```

## 参数

- `name` (string): 要验证的字段的名称
- `options` (object):可选项，如下所示：

| 属性            | 描述                            |
| --------------- | ------------------------------- |
| positive        | 如果为 true，则该值必须是正数   |
| integer         | 如果为 true，则该值必须是整数   |
| positiveInteger | 如果为 true，则该值必须是正整数 |
| negative        | 如果为 true，则该值必须是负数   |
| negativeInteger | 如果为 true，则该值必须是负整数 |
| decimal         | 允许的最大小数位数              |
| min             | 允许的最小值                    |
| max             | 允许的最大值                    |
| unit            | 错误消息中使用的值的单位        |

- `lang` (string): 错误消息的语言。 它可以是 `en` 或 `zh`

## 使用

`isInRangeForElementPlus` 函数用作 Element-Plus 表单验证中的自定义验证器。 它检查输入值是否在特定范围内并满足 `options` 参数中指定的特定条件。

  <el-form :model="form" :rules="rules">
    <el-form-item label="Amount" prop="amount1">
      <el-input v-model="form.amount1"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="amount2">
      <el-input v-model="form.amount2"></el-input>
    </el-form-item>
  </el-form>

示例:

```Vue
<template>
  <el-form :model="form" :rules="rules">
    <el-form-item label="Amount" prop="amount1">
      <el-input v-model="form.amount1"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="amount2">
      <el-input v-model="form.amount2"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref} from 'vue'
import { ElInput } from 'element-plus'
import { isInRangeForElementPlus } from '@handsomewolf/num-utils';

const form=ref({amount1:'',amount2:''})
const rules={
  amount1: [
    {
      required:true,
      validator: isInRangeForElementPlus('Amount', { min: 0, max: 100, decimal: 2 }, 'en'),
      trigger: 'blur'
    },
  ],
  amount2: [
    {
      required:true,
      validator: isInRangeForElementPlus('数量', { min: 0, max: 100, decimal: 2 }, 'zh'),
      trigger: 'blur'
    },
  ],
}
</script>
```
