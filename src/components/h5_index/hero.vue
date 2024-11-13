<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
// import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
const show = ref(false); 
// 动态计算高度
const calculateHeight = () => {
  if (zoomBackground.value) {
    const width = zoomBackground.value.clientWidth;
    calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
  }
};

// 组件挂载后计算一次高度
onMounted(() => {
  calculateHeight();

  // 监听窗口大小变化，重新计算高度
  window.addEventListener('resize', calculateHeight);
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
   <section class="section hero zoom-background" ref="zoomBackground" >
      <!-- <Header /> -->
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


/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(0, 0) scale(1.1) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}

.section {
  width: 100vw;
  height: 100vh;
  color: #fff;
}
.zoom-background {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.zoom-background::before {
    content: "";
    position: absolute;
    // top: 50vh;
    // left: 50vw;
    width: 100vw; /* 放大一点以防旋转时背景漏出 */
    height: 100vh;
    background-image: url('../../assets/landing_earth.jpg'); /* 背景图路径 */
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: 20% 0;
    transform-origin: center;
    // transform: translate(-50vw, -50vh) rotate(0deg); /* 移动到中心，并设置旋转角度 */
    animation: zoomIn 1s ease-out forwards; /* 设置动画持续时间 */
}

/* 顶部背景 */
.hero {
  position: relative;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .content {
    position: absolute;
    width: 100vw;
    height: 100vh;  
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    z-index: 9;
    padding-left: 10vw;
    .border {
      background: #fff;
      width: 80vw;
      border-bottom: 1px solid #fff;
      margin: 10vh 0;
    }
    .textLeft {
      font-size: 30rem;
    }
    .textRight {
      font-size: 30rem;
    }

  }
}


</style>
