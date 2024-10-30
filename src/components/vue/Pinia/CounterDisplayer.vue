<template>
  <p>{{ store.count }}</p>
</template>

<script lang="ts" setup>
import { useCounterStore } from "./useCounterStore";

const store = useCounterStore();
</script>
