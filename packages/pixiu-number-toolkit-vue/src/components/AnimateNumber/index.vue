<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { countTo } from "pixiu-number-toolkit";

const properties = defineProps({
  start: {
    type: Number,
    default: 0,
  },
  end: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 1000,
  },
});

const currentNumber = ref(0);

const animateNumber = () => {
  countTo(
    properties.start,
    properties.end,
    properties.duration,
    (value: number) => {
      currentNumber.value = Math.floor(value);
    },
  );
};
onMounted(() => {
  animateNumber();
});
</script>

<template>
  <div>{{ currentNumber }}</div>
</template>
