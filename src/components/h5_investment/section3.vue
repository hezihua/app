<script setup>
import { ref, onMounted, watch, onUnmounted, nextTick } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
 


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
  await nextTick()

  const moduleElement = document.querySelector('.earth');
  observer.observe(moduleElement);
});



</script>

<template>
    <section class="section earth zoom-background" ref="zoomBackground"  :style="{ ...backgroundStyle }">
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
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}

.section {
  background: #f8f9fa;
  height: 120vh;
  position: sticky;
  overflow: hidden;
  position: sticky;
  top: -20vh;
}
.zoom-background::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; /* 放大一点以防旋转时背景漏出 */
    height: 100%;
    background-image: url('../../assets/earth.jpg'); /* 背景图路径 */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 90% 0%;
    transform-origin: center;
    transform: translate(-50%, -50%) rotate(0deg); /* 移动到中心，并设置旋转角度 */
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 9;
    color: #fff;
    padding: 0 10vw;
    box-sizing: border-box;
    .title {
        font-size: 30rem;
        font-family: var(--main-font);
        text-align: center;
    }
    .text {
        font-size: 15rem;
        margin: 0% auto;
    }

  }
}


</style>
