<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue';
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

const backgroundStyle = ref({
  transform: 'scale(1)',
  transition: 'transform 1s ease-in-out',
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      zoomBackground.value.classList.add('active'); // 添加类来触发动画
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      zoomBackground.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

// 组件挂载后计算一次高度
onMounted(async () => {
  calculateHeight();

  // 监听窗口大小变化，重新计算高度
  window.addEventListener('resize', calculateHeight);
  await nextTick()

  const moduleElement = document.querySelector('.earth');
  observer.observe(moduleElement);
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
    <section class="section earth zoom-background" ref="zoomBackground"  :style="{ height: calculatedHeight + 'px', ...backgroundStyle }">
      <div class="content">

        <div class="title">
            Pan-Asia Expert with Local Expertise
        </div>
        <div class="text">
            As a homegrown Pan-Asia firm, we have cultivated specialized expertise in navigating the diverse and dynamic Asian markets. Over the years, we have built robust infrastructure, tailored to the intricacies of the heterogeneous Asia market. This platform-level sophistication empowers our talent to excel at their craft.
        </div>
      </div>
    </section>
</template>

<style scoped lang="scss">


/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(-50%, -51%) scale(1.05);
  }
  100% {
    transform: translate(-50%, -51%) scale(1);
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
}
.zoom-background::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; /* 放大一点以防旋转时背景漏出 */
    height: 100%;
    background-image: url('../../assets/earth.jpg'); /* 背景图路径 */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    // transform: translate(-50%, -50%) rotate(0deg); /* 移动到中心，并设置旋转角度 */
    // animation: zoomIn 1s ease-out forwards; /* 设置动画持续时间 */
}

.zoom-background.active::before {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}

/* 顶部背景 */
.earth {
  
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    z-index: 9;
    .title {
        font-size: 78px;
        width:850px;
        margin: 15% auto 3%;
        text-align: center;
    }
    .text {
        font-size: 62px;
        width: 65%;
        margin: 0% auto;
    }

  }
}


</style>
