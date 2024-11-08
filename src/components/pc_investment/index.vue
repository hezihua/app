<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Background from './background.vue'
import Introduce from './introduce.vue'
import Framework from './framework.vue'
import Earth from './earth.vue'
import Footer from '../common/footer.vue'






</script>

<template>
  <div class="full-page-component">
    <Background />

    <Introduce />

    <Earth />

    <Framework />

    <Footer />
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 100%;
  min-width: 2680px;
}




</style>
