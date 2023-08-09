<script setup>
import { ref } from "vue";
import ElInput from "element-plus";
import { elementPlusUtils } from "../src";

const modelValue = ref("");
</script>

<template>
  <el-input
    v-model="modelValue"
    placeholder="请输入金额"
    :formatter="elementPlusUtils.addThousandSeparator"
    :parser="elementPlusUtils.removeThousandSeparator"
  >
  </el-input>
</template>
