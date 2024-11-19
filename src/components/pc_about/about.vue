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
    <div class="about-us">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: calculatedHeight + 'px' }">
            <div class="title">About Us</div>
            <div class="article">
                <div class="text">From our founding in 2015 and our roots in proprietary investment, Infini Capital has organically </div>
                <div class="text">grown into a global multi-strategy investment management firm with a Pan-Asia focus.</div>
            </div>
            <div>
                <div class="text">We are relentless in our pursuit of high-quality returns, combining diversified, lowly-correlated</div>
                <div class="text">high-Sharpe strategies within our platform.</div>
            </div>
        </div>
      
        <div class="feature-boxes">
            <div class="introduce">
                <div>As has always been the case,</div>
                <div>we challenge, innovate, adapt and improve.Our firm has evolved through iterations since inception,</div>
                <div>developing over time in our continual strive for excellence.</div>

            </div>
            <div class="features">

                <div class="feature">First Asian Hedge Fund with Presence in Abu Dhabi</div>
                <div class="feature color">Proprietary Fund DNA Prioritizing Capital Preservation and High-Quality Returns</div>
                <div class="feature">Substantial Internal Investment to Ensure Alignment of Interest with Investors</div>
                <div class="feature color">Bottom-up Construction of Fund Infrastructure Enables Agility</div>
            </div>
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">

  /* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.08);
  }
}
  .about-us {
    color: #fff;
    position: relative;
    .about-boxes {
        background-image: url('../../assets/aboutus.jpg'); /* 背景图路径 */
        background-size: 102% 102%;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        .article {
            margin-bottom: 50px;
        }
        .title {
            font-size: 72px;
            width:65%;
            margin: 15% 10% 3%;
        }
        .text {
            font-size: 32px;
            width: 65%;
            margin: 0% 10%;
        }
    }
  }
  
  .feature-boxes {
    
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
            cursor: pointer;
            
        }
        .color {
          background: #3498db;
        }
        .feature:hover {
          animation: zoomIn 1s ease-out forwards;
        }
    }
  }
  
  
  </style>
  