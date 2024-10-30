<template>
  <p>{{ props.count }}</p>
</template>

<script lang="ts" setup>
const props = defineProps<{
  count: Number;
}>();


</script>
