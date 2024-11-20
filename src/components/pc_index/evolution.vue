<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Story from './story.vue'
import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
const show = ref(false); 
const showtimeline = ref(false);
// 动态计算高度
// const calculateHeight = () => {
//   if (zoomBackground.value) {
//     const width = zoomBackground.value.clientWidth;
//     calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
//   }
// };

const handleOpen = () => {
//   showtimeline.value = true
  animateopen()
}

const handleClose = () => {
//   showtimeline.value = false
  animateopen(0, -85)
}

function animateopen(start = -85, end = 0) {
  const element = document.querySelector('#timeline-container');  // 获取你想要动画的元素
  let duration = 2000;  // 动画持续时间，单位是毫秒
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    let progress = timestamp - startTime;  // 计算已过的时间

    // 计算当前的 right 值，使用线性插值
    let currentRight = start + (end - start) * (progress / duration);

    // 更新元素的 right 属性
    element.style.right = currentRight + '%';

    // 如果动画还没有结束，继续请求下一个帧
    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      element.style.right = end + '%';  // 确保动画结束时元素的 right 是目标值
    }
  }

  // 开始动画
  requestAnimationFrame(step);
}


// 组件挂载后计算一次高度
onMounted(() => {
  // calculateHeight();

  // 监听窗口大小变化，重新计算高度
  // window.addEventListener('resize', calculateHeight);

   // 创建动画时间轴
   const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".evolution", // 触发动画的容器
        start: "top 0%",      // 动画开始的位置
        end: "bottom -40%",  // 动画结束的位置
        scrub: true,           // 平滑滚动效果
        pin: true,             // 固定容器
      },
    });
  
    // 添加动画效果
  timeline
  .to(".content .title", { opacity: 1,  duration: 1000 })   // 放大
  .to(".content .text", { opacity: 1,  duration: 1000 })   // 放大
    .to("#timeline-container", { translateX: '-100%', duration: 1000 })         // 放大
    .to(".timeline-section", { opacity: 1, duration: 1000 })   
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  // window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
    <!-- Constant Evolution Section -->
    <section class="section evolution evolution-background" ref="zoomBackground"  :style="{ height: '56.25vw' }">
      <div class="content">


        <div class="title">
          <div>Constant</div>
          <div>Evolution</div>
        </div>
        <p class="text">We continually challenge the status quo, upgrade our institutionalized infrastructure and strategically expand across diverse high-Sharpe strategies.</p>
        <p class="text">Our entrepreneurial spirit gives us agility and resilience, enabling us to prosper amidst the ever-shifting market.</p>

        <div class="arrow"><img @click="handleOpen" src="../../assets/ic_website_layout_v1B.png"></div>
      </div>
      <Transition name="timeline">
        <div class="timeline-container" id="timeline-container">
          <section class="timeline-section">
            <div class="title">Proprietary </div>
            <div  class="title">Investment</div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="circle"></div>
                <div class="content">
                  <p class="date">Jun 2015</p>
                  <p class="description">Founded Infini Capital to </p>
                  <p class="description">conduct proprietary trading </p>
                  <p class="date"></p>
                  <p class="description"></p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="circle"></div>
                <div class="content">
                  <p class="date">Jan 2019</p>
                  <p class="description">Licensed with the Hong Kong </p>
                  <p class="description">Securities & Futures Commission</p>
                  <p class="date">Jun 2019</p>
                  <p class="description">Established proprietary fund</p>
                </div>
                <div class="content">
                
                  
                </div>
              </div>
            
            </div>
          </section>

          <section class="timeline-section">
            <div class="title">Welcoming External Capital </div>
            <p class="sub-title">(with Significant Internal Investment)</p>
            <div class="timeline">
              <div class="timeline-item">
                <div class="circle"></div>
                <div class="content">
                  <p class="date">Nov 2023</p>
                  <p class="description">Infini Global Master Fund </p>
                  <p class="description">launched</p>
                  <p class="description"></p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="circle"></div>
                <div class="content">
                  <p class="date">2024</p>
                  <p class="description">Licensed with the Financial Services </p>
                  <p class="description">Regulatory Authority (FSRA) at </p>
                  <p class="description">Abu Dhabi</p>
                </div>
              </div>
            </div>
          </section>
          <div class="arrow"><img @click="handleClose" src="../../assets/ic_website_layout_v1B.png"></div>
        </div>
      </Transition>
    </section>

</template>

<style scoped lang="scss">

.section {
  width: 100%;
  color: #fff;
}

.evolution-background {
  width: 100%;
  background-image: url('../../assets/Constant_Evolution.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}


.story, .evolution, .investment {
  background-color: #1a3a5f; /* 根据设计图调整颜色 */
}



.evolution {

  .timeline-enter-active,
  .timeline-leave-active {
    transition: opacity 2s ease-out;
  }

  .timeline-enter-from {
    opacity: 0;
  }

  .timeline-enter-to {
    opacity: 1;
  }

  display: flex;
  justify-content: end;
  position: relative;
  overflow: hidden;
  > .content {
    width: 60%;
    
    background: #3498db;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(33.5% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 72px;
      width:45%;
      margin: 25% 35% 3%;
      opacity: 0;
    }
    .text {
      font-size: 32px;
      width: 45%;
      margin: 1% 35%;
      opacity: 0;
    }

    .arrow {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        height: 100px;
        margin: 100px 10%;
        img {
          width: 80px;
          transition: transform 1s ease;
          cursor: pointer;
          transform: rotate(180deg);
        }
      }
  }
  .timeline-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 28%;
    height: 100%;
    background-color: #3498db; /* 替换颜色 */
    clip-path: polygon(23% 0, 100% 0, 19% 100%, 0 100%); /* 根据需要调整多边形路径 */
}
  .timeline-container {
    position: absolute;
    right: -85%;
    top: 0;
    width: 85%;
    background:  #1a3a5f;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    padding-top: 10%;
    box-sizing: border-box;
    .timeline-section {
      opacity: 0;
    }
    .arrow {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100px;
        margin: 100px 10%;
        img {
          width: 80px;
          transition: transform 1s ease;
          cursor: pointer;
        }
      }

    .sub-title {
      width: 40%;
      font-size: 26px;
      color: #c7cfd6;
      margin: 0% 0 0% 40%;
      // margin-bottom: 20px;
    }

    .timeline {
      width: 40%;
      display: flex;
      align-items: center;
      position: relative;
      margin: 2% 0 5% 40%;
      // padding-top: 10px;
    }

    .title {
      width: 40%;
      margin: 0% 0 0% 40%;
      font-size: 48px;
      color: #fff;
    }

    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #c7cfd6;
      z-index: 0;
    }

    .timeline-item {
      display: flex;
      width: 50%;
      // flex-direction: column;
      // align-items: center;
      position: relative;
      // margin:90px 40px 0 0;
    }

    .circle {
      width: 18px;
      height: 18px;
      transform: translate(100px, -9px);
      background-color: #fff;
      border-radius: 50%;
      position: relative;
      z-index: 1;
    }

    .content {
      margin-top: 10px;
      // text-align: center;
      z-index: 1;
    }

    .date {
      font-weight: bold;
      margin-bottom: 5px;
      height: 24px;
    }

    .description {
      font-size: 14px;
      color: #c7cfd6;
      height: 21px;
    }

    .timeline-item:last-child {
      margin-right: 0;
    }
  }
}



</style>
