<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 200)
});



</script>
<template>
    <div class="about-us">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: '75vw' }">
          <Transition name="fade">

            <div id="aboutuscontent" v-if="show">
  
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
          </Transition>
        </div>
      
        <div class="feature-boxes">
            <div class="introduce">
                <div>As has always been the case,</div>
                <div>we challenge, innovate, adapt and improve. Our firm has evolved through iterations since inception,</div>
                <div>developing over time in our pursuit of excellence.</div>

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

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translate(-60vw);
}
  .about-us {
    color: #fff;
    position: relative;
    .about-boxes {
        background-image: url('../../assets/aboutus.jpg'); /* 背景图路径 */
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        display: flex;
        // align-items: center;
        flex-wrap: wrap;
        padding-left: 10vw;
        #aboutuscontent {
          // transform: translate(-60vw);
          margin-top: 300rem;
        }
        .article {
            margin-bottom: 50rem;
        }
        .title {
            font-size: 72rem;
            font-family: var(--main-font);
            width:65%;
            margin: 0% 0% 120rem;
        }
        .text {
            font-size: 26rem;
            width: 65%;
        }
    }
  }
  
  .feature-boxes {
    
    .introduce {
        font-size: 32rem;
        color: #234c68;
        margin: 100rem 0 100rem;
        text-align: center;
    }
    .features {
        display: flex;
        gap: 80rem;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 0 80rem;
        .feature {
            background-color: #234c68;
            color: white;
            padding: 40rem;
            border-radius: 20rem;
            width: 280rem;
            height: 280rem;
            display: flex;
            align-items: center;
            text-align: center;
            font-size: 32rem;
            cursor: pointer;
            
        }
        .color {
          background: #093254;
        }
        .feature:hover {
          animation: zoomIn 1s ease-out forwards;
        }
    }
  }
  
  
  </style>
  