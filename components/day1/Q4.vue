<script setup lang="ts">
const { title, desc } = defineProps<{
  title: string,
  desc: string
}>()

const emits = defineEmits(["click"])

const exposeFunction = () => {
  console.log('>>>>>> expose 성 ! 공 !')
}

defineExpose({exposeFunction})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
    <button type="button" @click="emits('click')">
      emit으로 click 이벤트
    </button>
  </div>
</template>

<style lang="scss" scoped>

</style>