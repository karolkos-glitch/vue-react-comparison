<template>
  <button class="btn btn-secondary" @click="model++">Increment</button>
</template>

<script lang="ts" setup>
const model = defineModel<number>({ default: 0 });
// const incrementInsideScript = () => {
//   model.value++;
// };
</script>
