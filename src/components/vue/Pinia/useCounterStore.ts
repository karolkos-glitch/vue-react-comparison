import { defineStore } from "pinia";
import { ref } from "vue";

// const useCounterStore = defineStore("counter", useCounter);

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
});
