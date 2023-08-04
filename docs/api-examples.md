# API示例


<script setup>
import {ref} from 'vue'
import { useData } from 'vitepress'
import { ElInput } from 'element-plus'
import {useThousandSeparator} from '../src/vue/hooks/use-formatter';

const { site, theme, page, frontmatter } = useData()
const inputNumberOrUndefined=ref()
const inputNumber=ref(0)
const { addThousandSeparator, removeThousandSeparator } =
  useThousandSeparator();

</script>

## 千位分隔符


当我们在输入框中输入一个数字时，这个数字将被`addThousandSeparator`方法格式化，然后显示在输入框中。当我们从输入框中获取值时，这个值将被`removeThousandSeparator`方法解析，然后返回一个没有千位分隔符的数字。

`removeThousandSeparator`的第二个参数为可选参数，作用是当`参数1`的值为`undefined、null、""`时返回的默认值

当输入框中没有值时返回空字符串，注意看响应式对象的**值类型**

下面是具体的代码示例：
<el-input v-model="inputNumberOrUndefined" placeholder="请输入金额" :formatter="addThousandSeparator" :parser="removeThousandSeparator" >
</el-input>

值类型：{{typeof inputNumberOrUndefined}}  值为：{{ inputNumberOrUndefined||"''" }}

```js-vue
import { ref } from 'vue'
import { formatter } from '@handsomewolf/num-utils';
import { ElInput } from 'element-plus'
const input = ref('')

<el-input
  v-model="input"
  placeholder="Please input"
  :formatter="formatter.addThousandSeparator"
  :parser="(value)=>formatter.removeThousandSeparator(value,'')"
>
  <template #append>元</template>
</el-input>

```

--- 

若希望输入框的值始终为数字类型

下面是具体的代码示例：

<el-input v-model="inputNumber" placeholder="请输入金额1" :formatter="addThousandSeparator" :parser="value => removeThousandSeparator(value,0)" >
</el-input>

值类型：{{typeof inputNumber}}  值为：{{ inputNumber }}

```js-vue
import { ref } from 'vue'
import { formatter } from '@handsomewolf/num-utils';
import { ElInput } from 'element-plus'
const input = ref(0)

<el-input
  v-model="input"
  placeholder="Please input"
  :formatter="formatter.addThousandSeparator"
  :parser="formatter.removeThousandSeparator"
>
  <template #append>元</template>
</el-input>

```

::: warning
`el-input`的`type`属性值必须是`text`，也可省略`type="text"`
:::

