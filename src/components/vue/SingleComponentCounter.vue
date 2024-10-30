<template>
  <div>
    <h1>Single Component Counter</h1>
    <p>{{ count }}</p>
    <button @click="count++" class="btn btn-secondary">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
// const incrementInsideScript = () => count.value++;
</script>
