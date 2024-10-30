<template>
  <button class="btn btn-secondary" @click="store.increment">Increment</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "./useCounterStore";

const store = useCounterStore();
</script>
