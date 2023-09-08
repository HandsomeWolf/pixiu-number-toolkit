<script setup>
import {ref} from 'vue'
import { useData } from 'vitepress'
import { ElInput } from 'element-plus'
import {isInRangeForElementPlus} from '../../src/index.ts';

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
# Element-Plus Form Validation

This guide will help you understand how to use the isInRangeForElementPlus function for form validation in Element-Plus.

## Syntax
```TypeScript
isInRangeForElementPlus(name, options, lang)
```

## Parameters

- `name` (string): The name of the field to be validated.
- `options` (object): An object containing validation rules. The properties of this object are optional and are as follows:

| Property | Description |
| --- | --- |
| positive | If true, the value must be a positive number |
| integer | If true, the value must be an integer |
| positiveInteger | If true, the value must be a positive integer |
| negative | If true, the value must be a negative number |
| negativeInteger | If true, the value must be a negative integer |
| decimal | The maximum number of decimal places allowed |
| min | The minimum value allowed |
| max | The maximum value allowed |
| unit | The unit of the value, used in error messages |

- `lang` (string): The language of the error messages. It can be either 'en' for English or 'zh' for Chinese.
## Usage

The `isInRangeForElementPlus` function is used as a custom validator in Element-Plus form validation. It checks if the input value is within a certain range and meets certain conditions specified in the `options` parameter.

  <el-form :model="form" :rules="rules">
    <el-form-item label="Amount" prop="amount1">
      <el-input v-model="form.amount1"></el-input>
    </el-form-item>
    <el-form-item label="数量" prop="amount2">
      <el-input v-model="form.amount2"></el-input>
    </el-form-item>
  </el-form>

Here is an example of how to use it:

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

In this example, the `Amount` field must be a number between 0 and 100, and can have up to 2 decimal places. If the input value does not meet these conditions, an error message will be displayed in English. If you want to display error messages in Chinese, you can use `'zh'` instead of `'en'`.
