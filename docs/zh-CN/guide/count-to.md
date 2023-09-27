<script setup lang="ts">
import { onMounted, ref } from "vue";
import { countTo } from "pixiu-number-toolkit";

const properties=ref({
  start:0,
  end:100,
  duration:1000,
})

const currentNumber = ref(0);

const animateNumber = () => {
  countTo(
    properties.value.start,
    properties.value.end,
    properties.value.duration,
    (value: number) => {
      currentNumber.value = Math.floor(value);
      console.log(currentNumber.value);
    },
  );
};
onMounted(() => {
  animateNumber();
  setTimeout(() => {
    properties.value.end=300
    console.log(properties);
  }, 2000);
});
</script>

# 数字过渡效果

<br>
<div>{{ currentNumber }}</div>

## 语法

```ts
function countTo(start: number, end: number, duration: number, callback: (value: number) => void): void;
```

## 描述

`countTo` 函数用于在指定的时间内，从一个数值平滑过渡到另一个数值。这个函数在动画或者数字变化的场景中非常有用。

## 参数

- start(number) ：开始的数值
- end(number) ：结束的数值
- duration(number) ：过渡的持续时间，单位是毫秒
- callback(function) ：每次数值变化时的回调函数，该函数接收当前的数值作为参数

## 基础使用

```ts
countTo(0, 100, 1000, (value) => {
  console.log(value);
});
```

在上述例子中，countTo 函数将在 1000 毫秒（1 秒）内，将数值从 0 平滑过渡到 100。在这个过程中，每次数值变化时，都会调用回调函数，并将当前的数值作为参数传入。
