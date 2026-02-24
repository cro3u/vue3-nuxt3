<script setup lang="ts">
const days = Array.from({ length: 2 }, (_, i) => i + 1)
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Vue 3 학습 실습</h1>
      <p class="subtitle">script setup과 Composition API를 활용한 실습 예제</p>
    </header>

    <div class="flex flex-col gap-5">
      <NuxtLink v-for="day in days" :key="day" :to="`/day${day}`">
        <div class="list-item">
          <h2 class="problem-title">Day {{ day }}</h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #3b82f6, #4f46e5);
  border-radius: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
}
</style>