<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
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
  animateopen(0, -100)
}

function animateopen(start = -100, end = 0) {
  const element = document.querySelector('#timeline-container');  // 获取你想要动画的元素
  let duration = 1000;  // 动画持续时间，单位是毫秒
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

  // const moduleElement = document.querySelector('.evolutioncontent');
  // observer.observe(moduleElement);

  // const timelinecontentModule = document.querySelector('.timelinecontent');
  // timelineobserver.observe(timelinecontentModule);

   // 创建动画时间轴
  //  const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".evolution", // 触发动画的容器
  //       start: "top 0%",      // 动画开始的位置
  //       end: "bottom -40%",  // 动画结束的位置
  //       scrub: true,           // 平滑滚动效果
  //       pin: true,             // 固定容器
  //     },
  //   });
  
  //   // 添加动画效果
  // timeline
  //   .to("#timeline-container", { translateX: '-100%', duration: 3000 })         // 放大
    // .to(".timeline-section", { opacity: 1, duration: 1000 })   
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  // window.removeEventListener('resize', calculateHeight);
});


</script>

<!-- Section1.vue -->
<template>
   <section class="section evolution evolution-background" ref="zoomBackground">
      <div class="evolutioncontainer">
        <div class="evolutioncontent" ref="evolutioncontent">


          <div class="title">
            <div>Constant</div>
            <div>Evolution</div>
          </div>
          <p class="text">We continually challenge the status quo, upgrade our institutionalized infrastructure and strategically expand across diverse high-Sharpe strategies.</p>
          <p class="text">Our entrepreneurial spirit gives us agility and resilience, enabling us to prosper amidst the ever-shifting market.</p>

          <div class="arrow"><img @click="handleOpen" src="../../assets/ic_website_layout_v1B.png"></div>
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
                    <div class="date margin">Jun 2015</div>
                    <div class="description">Founded Infini  </div>
                    <div class="description margin">Capital to </div>
                    <div class="description">conduct proprietary </div>
                    <div class="description margin">trading </div>
                    <div class="date margin"></div>
                    <div class="description margin"></div>
                    <div class="description"></div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle"></div>
                  <div class="content">
                    <div class="date margin">Jan 2019</div>
                    <div class="description margin">Licensed with the </div>
                    <div class="description">Hong Kong </div>
                    <div class="description margin">Securities & Futures </div>
                    <div class="description">Commission</div>
                    <div class="date margin">Jun 2019</div>
                    <div class="description margin">Established </div>
                    <div class="description">proprietary fund</div>
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
                    <div class="date margin">Nov 2023</div>
                    <div class="description margin">Infini Global Master Fund </div>
                    <div class="description">launched</div>
                    <div class="description margin"></div>
                    <div class="date margin"></div>
                    <div class="description margin"></div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="circle"></div>
                  <div class="content">
                    <div class="date">2024</div>
                    <div class="description margin">Licensed with the  </div>
                    <div class="description">Financial Services </div>
                    <div class="description margin">Regulatory Authority  </div>
                    <div class="description">(FSRA) at </div>
                    <div class="description margin">Abu Dhabi</div>
                  </div>
                </div>
              </div>
            </section>
            <div class="arrow"><img @click="handleClose" src="../../assets/ic_website_layout_v1B.png"></div>
          </div>
        </div>
      </Transition>
    </section>
  </template>
  

  
  <style scoped lang="scss">
  .section {
    height: 120vh;
    position: sticky;
    overflow: hidden;
    border-radius: 20rem 20rem 0 0;
    position: sticky;
    top: -20vh;
    color: #fff;
    .evolutioncontainer {
      width: 100vw;
    }

    .evolution-background {
      width: 100%;
      background-image: url('../../assets/Constant_Evolution.jpg');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;
    }
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

  // display: flex;
  // justify-content: end;
  // position: relative;
  // overflow: hidden;
  .evolutioncontainer {
    width: 100%;
    
    background: #234c68;
    height: 120vh;
    
    // align-items: center;
    overflow: hidden;
    // clip-path: polygon(33.5% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
  }
  .evolutioncontent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    .title {
      font-size: 30rem;
      font-family: var(--main-font);
      width:65%;
      margin: 10vw auto 5vw;
      // opacity: 0;
    }
    .text {
      font-size: 16rem;
      width: 65%;
      margin: 3vw auto;
      // opacity: 0;
    }

    .arrow {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        height: 60rem;
        margin: 100rem 10%;
        img {
          width: 60rem;
          transition: transform 1s ease;
          cursor: pointer;
          transform: rotate(180deg);
        }
      }
  }
  .timeline-container::before {
    // content: '';
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 28%;
    // height: 100%;
    // background-color: #234c68; /* 替换颜色 */
    // clip-path: polygon(23% 0, 100% 0, 19% 100%, 0 100%); /* 根据需要调整多边形路径 */
  }
  .timeline-container {
    position: absolute;
    right: -100%;
    top: 0;
    width: 100%;
    background:  #093254;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    overflow: hidden;
    // clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    padding: 0 10vw;
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
        height: 60rem;
        margin: 100rem 10%;
        img {
          width: 60rem;
          transition: transform 1s ease;
          cursor: pointer;
        }
      }

    .sub-title {
      width: 100%;
      font-size: 12rem;
      color: #c7cfd6;
      margin: 0%;
      // margin-bottom: 20rem;
    }

    .timeline {
      width: 100%;
      display: flex;
      align-items: center;
      position: relative;
      margin: 10vw 0 0% 0%;
      // padding-top: 10rem;
    }

    .title {
      width: 70%;
      // margin: 0% 0 0% 30%;
      font-size: 22rem;
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

      width: 50%;
      position: relative;
    }

    .circle {
      width: 10rem;
      height: 10rem;
      transform: translate(20rem, -5rem);
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
      font-size: 12rem;
      height: 16rem;
    }

    .description {
      font-size: 10rem;
      color: #c7cfd6;
      height: 16rem;
    }
    .margin {
      margin: 2rem 0;
    }

    .timeline-item:last-child {
      margin-right: 0;  
    }
  }
}
  
  /* .content {
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20rem;
    color: white;
    background-color: #4a90e2;
    z-index: 3;
    will-change: position;
    transition: transform 0.5s ease;
    
  } */
  
  /* 模拟后一个 section 的内容逐步覆盖当前 section */
  /* .section + .section .content {
    position: sticky;
    top: 0;
    height: 120vh;
    background-color: red;
    z-index: 4;
  } */
  </style>
  