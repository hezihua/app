<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import About from './about.vue'
import Industry from './industry.vue'
import Leadership from './leadership.vue'
import Leaders from './leaders.vue'
import Footer from '../common/footer.vue'






</script>

<template>
  <div class="full-page-component">
    <About />

    <Industry />

    <Leadership />

    <Leaders />

    <Footer />
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 100%;
  min-width: 2680px;
}




</style>
