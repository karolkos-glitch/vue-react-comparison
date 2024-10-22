<template>
  <button class="btn btn-secondary" @click="emit('increment', 'Data from children')">
    Increment
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["increment"]);
</script>
