<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Hero from './hero.vue'
import Story from './story.vue'
// import Evolution from './evolution.vue'
// import Psylosophy from './psylosophy.vue'
// import Investment from './investment.vue'
import Footer from '../common/footer.vue'






</script>

<template>
  <div class="full-page-component">
    <Hero />

    <!-- Our Story Section -->
    <Story />
   

    <!-- Constant Evolution Section -->
    <!-- <Evolution /> -->
   

    <!-- Philosophy & Values Section -->
     <!-- <Psylosophy /> -->
  

    <!-- Investment Section -->
     <!-- <Investment /> -->

     <!-- <Footer /> -->
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 400vw;
//   min-width: 1980px;
}




</style>
