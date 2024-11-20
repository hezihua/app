<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

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
   <section class="section hero zoom-background" ref="zoomBackground"  :style="{ height: calculatedHeight + 'px' }">
      <Header />
      <Transition name="fade">

        <div class="content" v-if="show">
          <div class="textLeft" :style="{ height: calculatedHeight * 0.5 + 'px' }">
            <div>A Pan-Asia</div>
            <div>Multi-Strategy </div>
            <div>Platform</div>
          </div>
          <div class="border" :style="{ height: calculatedHeight * 0.5 + 'px' }"></div>
          <div class="textRight" :style="{ height: calculatedHeight * 0.5 + 'px' }">
            <div :style="{ paddingTop: calculatedHeight * 0.5 - 168 + 'px' }">Relentless Pursuit of</div> 
            <div>Quality Returns</div>
          </div>
        </div>
      </Transition>
    </section>
</template>

<style scoped lang="scss">


/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(-50%, -50%) scale(1.2) rotate(10deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
}

.section {
  width: 100%;
  color: #fff;
}
.zoom-background {
  width: 100%;
  position: relative;
  overflow: hidden;
//   background-image: url('../../assets/landing_earth.jpg');
//   background-size: 102% 102%;
//   background-repeat: no-repeat;
//   background-position: center center;
//   animation: zoomIn 1s ease-out forwards; /* 自动产生缩放效果 */
}
.zoom-background::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 102%; /* 放大一点以防旋转时背景漏出 */
    height: 102%;
    background-image: url('../../assets/landing_earth.jpg'); /* 背景图路径 */
    background-size: 102% 102%;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(0deg); /* 移动到中心，并设置旋转角度 */
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    .border {
      background: #fff;
      padding-right: 1px;
      margin: 0 80px;
    }
    .textLeft {
      font-size: 58px;
      font-family: var(--main-font);
      width: 685px;
      text-align: right;
    }
    .textRight {
      font-size: 58px;
      font-family: var(--main-font);
      width: 685px;
    }

  }
}


</style>
