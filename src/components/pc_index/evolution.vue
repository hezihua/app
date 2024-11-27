<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Story from './story.vue'
import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
const zoomBackground = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)
const timelineIsEnd = ref(false)
const evolutioncontent = ref(null); // 用于引用 <div> 元素
const timelinecontent = ref(null); // 用于引用 <div> 元素
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


const observer = new IntersectionObserver((entries) => {
  console.log(entries, 'entries')
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      console.log(isEnd.value)
      if(!isEnd.value) {
        console.log(isEnd.value, 'isEnd')
        evolutioncontent.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // evolutioncontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

const timelineobserver = new IntersectionObserver((entries) => {
  console.log(entries, 'entries')
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      console.log(timelineIsEnd.value)
      if(!timelineIsEnd.value) {
        console.log(timelineIsEnd.value, 'timelineIsEnd')
        timelinecontent.value.classList.add('active'); // 添加类来触发动画
        timelineIsEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // evolutioncontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });


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

  const moduleElement = document.querySelector('.evolutioncontent');
  observer.observe(moduleElement);

  const timelinecontentModule = document.querySelector('.timelinecontent');
  timelineobserver.observe(timelinecontentModule);

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
    .to("#timeline-container", { translateX: '-100%', duration: 3000 })         // 放大
    // .to(".timeline-section", { opacity: 1, duration: 1000 })   
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  // window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
    <!-- Constant Evolution Section -->
    <section class="section evolution evolution-background" ref="zoomBackground"  :style="{ height: '56.25vw' }">
      <div class="evolutioncontainer">
        <div class="evolutioncontent" ref="evolutioncontent">


          <div class="title">
            <div>Constant</div>
            <div>Evolution</div>
          </div>
          <p class="text">We continually challenge the status quo, upgrade our institutionalized infrastructure and strategically expand across diverse high-Sharpe strategies.</p>
          <p class="text">Our entrepreneurial spirit gives us agility and resilience, enabling us to prosper amidst the ever-shifting market.</p>

          <!-- <div class="arrow"><img @click="handleOpen" src="../../assets/ic_website_layout_v1B.png"></div> -->
        </div>
      </div>
      
      <Transition name="timeline">
        <div class="timeline-container" id="timeline-container">
          <div class="timelinecontent" ref="timelinecontent">

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
            <!-- <div class="arrow"><img @click="handleClose" src="../../assets/ic_website_layout_v1B.png"></div> -->
          </div>
        </div>
      </Transition>
    </section>

</template>

<style scoped lang="scss">

/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(100%, 0%);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}

/* 定义动画 */
@keyframes zoomInTimeline {
  0% {
    // transform: translate(100%, 0%);
    opacity: 0;
  }
  100% {
    // transform: translate(0%, 0%);
    opacity: 1;
  }
}

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
  background-color: #093254; /* 根据设计图调整颜色 */
}


.evolutioncontent.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}

.timelinecontent.active {
  animation: zoomInTimeline 1s ease-out forwards; /* 应用放大动画 */
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
  .evolutioncontainer {
    width: 60%;
    
    background: #234c68;
    height: 100%;
    
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(33.5% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .evolutioncontent {
    padding: 10vh 0;
    width: 100%;
    // height: 100%;
    .title {
      font-size: 72rem;
      font-family: var(--main-font);
      width:65%;
      margin: 0% 5% 3% 30%;
    }
    .text {
      font-size: 26rem;
      width: 65%;
      margin: 1% 5% 1% 30%;
      // opacity: 0;
    }

    .arrow {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        height: 100rem;
        margin: 100rem 10%;
        img {
          width: 80rem;
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
    background-color: #234c68; /* 替换颜色 */
    clip-path: polygon(23% 0, 100% 0, 19% 100%, 0 100%); /* 根据需要调整多边形路径 */
}
  .timeline-container {
    position: absolute;
    right: -85%;
    top: 0;
    width: 85%;
    background:  #093254;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    box-sizing: border-box;
    .timeline-section {
      // opacity: 0;
    }
    .arrow {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100rem;
        margin: 100rem 10%;
        img {
          width: 80rem;
          transition: transform 1s ease;
          cursor: pointer;
        }
      }

    .sub-title {
      width: 50%;
      font-size: 32rem;
      color: #c7cfd6;
      margin: 0% 0 0% 30%;
      // margin-bottom: 20rem;
    }

    .timeline {
      width: 50%;
      display: flex;
      align-items: center;
      position: relative;
      margin: 2% 0 4% 30%;
      // padding-top: 10rem;
    }

    .title {
      width: 50%;
      margin: 0% 0 0% 30%;
      font-size: 48rem;
      color: #fff;
    }

    .timeline::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2rem;
      background-color: #c7cfd6;
      z-index: 0;
    }

    .timeline-item {
      display: flex;
      width: 50%;
      // flex-direction: column;
      // align-items: center;
      position: relative;
      // margin:90rem 40rem 0 0;
    }

    .circle {
      width: 18rem;
      height: 18rem;
      transform: translate(100rem, -9rem);
      background-color: #fff;
      border-radius: 50%;
      position: relative;
      z-index: 1;
    }

    .content {
      margin-top: 10rem;
      // text-align: center;
      z-index: 1;
    }

    .date {
      font-weight: bold;
      // margin-bottom: 2rem;
      font-size: 22rem;
      height: 26rem;
    }

    .description {
      font-size: 22rem;
      color: #c7cfd6;
      height: 26rem;
    }

    .timeline-item:last-child {
      margin-right: 0;
    }
  }
}



</style>
