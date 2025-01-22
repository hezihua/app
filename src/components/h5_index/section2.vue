<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
const storycontent = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      console.log(isEnd.value)
      if(!isEnd.value) {
        console.log(isEnd.value, 'isEnd')
        storycontent.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // storycontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

// 组件挂载后计算一次高度
onMounted(() => {
  const moduleElement = document.querySelector('#storycontent');
  observer.observe(moduleElement);
});




</script>

<template>
    <section class="section story story-background" ref="zoomBackground">
      <div class="storycontainer">
        <div id="storycontent" class="storycontent" :style="{ transform: 'translate(-100%)' }" ref="storycontent">
          <div class="title">Our Story</div>
          <p class="text">Infini Capital started as a proprietary trading house and evolved into an alternative investment platform. We prioritize capital preservation and high-quality returns at the core of our investments and operations.</p>
          <p class="text">Over the years, we have captured uncorrelated and attractive return streams, by adhering to this principle and empowering exceptional talent.</p>
        </div>
        
      </div>
    </section>
  </template>
  


  
  <style scoped lang="scss">
  .section {
    height: 110vh;
    position: sticky;
    overflow: hidden;
    top: -10vh;
    // z-index: 3;
  }

  /* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}


.story {
  .storycontainer {
    height: 100vh;
    display: flex;
    align-items: center;
    width: 100vw;
    overflow: hidden;
    background-image: url('../../assets/story.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 2;
    color: #fff;
  }
  .storycontent {
    padding: 0 0 0 10vw;
    .title {
      font-size: 30rem;
      font-family: var(--main-font);
      width:80vw;
      margin: 0vh 0% 8vh;
    }
    .text {
      font-size: 15rem;
      width: 80vw;
      margin: 4vh 0%;
    }
  }
  .storycontent.active {
    animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
  }
}
  </style>
  