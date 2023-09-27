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

# Number Transition Effect

<br>
<div>{{ currentNumber }}</div>

## Syntax

```ts
function countTo(start: number, end: number, duration: number, callback: (value: number) => void): void;
```

## Description

The `countTo` function is used to smoothly transition from one value to another within a specified time. This function is very useful in animation or number change scenarios.

## Parameters

- start(number): The starting value
- end(number): The ending value
- duration(number): The duration of the transition, in milliseconds
- callback(function): The callback function when the value changes each time, this function receives the current value as a parameter

## Basic Usage

```ts
countTo(0, 100, 1000, (value) => {
  console.log(value);
});
```

In the above example, the countTo function will smoothly transition the value from 0 to 100 within 1000 milliseconds (1 second). During this process, the callback function will be called each time the value changes, and the current value will be passed in as a parameter.
