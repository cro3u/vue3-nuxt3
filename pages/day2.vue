<script setup lang="ts">
import Child from '~/components/day2/Child.vue';
import Todos from '~/components/day2/Todos.vue';
import { useCounter } from '../composables/useCounter'

// ===== 문제 1 =====
const { count, increment, decrement } = useCounter()

// ===== 문제 2 =====
const user = reactive({
  name: 'JjangGu',
  age: 5
})

// 문제 2 답
// 1.
// let { age } = user

// setTimeout(() => {
//   age++
//   console.log(age) // 왜 안 바뀔까?
// }, 1000)

// 2.
// setTimeout(() => {
//   user.age++
//   console.log(user.age)
// }, 1000)


// 3.
// const { age } = toRefs(user)

// setTimeout(() => {
//   user.age++
//   console.log(age.value)
// }, 1000)

// ===== 문제 3 =====
const test = reactive({
  nameReactive: 'JjangGu',
  nameRef: 'JjangGu',
})
</script>

<template>
  <div class="container">
    <div class="content">
      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 1</span>
          <h2 class="problem-title">ref와 reactive를 이용해 카운터(+1, -1) 기능을 구현해보세요.</h2>
        </div>
         <p class="problem-description">
           <span class="problem-hint">→ 카운터 로직을 컴포저블(useCounter)로 분리하여 만들기!</span>
         </p>
        <div class="solution-box">
          → ref: {{ count }}
          <!-- → reactive : {{ count.num }}  -->
          <button type="button" class="ml-2.5" @click="increment">+1</button>
          <button type="button" class="ml-2.5" @click="decrement">-1</button>
        </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 2</span>
          <h2 class="problem-title">`reactive`로 만든 객체의 특정 속성만 추적되지 않는 이유를 찾아보고 해결 방법을 제시해보세요.</h2>
        </div>
        <p class="problem-description">
          <span class="problem-hint">→ 코드를 보고 왜 반응성이 깨졌는지 설명</span>
          <code>
            <pre>
      const user = reactive({
        name: 'JjangGu',
        age: 5
      })

      const { name, age } = user

      setTimeout(() => {
        user.age++
        console.log(age) // 왜 안 바뀔까?
      }, 1000)
            </pre>
          </code>
        </p>
         <div class="solution-box">
          → const { name, age } = user << 여기서 구조분해되면서 반응성 잃음
          <!-- 상단 script 부분 확인 -->
         </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 3</span>
          <h2 class="problem-title">반응형 객체를 분해하고, 반응성이 유지되는지 확인해보세요.</h2>
        </div>
        <div class="problem-description">
          <p class="problem-hint">→ 1. 부모에서 reactive 객체 생성 → 자식에게 속성 하나만 props로 전달 → 자식에서 수정 → 부모 화면도 같이 바뀌는지 확인</p>
          <p class="problem-hint">→ 2. 부모에서 toRef를 사용하여 객체 하나만 전달 -> 자식에서 수정 → 부모 화면도 같이 바뀌는지 확인</p>
        </div>
        <div class="solution-box">
          부모 reactive >> {{ test.nameReactive }} <br>
          부모 toRef >> {{ test.nameRef }} <br><br>
          자식 <Child :nameReactive="test.nameReactive" :nameRef="toRef(test,'nameRef')" />
        </div>
      </section>

      <section class="problem-section">
        <div class="problem-header">
          <span class="problem-number">문제 4</span>
          <h2 class="problem-title">배열(`todos`)을 반응형으로 관리하고, 항목 추가/삭제 시 자동으로 화면이 갱신되도록 구현해보세요.</h2>
        </div>
        <p class="problem-description">
          <span class="problem-hint">- 필수 기능 : 추가 / 삭제, 완료 여부 토글, 전체 개수 / 완료 개수 computed로 표시
          </span>
        </p>
        <div class="solution-box">
          <Todos />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>