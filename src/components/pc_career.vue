<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <p class="read-the-docs">pc_career</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
