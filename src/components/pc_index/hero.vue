<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

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

.section {
  width: 100%;
  color: #fff;
}
.zoom-background {
  width: 100%;
  background-image: url('../../assets/landing_earth.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  animation: zoomIn 1s ease-out forwards; /* 自动产生缩放效果 */
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
    }

  }
}


</style>
