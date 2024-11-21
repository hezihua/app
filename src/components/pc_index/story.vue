<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
// 动态计算高度
// const calculateHeight = () => {
//   if (zoomBackground.value) {
//     const width = zoomBackground.value.clientWidth;
//     calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
//   }
// };





// const handleScroll = () => {
//   const module = document.getElementById('storycontent');
//   const moduleHeight = module.clientHeight;
//   const moduleRect = module.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   // 计算模块的可见高度百分比
//   const visibleHeight = Math.min(moduleRect.bottom, windowHeight) - Math.max(moduleRect.top, 0);
//   const visiblePercent = Math.max(0, visibleHeight / moduleHeight);

//   // 计算水平移动的百分比
//   const translateXPercent = Math.min(visiblePercent, 0.5) * 100;
  
//   // 设置 transform 属性
//   module.style.transform = `translateX(${translateXPercent - 50}%)`;
//   // if (zoomBackground.value) {
//   //   const width = zoomBackground.value.clientWidth;
//   //   calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
//   // }
// };

// 组件挂载后计算一次高度
onMounted(() => {
  // calculateHeight();

  // 监听窗口大小变化，重新计算高度
  // window.addEventListener('resize', calculateHeight);
  // window.addEventListener('scroll', handleScroll);

   // 创建动画时间轴
   const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".story", // 触发动画的容器
        start: "top 0%",      // 动画开始的位置
        end: "bottom -50%",  // 动画结束的位置
        scrub: true,           // 平滑滚动效果
        pin: true,             // 固定容器
      },
    });
  
    // 添加动画效果
    timeline
    .to("#storycontent", { translateX: '0%', duration: 6000 })
    .to("#storycontent .title", { opacity: 1, duration: 6000 })   // 放大
    .to("#storycontent .text", { opacity: 1, duration: 6000 })   // 放大
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  // window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
  <!-- Our Story Section -->
    <section class="section story story-background" ref="zoomBackground" :style="{ height: '56.25vw' }">
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
  background-color: #093254; /* 根据设计图调整颜色 */
}


.story {
  
  
  .content {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 60%;

    background: #093254;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 62px;
      font-family: var(--main-font);
      width:60%;
      margin: 0% 10% 3%;
      opacity: 0;
    }
    .text {
      font-size: 26px;
      width: 60%;
      margin: 1% 10%;
      opacity: 0;
    }
  }
}



</style>
