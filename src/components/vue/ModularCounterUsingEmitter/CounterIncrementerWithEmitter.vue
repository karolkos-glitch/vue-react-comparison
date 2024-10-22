<template>
  <button class="btn btn-secondary" @click="emit('increment')">
    Increment
  </button>
</template>

<script lang="ts" setup>
import { defineEmits } from "vue";

const emit = defineEmits(["increment"]);
</script>
