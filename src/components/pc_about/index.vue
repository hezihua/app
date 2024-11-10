<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick  } from 'vue';
import About from './about.vue'
import Industry from './industry.vue'
import Leadership from './leadership.vue'
import Leaders from './leaders.vue'
import Operate from './operate.vue'
import Footer from '../common/footer.vue'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const route = useRoute()

onMounted(async () => {
  // 等待DOM更新完成
  await nextTick();
  
  // 如果存在hash并且是#leadership
  if(route.hash === '#leadership') {
    const element = document.getElementById('leadership');
    if (element) {
      // 平滑滚动到指定位置
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
});




</script>

<template>
  <div class="full-page-component">
    <About />

    <Industry />


    <Leadership />

    <Leaders />

    <Operate />


    <Footer />
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 100%;
  min-width: 2280px;
}




</style>
