<script setup lang="ts">
const text = ref<string>('Hello Vue 3')

const handleText = () => {
  text.value = '짜잔 !'
}
</script>

<template>
  <div class="flex gap-2.5">
    <p>{{ text }}</p>
    <button type="button" class="btn" @click="handleText">
      버튼눌러 텍스트 바꾸기
    </button>
  </div>
</template>

<style lang="css" scoped>
</style>