<template>
  <div>
    <h1>Modular Counter</h1>
    <CounterDisplayer :count="count" />
    <CounterIncrementerWithEmitter @increment="count++" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CounterDisplayer from "./CounterDisplayer.vue";
import CounterIncrementerWithEmitter from "./CounterIncrementerWithEmitter.vue";

const count = ref(0);
</script>
