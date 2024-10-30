<template>
  <div>
    <h1>Single Component Counter - using Composables</h1>
    <p>{{ count }}</p>
    <button @click="increment" class="btn btn-secondary">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from "./useCounter";

const { count, increment } = useCounter();
</script>
