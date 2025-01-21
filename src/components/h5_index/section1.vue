
<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/h5_header.vue';
const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 


// 组件挂载后计算一次高度
onMounted(() => {

  setTimeout(()=> {
    show.value = true
  }, 500)
});


</script>
<template>
    <section class="section hero zoom-background" ref="zoomBackground" >
      <Header />
      <Transition name="fade">

        <div class="content" v-if="show">
          <div class="textLeft">
            <div>A Pan-Asia</div>
            <div>Multi-Strategy </div>
            <div>Platform</div>
          </div>
          <div class="border"></div>
          <div class="textRight">
            <div>Relentless Pursuit</div> 
            <div>of Quality</div> 
            <div>Returns</div>
          </div>
        </div>
      </Transition>
    </section>
  </template>
  
  
  <style scoped lang="scss">

@keyframes zoomIn {
  0% {
    transform: translate(0, 0) scale(1.1) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  .section {
    height: calc(100vh + 100rem);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

.zoom-background::before {
    content: "";
    position: absolute;
    // top: 50vh;
    // left: 50vw;
    width: 100vw; /* 放大一点以防旋转时背景漏出 */
    height: calc(100vh + 100rem);
    background-image: url('../../assets/landing_earth.jpg'); /* 背景图路径 */
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: 20% 0;
    transform-origin: center;
    // transform: translate(-50vw, -50vh) rotate(0deg); /* 移动到中心，并设置旋转角度 */
    // animation: zoomIn 1s ease-out forwards; /* 设置动画持续时间 */
}

/* 顶部背景 */
.hero {
  position: sticky;
  top: -100rem;
  .content {
    position: absolute;
    width: 100vw;
    height: 100vh;  
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    color: white;
    z-index: 1;
    font-family: var(--main-font);
    /* 使用 transform 控制内容动画 */
    transition: all 1s ease;
    .border {
      background: #fff;
      width: 80vw;
      border-bottom: 1rem solid #fff;
      margin: 10vh 0;
    }
    .textLeft {
      font-size: 30rem;
      width: 80vw;
    }
    .textRight {
      font-size: 30rem;
      width: 80vw;
    }

  }
}
  </style>
  