<template>
  <div ref="container" class="container">
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    
    <Section4 />
    
    <!-- <Section5 /> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from '../common/h5_header.vue';
import Section1 from './section1.vue';
import Section2 from './section2.vue';
import Section3 from './section3.vue';
import Section4 from './section4.vue';
import Section5 from './section5.vue';
onMounted(() => {
  
  
});
</script>

<style scoped lang="scss">

.container {
  background: #eee;
  width: 100vw;

  // height: 520vh;
  margin: 0 auto;
  overflow: visible;
}
</style>
