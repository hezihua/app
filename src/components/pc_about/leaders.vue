<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const isSecondContentVisible = ref(false)
const currentIndex = ref(null)


const toggleContent = (index = 0)=> {
  isSecondContentVisible.value = !isSecondContentVisible.value;
  currentIndex.value = index
  
}



</script>

<template>
  <div class="transition-container">
    <div class="content" :class="{ active: isSecondContentVisible }">
      <div class="text" v-if="!isSecondContentVisible">
        <div>Risk</div>
        <div>Committee</div>
      </div>
      <div class="first-content">
        
        <div class="leader-card"  v-if="!(isSecondContentVisible && currentIndex !== 0)">
            <div class="name">
              Tony Chin
            </div>
            <div class="duty" >Chief Executive Officer and</div>
            <div class="duty" >Chief Investment Officer</div>

            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(0)"></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 1)">
            <div class="name">
              U-Lipp Tong
            </div>
            <div class="duty" >Director of Risk - FICC</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(1)"></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 2)">
            <div class="name">
              Alex Ng
            </div>
            <div class="duty" >Director of Risk - Equity</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(2)"></div>
        </div>

      </div>

      <div class="second-content">
        <!-- 第二张图片的内容 -->
        <div v-if="currentIndex === 0">
          <div class="text">Tony Chin is the Founder, CEO and CIO of Infini Capital.</div>
          <div class="text">
            Before founding Infini Capital in 2015, he was a Partner at GCS Capital, a Hong Kong based Private Equity firm with a focus on buyout and restructuring opportunities in financial sector within Asia. He started his career in the investment banking division at Morgan Stanley and HSBC, with a focus on Mergers and Acquisitions in the TMT sector.
          </div>
          <div class="text">
            He holds a BA in Economics from the University of Michigan, Ann Arbor. 
          </div>
        </div>
        <div v-if="currentIndex === 1">
          <div class="text">
            U-Lipp is responsible for establishing a risk mandate and monitoring risk limit parameters for the FICC-related strategies. He was previously a Vice President of Investment Risk at JP Morgan Asset Management, an Associate Director of Risk Analysis at Dymon Asia and a Risk Officer at Brevan Howard. 
          </div>
          <div class="text">
            He holds a Master of Finance, a Master of Advanced Mechanical Engineering, and a Bachelor's degree in Mechanical Engineering from Imperial College.
          </div>
        </div>
        <div v-if="currentIndex === 2">
          <div class="text">
            Alex oversees risk management for equity-related strategies. Previously, he held a senior risk position at Polymer, managing risk identification, assessment, and mitigation. Before that, he was a Vice President at MSCI.
          </div>
          <div class="text">
            He holds an MBA and a BBA from The Hong Kong University of Science and Technology and is a CFA and FRM Charter Holder.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.transition-container {
  position: relative;
  width: 100%;
  height: 1000px;
  /* max-width: 600px; */
  margin: auto;
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 58px;
    > .text {
      margin: 700px 0 0 10%;
      color: #0a3a5e;
      font-weight: 700;
    }
    
    /* 初始状态 */
    
  }
  .first-content, .second-content {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    // padding: 20px;
    box-sizing: border-box;
    // background-color: #0a3a5e; /* 设置背景颜色 */
    color: white;
    transition: transform 1s ease;
    clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%); /* 定义多边形的剪裁路径 */
  }
  .first-content {
    transform: translateX(0);
    width: 75%;
    display: flex;
    background-color: #0a3a5e;
    // justify-content: ;
    flex-wrap: wrap;
    padding-left: 20%;
    .leader-card {
      padding: 100px 0 0;
      box-sizing: border-box;
      width: 40%;
      height: 400px;
      .name {
        font-size: 58px;
        width: 100%;
      }
      .duty {
        width: 100%;
        font-size: 32px;
      }
      .arrow {
        display: flex;
        // justify-content: center;
        align-items: center;
        height: 100px;
        img {
          width: 80px;
          transition: transform 1s ease;
          cursor: pointer;
        }
      }
    }
    
  }
  .second-content {
    width: 75%;
    background-color: #234c68;
    transform: translateX(100%); /* 初始位置在屏幕右侧外 */
    font-size: 36px;
    padding: 260px 0 0;
    .text {
      padding: 20px 25%;
    }
  }

  /* 切换到第二张内容 */
  .content.active .first-content {
    transform: translateX(-30%); /* 第一个内容向左移出屏幕 */
    padding-left: 6%;
  }

  /* 切换到第二张内容 */
  .content.active .first-content .arrow img {
    transform: rotate(180deg); /* 第一个内容向左移出屏幕 */
  }

  .content.active .second-content {
    transform: translateX(0); /* 第二个内容移入屏幕 */
  }
}



</style>
