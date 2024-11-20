<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);

const router = useRouter();

const navigateTo = (route, hash)=> {
  if(hash) {
    router.push({ path: route, hash });
  } else {
    router.push(route);
  }
        
}
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
// 动态计算高度
// const calculateHeight = () => {
//   if (zoomBackground.value) {
//     const width = zoomBackground.value.clientWidth;
//     calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
//   }
// };

// 组件挂载后计算一次高度
onMounted(() => {
  // calculateHeight();

  // 监听窗口大小变化，重新计算高度
  // window.addEventListener('resize', calculateHeight);
   // 创建动画时间轴
   const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".investment", // 触发动画的容器
        start: "top 0%",      // 动画开始的位置
        end: "bottom 40%",  // 动画结束的位置
        scrub: true,           // 平滑滚动效果
        pin: true,             // 固定容器
      },
    });
  
    // 添加动画效果
  timeline
  .to(".investmentcontent .title", {  opacity: 1, duration: 1000 })   // 放大
    .to(".investmentcontent .text", {  opacity: 1, duration: 1000 })  
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  // window.removeEventListener('resize', calculateHeight);
});


</script>

<template>


    <!-- Investment Section -->
    <section class="section investment investment-background" ref="zoomBackground" :style="{ height: '56.25vw' }">
      <div class="investmentcontent">
        <div class="title">
          <div>Investment in and </div>
          <div>Empowerment of</div>
          <div>Excellent People</div>
        </div>
        <p class="text">People are the lifeblood of our business. We take pride in having cultivated an organization that is a magnet for exceptional talent.</p>
        <p class="text">At Infini Capital, our people are given an opportunity to be impactful in a highly human-centric, highly self-driven environment. We believe in providing our talent with the opportunity to thrive, which in turn leads to our investments prospering.</p>
        <div class="buttonbox">
          <div class="button" @click="navigateTo('/about', '#leadership')">
            <div class="button-text">Meet the Team</div>
            <div  class="add">+</div>
          </div>
          <div class="button" @click="navigateTo('/career')">
            <div class="button-text">Join Us</div>
            <div class="add">+</div>
          </div>
        </div>
        
      </div>
    </section>
</template>

<style scoped lang="scss">

.section {
  width: 100%;

  color: #fff;
  
  
}

.investment-background {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.investment-background::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 60%; /* 放大一点以防旋转时背景漏出 */
    height: 100%;
    background-image: url('../../assets/ExcellentPeople.jpg'); /* 背景图路径 */
    // background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    transform: translate(0, -50%) rotate(0deg); /* 移动到中心，并设置旋转角度 */
    // animation: zoomIn 1s ease-out forwards; /* 设置动画持续时间 */
}


.story, .evolution, .investment {
  background-color: #1a3a5f; /* 根据设计图调整颜色 */
}





.investment {
  
  
  .investmentcontent {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 58%;
    
    background: #1a3a5f;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 68px;
      width:45%;
      margin: 15% 15% 5%;
      opacity: 0;
    }
    .text {
      font-size: 24px;
      width: 45%;
      margin: 1% 15%;
      opacity: 0;
    }
    .buttonbox {
      display: flex;
      // justify-content: center;
      margin: 200px 0 0 15%;
      .button {
        width: 260px;
        height: 60px;
        color: #1a3a5f;
        background: #fff;
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 40px;
        margin: 0 60px 0 0;
        box-sizing: border-box;
        padding: 0 20px;
        cursor: pointer;
        
        .button-text {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
        .add {
          font-weight: 800;
          font-size: 32px;
        }
      }
    }
  }
}

.button:active {
  transform: scale(1.06); /* 放大10% */
}




</style>
