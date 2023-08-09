# Using in Element-Plus
## Syntax
```Vue
<el-input 
  v-model="input"
  placeholder="Enter amount"
  :formatter="addThousandSeparatorForElementPlus"
  :parser="removeThousandSeparatorForElementPlus"
>
</el-input>
```
Optional Parameters for removeThousandSeparatorForElementPlus

| Property | Description |
| --- | --- |
| defaultReturn | The default value displayed when the input box is empty |
| decimalPlaces | The number of decimal places retained in the input box |

```Vue
<script setup>
  import {ref} from 'vue'
  import { ElInput } from 'element-plus'
  import { addThousandSeparatorForElementPlus, removeThousandSeparatorForElementPlus, formatDecimalForElementPlus } from './formatter';
  const input1=ref()
  const input2=ref(0)
  const input3=ref()
</script>

<template>
<el-input 
  v-model="input1"
  placeholder="Enter amount" 
  :formatter="addThousandSeparatorForElementPlus" 
  :parser="removeThousandSeparatorForElementPlus" 
>
</el-input>

<!-- If you want the input box to have a default value -->
<el-input 
  v-model="input2" 
  placeholder="Enter amount" 
  :formatter="addThousandSeparatorForElementPlus" 
  :parser="value => removeThousandSeparatorForElementPlus(value,{ defaultReturn:'0' })" 
>
</el-input>

<!-- If you want the input box to retain a fixed number of decimal places -->
<el-input 
  v-model="input3" 
  placeholder="Enter amount" 
  :formatter="addThousandSeparatorForElementPlus" 
  :parser="value => removeThousandSeparatorForElementPlus(value,{ decimalPlaces:2 })" 
>
</el-input>

<!-- The above code can be simplified as formatDecimalForElementPlus, i.e., the decimal place is retained to 2 decimal places -->
<el-input 
  v-model="input3" 
  placeholder="Enter amount" 
  :formatter="addThousandSeparatorForElementPlus" 
  :parser="formatDecimalForElementPlus" 
>
</el-input>
</template>
```

## Code Explanation

The `addThousandSeparatorForElementPlus` function is used to add a thousand separator to the input value. If the input value is empty, it returns an empty string.

The `removeThousandSeparatorForElementPlus` function is used to remove the thousand separator from the input value. It also handles cases where the input value starts with a dot, only allows numbers and a single dot, and handles numbers starting with zero. It also allows you to specify the number of decimal places to retain and a default return value when the input value is empty or not as expected.

The `formatDecimalForElementPlus` function is a simplified version of `removeThousandSeparatorForElementPlus` that always retains 2 decimal places.