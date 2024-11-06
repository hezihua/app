<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
const show = ref(false); 
const showtimeline = ref(false);
// 动态计算高度
const calculateHeight = () => {
  if (zoomBackground.value) {
    const width = zoomBackground.value.clientWidth;
    calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
  }
};

const handleOpen = () => {
  // showtimeline.value = true
  animateopen()
}

const handleClose = () => {
  // showtimeline.value = true
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
  setTimeout(()=> {
    show.value = true
  }, 2000)
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
  <div class="full-page-component">
    <section class="section hero zoom-background" ref="zoomBackground"  :style="{ height: calculatedHeight + 'px' }">
      <Transition name="fade">

        <div class="content" v-if="show">
          <div class="textLeft" :style="{ height: calculatedHeight * 0.5 + 'px' }">
            <div>A Pan-Asia</div>
            <div>Multi-Strategy </div>
            <div>Platform</div>
          </div>
          <div class="border" :style="{ height: calculatedHeight * 0.5 + 'px' }"></div>
          <div class="textRight" :style="{ height: calculatedHeight * 0.5 + 'px' }">
            <div :style="{ paddingTop: calculatedHeight * 0.5 - 168 + 'px' }">Relentless h1ursuit of</div> 
            <div>Quality Returns</div>
          </div>
        </div>
      </Transition>
    </section>

    <!-- Our Story Section -->
    <section class="section story story-background" :style="{ height: calculatedHeight + 'px' }">
      <div id="storycontent" class="content" :style="{ transform: 'translate(-100%)' }">
        <div class="title">Our Story</div>
        <p class="text">Infini Capital started as a proprietary trading house and organically evolved into an alternative investment manager. We prioritize capital preservation and high-quality returns as core to our investment and operation.</p>
        <p class="text">Over the years, we have captured uncorrelated and attractive return streams, by implementing this principle and by empowering extraordinary talents to pursue their best ideas.</p>
      </div>
    </section>

    <!-- Constant Evolution Section -->
    <section class="section evolution evolution-background" :style="{ height: calculatedHeight + 'px' }">
      <!-- <div class="test">test</div> -->
      <div class="content">


        <div class="title">
          <div>Constant</div>
          <div>Evolution</div>
        </div>
        <p class="text">We continually challenge the status quo, upgrade our institutionalized infrastructure and strategically expand across diverse high-Sharpe strategies.</p>
        <p class="text">Our entrepreneurial spirit gives us agility and resilience, enabling us to prosper amidst the ever-shifting market.<span @click="handleOpen">展开</span></p>
        
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
                  <p class="description">Established proprietary fund <span @click="handleClose">收起</span></p>
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
        </div>
      </Transition>
    </section>

    <!-- Philosophy & Values Section -->
    <section class="section philosophy" :style="{ height: calculatedHeight  * 0.5+ 'px' }">
      <div class="title">Philosophy & Values</div>
      <div class="icons">
        <div class="icon">
          <img src="../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Discipline</div>
        </div>
        <div class="icon">
          <img src="../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Entrepreneurial </div>
          <div>Spirit</div>
        </div>
        <div class="icon">
          <img src="../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Adaptability</div>
          
        </div>
        <div class="icon">
          <img src="../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Respect</div>
          
        </div>
      </div>
    </section>

    <!-- Investment Section -->
    <section class="section investment investment-background" :style="{ height: calculatedHeight + 'px' }">
      <div class="content">
        <div class="title">
          <div>Investment in and </div>
          <div>Empowerment of</div>
          <div>Excellent People</div>
        </div>
        <p class="text">People are the lifeblood of our business. We take pride in having cultivated an organization that is a magnet for exceptional talent.</p>
        <p class="text">At Infini Capital, our people are given an opportunity to be impactful in a highly human-centric, highly self-driven environment. We believe in providing our talent with the opportunity to thrive, which in turn leads to our investments prospering.</p>
        <div class="buttonbox">
          <div class="button">Meet the Team  +</div>
          <div class="button">Join Us  +</div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">


/* 定义动画 */
@keyframes zoomIn {
  0% {
    background-size: 120% 120%;
  }
  100% {
    background-size: 100% 100%;
  }
}

.full-page-component {
  width: 100%;
  min-width: 2680px;
}

.section {
  width: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-align: center;
  // padding: 80px 20px; /* 可根据设计图调整内边距 */
  color: #fff;
  
  
}
.zoom-background {
  width: 100%;
  background-image: url('../assets/landing_earth.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: zoomIn 1s ease-out forwards; /* 自动产生缩放效果 */
}
.story-background {
  width: 100%;
  background-image: url('../assets/story.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.evolution-background {
  width: 100%;
  background-image: url('../assets/story.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
.investment-background {
  width: 100%;
  background-image: url('../assets/ExcellentPeople.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}
/* 顶部背景 */
.hero {
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .content {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .border {
      background: #fff;
      padding-right: 1px;
      margin: 0 80px;
    }
    .textLeft {
      font-size: 56px;
    }
    .textRight {
      font-size: 56px;
      width: 685px;
      // display: flex;
      // justify-items: end;
      // align-items: flex-end;
      // flex-wrap: wrap;
    }

  }
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
      font-size: 58px;
      width:45%;
      margin: 25% 15% 3%;
    }
    .text {
      font-size: 22;
      width: 45%;
      margin: 1% 15%;
    }
  }
}

.evolution {

  .timeline-enter-active,
  .timeline-leave-active {
    transition: right 2s ease-out;
  }

  .timeline-enter-from {
    right: -85%;
  }

  .timeline-enter-to {
    right: 0;
  }

  display: flex;
  justify-content: end;
  position: relative;
  overflow: hidden;
  > .content {
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
    clip-path: polygon(33.5% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 58px;
      width:45%;
      margin: 25% 35% 3%;
    }
    .text {
      font-size: 22;
      width: 45%;
      margin: 1% 35%;
    }
  }
  .timeline-container {
    position: absolute;
    right: -85%;
    top: 0;
    width: 85%;
    background: #1a3a5f;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    padding-top: 6%;
    box-sizing: border-box;
    .timeline-section {
      margin-bottom: 40px;
    }

    .timeline-section h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .sub-title {
      width: 40%;
      font-size: 26px;
      color: #c7cfd6;
      margin: 0% 0 0% 30%;
      // margin-bottom: 20px;
    }

    .timeline {
      width: 40%;
      display: flex;
      align-items: center;
      position: relative;
      margin: 5% 0 5% 30%;
      // padding-top: 10px;
    }

    .title {
      width: 40%;
      margin: 0% 0 0% 30%;
      font-size: 58px;
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
  .test {
    width: 100px;
    height: 100px;
    background: red;
    position: absolute;
    right: -200px;
    top: 0;
  }
}

.investment {
  
  
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
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 58px;
      width:45%;
      margin: 25% 15% 3%;
    }
    .text {
      font-size: 22;
      width: 45%;
      margin: 1% 15%;
    }
    .buttonbox {
      display: flex;
      // justify-content: center;
      margin: 200px 0 0 15%;
      .button {
        width: 350px;
        height: 80px;
        color: #1a3a5f;
        background: #fff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        margin: 0 60px 0 0;
        cursor: pointer;
      }
    }
  }
}

.philosophy {
  background-color: #ffffff;
  color: #1a3a5f;
  .title {
    font-size: 80px;
    display: flex;
    justify-content: center;
    margin: 5% 0 3%;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .icon {

      height: 400px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      font-size: 46px;
      width: 220px;
      img {
        width: 220px;
      }
      > div {
        display: flex;
        justify-content: center;
      }
    }
  }
}


</style>
