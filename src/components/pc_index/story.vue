<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
// 动态计算高度
const calculateHeight = () => {
  if (zoomBackground.value) {
    const width = zoomBackground.value.clientWidth;
    calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
  }
};





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
  // if (zoomBackground.value) {
  //   const width = zoomBackground.value.clientWidth;
  //   calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
  // }
};

// 组件挂载后计算一次高度
onMounted(() => {
  calculateHeight();

  // 监听窗口大小变化，重新计算高度
  window.addEventListener('resize', calculateHeight);
  window.addEventListener('scroll', handleScroll);
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
  <!-- Our Story Section -->
    <section class="section story story-background" ref="zoomBackground" :style="{ height: calculatedHeight + 'px' }">
        <div id="storycontent" class="content" :style="{ transform: 'translate(-100%)' }">
          <div class="title">Our Story</div>
          <p class="text">Infini Capital started as a proprietary trading house and organically evolved into an alternative investment manager. We prioritize capital preservation and high-quality returns as core to our investment and operation.</p>
          <p class="text">Over the years, we have captured uncorrelated and attractive return streams, by implementing this principle and by empowering extraordinary talents to pursue their best ideas.</p>
        </div>
    </section>
</template>

<style scoped lang="scss">


.section {
  width: 100%;
  color: #fff;
  
  
}

.story-background {
  width: 100%;
  background-image: url('../../assets/story.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

.story, .evolution, .investment {
  background-color: #1a3a5f; /* 根据设计图调整颜色 */
}


.story {
  
  
  .content {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 60%;
    
    background: #1a3a5f;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 72px;
      width:45%;
      margin: 25% 15% 3%;
    }
    .text {
      font-size: 26px;
      width: 45%;
      margin: 1% 15%;
    }
  }
}



</style>
