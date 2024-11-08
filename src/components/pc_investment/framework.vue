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
    <div class="container">
      
        <div class="feature-boxes">
            <div class="introduce">
                <div>As has always been the case,</div>
                <div>we challenge, innovate, adapt and improve.Our firm has evolved through iterations since inception,</div>
                <div>developing over time in our continual strive for excellence.</div>

            </div>
            <div class="features">

                <div class="feature">First Asian Hedge Fund with Presence in Abu Dhabi</div>
                <div class="feature">Proprietary Fund DNA Prioritizing Capital Preservation and High-Quality Returns</div>
                <div class="feature">Substantial Internal Investment to Ensure Alignment of Interest with Investors</div>
                <div class="feature">Bottom-up Construction of Fund Infrastructure Enables Agility</div>
            </div>
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    background: #f8f9fa;
  }
  
  .feature-boxes {
    overflow: hidden;
    .introduce {
        font-size: 32px;
        color: #005a8c;
        margin: 100px 0 100px;
        text-align: center;
    }
    .features {
        display: flex;
        gap: 80px;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 0 80px;
        .feature {
            background-color: #005a8c;
            color: white;
            padding: 40px;
            border-radius: 20px;
            width: 280px;
            height: 280px;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 32px;
        }
    }
  }
  
  
  </style>
  