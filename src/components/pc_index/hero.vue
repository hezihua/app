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
  }, 500)
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
   <section class="section hero zoom-background" ref="zoomBackground"  :style="{ height: '56.25vw' }">
      <Header />
      <Transition name="fade">

        <div class="content" v-if="show">
          <div class="textLeft" :style="{ height: '60%' }">
            <div>A Pan-Asia</div>
            <div>Multi-Strategy </div>
            <div>Platform</div>
          </div>
          <div class="border" :style="{ height: '60%' }"></div>
          <div class="textRight" :style="{ height: '60%' }">
            <div>
              <div>Relentless Pursuit of</div> 
              <div>Quality Returns</div>
            </div>
            
          </div>
        </div>
      </Transition>
    </section>
</template>

<style scoped lang="scss">

/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(-50%, -50%) scale(1.06) ;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* 基础样式 */
.section {
  width: 100%;
  color: #fff;
}

/* 背景样式 */
.zoom-background {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.zoom-background::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 102%;
  height: 102%;
  background-image: url('../../assets/landing_earth.jpg');
  background-size: 102% 102%;
  background-repeat: no-repeat;
  background-position: center;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(0deg);
  animation: zoomIn 1s ease-out forwards;
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
      padding-right: 1rem;
      margin: 0 80rem;
    }
    .textLeft {
      font-size: 58rem;
      font-family: var(--main-font);
      width: 685rem;
      text-align: right;
    }
    .textRight {
      font-size: 58rem;
      font-family: var(--main-font);
      width: 685rem;
      display: flex;
      align-items: flex-end;
    }
  }
}


</style>
