<script setup lang="ts">
import HelloVue from '~/components/HelloVue.vue';
import Q4 from '~/components/Q4.vue';

const propsForm = ref({
  title: 'title',
  desc: 'description'
})
const testForm = reactive({
  title: 'title',
  desc: 'description'
})

const isBoolean = ref<boolean>(true)
const handleBoolean = () => {
  isBoolean.value = !isBoolean.value
}

const childRef = ref<InstanceType<typeof Q4> | null>(null)
const handleExpose = () => {
  childRef.value?.exposeFunction()
}

console.log('>> ref', propsForm.value)
console.log('>> reactive', testForm)
</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Vue 3 학습 실습</h1>
      <p class="subtitle">script setup과 Composition API를 활용한 실습 예제</p>
    </header>

    <div class="content">
      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 1</span>
          <h2 class="problem-title">script setup 문법 실습</h2>
        </div>
        <p class="problem-description">
          script setup 문법을 사용하여 "Hello Vue 3"를 출력하는 컴포넌트를 만들어보세요.<br>
          <span class="problem-hint">Q 버튼을 누르면 텍스트가 바뀌는 "Hello Vue 3" 컴포넌트 만들기</span>
        </p>
        <div class="solution-box">
          → <HelloVue />
        </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 2</span>
          <h2 class="problem-title">ref vs reactive 비교</h2>
        </div>
        <p class="problem-description">
          `ref`와 `reactive`를 각각 선언하고 콘솔에서 어떤 차이가 있는지 확인해보세요.<br>
          <span class="problem-hint">Q "언제 ref, 언제 reactive?" 기준 만들기</span>
        </p>
         <div class="solution-box">
          → ref: 단일 상태값을 사용할때<br>
          reactive: 상태들을 한개의 객체로 다뤄야할때 (각각의 상태가 서로 관련이 있는 경우)
         </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 3</span>
          <h2 class="problem-title">script vs script setup 차이</h2>
        </div>
        <p class="problem-description">
          일반 script 방식과 script setup 방식의 차이를 정리해보세요.<br>
          <span class="problem-hint">Q 왜 setup을 쓰는가?</span>
        </p>
        <div class="solution-box">
          → CompositionAPI를 사용할때의 문법
        </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 4</span>
          <h2 class="problem-title">defineProps / defineEmits / defineExpose 실습</h2>
        </div>
        <p class="problem-description">
          script setup 내부에서 import/export를 어떻게 사용하는지 예시로 작성해보세요.<br>
          <span class="problem-hint">Q defineProps / defineEmits / expose 실습 (컴포넌트 import / props & emit 실습 / defineExpose 실습)</span>
        </p>
        <div class="solution-box">
          → 
          <Q4 ref="childRef" :title="propsForm.title" :desc="propsForm.desc" @click="handleBoolean" />
          → 버튼 누르면 boolean값 바뀜 >>>>> {{ isBoolean }}

          <hr class="py-2.5">
          <button type="button" @click="handleExpose">expose 성공여부는 콘솔창을 . .</button>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>