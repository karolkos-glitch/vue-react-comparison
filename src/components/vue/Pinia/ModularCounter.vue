<template>
  <div>
    <h1>Modular Counter - with global State Management Pinia</h1>
    <CounterDisplayer />
    <CounterIncrementer />
  </div>
</template>

<script setup lang="ts">
import CounterDisplayer from "./CounterDisplayer.vue";
import CounterIncrementer from "./CounterIncrementer.vue";
</script>
