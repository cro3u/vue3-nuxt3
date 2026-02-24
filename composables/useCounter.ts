// ref
export const useCounter = () => {
  const count = ref<number>(0);

  const increment = () => {
    count.value += 1
  }

  const decrement = () => {
     count.value -= 1
  }

  return {
    count,
    increment,
    decrement
  }
}

// reactive
// export const useCounter = () => {
//   const count = reactive({
//     num: 0
//   });

//   const increment = () => {
//     count.num += 1
//   }

//   const decrement = () => {
//      count.num -= 1
//   }

//   return {
//     count,
//     increment,
//     decrement
//   }
// }