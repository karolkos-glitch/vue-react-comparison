<template>
  <button class="btn btn-secondary" @click="props.increment">Increment</button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  increment: () => void;
}>();
</script>
