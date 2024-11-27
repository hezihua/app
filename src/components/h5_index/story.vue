<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const zoomBackground = ref(null); // 用于引用 <div> 元素





const handleScroll = () => {
  const module = document.getElementById('storycontent');
  const moduleHeight = module.clientHeight;
  const moduleRect = module.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // 计算模块的可见高度百分比
  const visibleHeight = Math.min(moduleRect.bottom, windowHeight) - Math.max(moduleRect.top, 0);
  const visiblePercent = Math.max(0, visibleHeight / moduleHeight);

  // 计算水平移动的百分比
  const translateXPercent = Math.min(visiblePercent, 0.5) * 100;
  
  // 设置 transform 属性
  module.style.transform = `translateX(${translateXPercent - 50}%)`;
};

// 组件挂载后计算一次高度
onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
});


</script>

<template>
  <!-- Our Story Section -->
    <section class="section story story-background" ref="zoomBackground">
        <div id="storycontent" class="content">
          <div class="title">Our Story</div>
          <p class="text">Infini Capital started as a proprietary trading house and organically evolved into an alternative investment manager. We prioritize capital preservation and high-quality returns as core to our investment and operation.</p>
          <p class="text">Over the years, we have captured uncorrelated and attractive return streams, by implementing this principle and by empowering extraordinary talents to pursue their best ideas.</p>
        </div>
    </section>
</template>

<style scoped lang="scss">


.section {
  width: 100vw;
  color: #fff;
  
  
}

.story-background {
  width: 100%;
  background-image: url('../../assets/story.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}



.story {
  
  
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 10vw;
    // clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 30rem;
      width:80vw;
      margin: 30vh 0% 8vh;
    }
    .text {
      font-size: 15rem;
      width: 80vw;
      margin: 4vh 0%;
    }
  }
}



</style>
