<template>
  <div>
    <h1>Modular Counter</h1>
    <CounterDisplayer :count="count" />
    <CounterIncrementerWithEmitter @increment="handleIncrement" />
    <div class="text-primary" v-show="messageFromChildren">{{
      messageFromChildren
    }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CounterDisplayer from "./CounterDisplayer.vue";
import CounterIncrementerWithEmitter from "./CounterIncrementerWithEmitter.vue";

const handleIncrement = (data) => {
  count.value++;
  messageFromChildren.value = data;
};
const count = ref(0);
const messageFromChildren = ref("");
</script>
