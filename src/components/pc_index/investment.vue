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
const isEnd = ref(false)
const titlecontent = ref(null);
const isEndText = ref(false)
const textcontent = ref(null);
const isEndButton = ref(false)
const buttoncontent = ref(null);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEnd.value) {
        titlecontent.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // titlecontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

const textobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEndText.value) {
        textcontent.value.classList.add('active'); // 添加类来触发动画
        isEndText.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // textcontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

const buttonobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEndButton.value) {
        buttoncontent.value.classList.add('active'); // 添加类来触发动画
        isEndButton.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // buttoncontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

// 组件挂载后计算一次高度
onMounted(() => {
   // 创建动画时间轴
  //  const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".investment", // 触发动画的容器
  //       start: "top 0%",      // 动画开始的位置
  //       end: "bottom 40%",  // 动画结束的位置
  //       scrub: true,           // 平滑滚动效果
  //       pin: true,             // 固定容器
  //     },
  //   });
  
  //   // 添加动画效果
  // timeline
  // .to(".investmentcontent .title", {  opacity: 1, duration: 1000 })   // 放大
  //   .to(".investmentcontent .text", {  opacity: 1, duration: 1000 }) 
  
  const moduleElement = document.querySelector('.investmentcontent .title');
  observer.observe(moduleElement);
  const textModuleElement = document.querySelector('.investmentcontent .text');
  textobserver.observe(textModuleElement);
  const buttonModuleElement = document.querySelector('.investmentcontent .buttonbox');
  buttonobserver.observe(buttonModuleElement);
});




</script>

<template>


    <!-- Investment Section -->
    <section class="section investment investment-background" ref="zoomBackground" :style="{ height: '56.25vw' }">
      <div class="investmentcontent">
        <div class="title" ref="titlecontent">
          <div>Investment in and </div>
          <div>Empowering</div>
          <div>Distinguished Talent</div>
        </div>
        <div class="text" ref="textcontent">
          <div class="item">People are the lifeblood of our business. We take pride in cultivating an organization that attracts exceptional talent.</div>
          <div class="item">At Infini Capital, we attract exceptional talent and empower them to thrive, driving our investment success.          </div>
        </div>
       
        <div class="buttonbox" ref="buttoncontent">
          <!-- <div class="button" @click="navigateTo('/about', '#leadership')">
            <div class="button-text">Meet the Team</div>
            <div  class="add">+</div>
          </div> -->
          <div class="button" @click="navigateTo('/career')">
            <div class="button-text">Join Us</div>
            <div class="add">+</div>
          </div>
        </div>
        
      </div>
    </section>
</template>

<style scoped lang="scss">

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
  background-color: #093254; /* 根据设计图调整颜色 */
}


.investmentcontent .title.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}

.investmentcontent .text.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}

.investmentcontent .buttonbox.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}




.investment {
  
  
  .investmentcontent {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 58%;
    
    background: #093254;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 72rem;
      font-family: var(--main-font);
      width:65%;
      margin: 0% 10% 3%;
      transform: translate(-100%, 0);
      // opacity: 0;
    }
    .text {
      font-size: 26rem;
      width: 65%;
      margin: 0% 10%;
      transform: translate(-100%, 0);
      .item {
        margin: 1% 0%;
      }
      // opacity: 0;
    }
    .buttonbox {
      display: flex;
      transform: translate(-100%, 0);
      // justify-content: center;
      margin: 4% 0 0 10%;
      .button {
        width: 200rem;
        height: 50rem;
        color: #093254;
        background: #fff;
        font-size: 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 40rem;
        margin: 0 30rem 0 0;
        box-sizing: border-box;
        padding: 0 20rem;
        cursor: pointer;
        
        .button-text {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
        .add {
          font-weight: 700;
          font-size: 26rem;
        }
      }
    }
  }
}

.button:active {
  transform: scale(1.06); /* 放大10% */
}
.button:hover {
  transform: scale(1.06); /* 放大10% */
}




</style>
