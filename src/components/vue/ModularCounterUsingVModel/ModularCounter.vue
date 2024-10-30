<template>
  <div>
    <h1>Modular Counter - using VModel</h1>
    <CounterDisplayer :count="count" />
    <CounterIncrementerWithModel v-model="count" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CounterDisplayer from "./CounterDisplayer.vue";
import CounterIncrementerWithModel from "./CounterIncrementerWithModel.vue";

const count = ref(0);
</script>
