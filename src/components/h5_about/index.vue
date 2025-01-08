<template>
  <div ref="container" class="container">
    <!-- <Header /> -->
    <About />
    <Introduce />
    <Leadership />
    <Risk />
    <!-- <Operating /> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Header from '../common/h5_header.vue';
import About from './about.vue';
import Introduce from './introduce.vue'
import Leadership from './leadership.vue'
import Risk from './risk.vue'
import Operating from './operating.vue';
onMounted(() => {
  
  
});
</script>

<style scoped lang="scss">

.container {
  background: #eee;
  width: 100vw;
  position: relative;
  // height: 520vh;
  margin: 0 auto;
  overflow: visible;
}
</style>
