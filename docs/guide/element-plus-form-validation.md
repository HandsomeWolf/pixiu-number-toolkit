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

Here is an example of how to use it:

```Vue
<template>
  <el-form :model="form" :rules="rules">
    <el-form-item label="Amount" prop="amount">
      <el-input v-model="form.amount"></el-input>
    </el-form-item>
    <!-- other form items -->
  </el-form>
</template>

<script>
import { isInRangeForElementPlus } from '@handsomewolf/num-utils';

export default {
  data() {
    return {
      form: {
        amount: '',
        // other form fields
      },
      rules: {
        amount: [
          { validator: isInRangeForElementPlus('Amount', { min: 0, max: 100, decimal: 2 }, 'en'), trigger: 'blur' },
          // other rules
        ],
      },
    };
  },
};
</script>
```

In this example, the `Amount` field must be a number between 0 and 100, and can have up to 2 decimal places. If the input value does not meet these conditions, an error message will be displayed in English. If you want to display error messages in Chinese, you can use `'zh'` instead of `'en'`.
