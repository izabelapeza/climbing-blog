<script setup lang="ts">
import createIntersectionObserver from "~~/utils/intersectionObserver";

const props = defineProps<{ targetNumber: number; title: string }>();

const currentNumber = ref(
  props.targetNumber - 500 > 0 ? props.targetNumber - 500 : 0
);
const interval = 2000;
const duration = Math.floor(
  interval / (props.targetNumber - currentNumber.value)
);
const numberFormat = Intl.NumberFormat("en-US");

const startCounting = () => {
  console.log(duration);
  const interval = setInterval(() => {
    if (currentNumber.value < props.targetNumber) currentNumber.value += 1;
    else clearInterval(interval);
  }, duration);
};

onMounted(() => {
  createIntersectionObserver(".number-counter", "", startCounting);
});
</script>

<template>
  <div class="grid items-center text-center number-counter gap-1">
    <p class="font-bold text-6xl md:text-5xl text-accentGreen">
      {{ numberFormat.format(currentNumber) }}
    </p>
    <h2 class="font-bold text-lg">{{ title }}</h2>
  </div>
</template>
