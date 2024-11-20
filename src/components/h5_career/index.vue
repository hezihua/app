<script setup>
import { ref } from 'vue'
  import Header from '../common/h5_header.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="section">
    <Header />
    h5_career</div>
</template>

<style scoped>
.section {
    height: 100vh;
    width: 100vw;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30rem;
    position: relative;
    background: #234c68;
}
</style>
