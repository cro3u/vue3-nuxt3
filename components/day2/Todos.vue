<script setup lang="ts">
interface ITodoList {
  label: string;
  complete: boolean;
}
const inputValue = ref<string>('')

const todoList = ref<ITodoList[]>([
  { label: '집가기', complete: false}, 
  { label: '출근안하기', complete: false}
])
const completeList = ref<ITodoList[]>([])

const addTodo = () => {
  if(inputValue.value !== '') {
    todoList.value.push({
      label: inputValue.value,
      complete: false,
    })
  }
  inputValue.value = ''
  // console.log('todoList',todoList)
}

const removeFromList = (list: ITodoList[], item: ITodoList) => {
  const targetItem = list.findIndex((i) => i.label === item.label)
  list.splice(targetItem,1)
}

const removeTodo = (item: any) => {
  // const targetItem = todoList.value.findIndex((i) => i.label === item.label)
  // todoList.value.splice(targetItem,1)
  removeFromList(todoList.value, item)
}

const toggleItem = (item: ITodoList) => {
  if(item.complete === true) {
    completeList.value.push(item)
  } else {
    // const targetItem = completeList.value.findIndex((i) => i.label === item.label)
    // completeList.value.splice(targetItem,1)
    removeFromList(completeList.value, item)
  }

  console.log('completeList:', completeList.value)
  console.log('todoList:', todoList.value)
}

const todoListCount = computed(() => {
  return todoList.value.length
})
const completeListCount = computed(() => {
  return completeList.value.length
})
</script>

<template>
  <div>
    <div class="flex gap-2.5">
      <input v-model="inputValue" type="text" placeholder="할일을 적으쇼" @keyup.enter="addTodo" />
      <button type="button" @click="addTodo">+ 추가</button>
    </div>
    <div class="flex justify-end pt-4 gap-8">
      <p>전체 개수 : {{ todoListCount }}</p>
      <p>완료 개수 : {{ completeListCount }}</p>
    </div>
    <ul class="list">
      <li v-for="item in todoList" :key="item.label" class="flex gap-2">
        <input v-model="item.complete" type="checkbox" @change="() => toggleItem(item)">
        <div class="list__title" :class="{ 'line-through' : item.complete == true}">
          {{ item.label }}
        </div>
        <button type="button" @click="removeTodo(item)">-</button>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
@reference "tailwindcss";
input[type="text"] {
  @apply flex-1;
  border: 4px solid rgba(15, 134, 147, 0.2);
  border-radius: 6px;
  padding: 0.3rem 1rem;
}
.list {
  @apply flex flex-col gap-2.5 p-5 mt-8;
}
.list__title {
  @apply flex-1 truncate py-1 px-4 bg-[#E6F2F3] rounded-lg;
}
</style>