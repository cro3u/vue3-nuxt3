<script setup lang="ts">
const { nameReactive, nameRef } = defineProps<{
  nameReactive: string
  nameRef: Ref<string>,
}>()

// nameReactive = '철수' //할당 불가
setTimeout(() => {
  nameRef.value = '자식에서 변경됨'
}, 1000)
</script>

<template>
  <div>
    Reactive: {{ nameReactive }} <br>
    toRef 사용: {{ nameRef }}
  </div>
</template>