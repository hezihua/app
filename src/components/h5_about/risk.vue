<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const isSecondContentVisible = ref(false)
const currentIndex = ref(0)


const toggleContent = (index = 0)=> {
  isSecondContentVisible.value = !isSecondContentVisible.value;
  currentIndex.value = index
  
}



</script>

<template>
  <div class="transition-container">
    <div class="content">
      <div class="title">
        <div>Risk</div>
        <div>Committee</div>
      </div>
      <div class="first-content">
        
        <div class="leader-card">
            <div class="first">

                <div class="name">
                  Tony Chin
                </div>
                <div class="duty" >Chief Executive Officer and</div>
                <div class="duty" >Chief Investment Officer</div>
    
                <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(0)"></div>
            </div>
            <div class="detail" v-if="currentIndex === 0">
                <div class="text">Tony Chin is the Founder, CEO and CIO of Infini Capital.</div>
                <div class="text">
                Before founding Infini Capital in 2015, he was a Partner at GCS Capital, a Hong Kong based Private Equity firm with a focus on buyout and restructuring opportunities in financial sector within Asia. He started his career in the investment banking division at Morgan Stanley and HSBC, with a focus on Mergers and Acquisitions in the TMT sector.
                </div>
                <div class="text">
                He holds a BA in Economics from the University of Michigan, Ann Arbor. 
                </div>
            </div>
        </div>
        <div class="leader-card">
            <div class="first">

                <div class="name">
                  U-Lipp Tong
                </div>
                <div class="duty" >Director of Risk - FICC</div>
                <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(1)"></div>
            </div>
            <div class="detail" v-if="currentIndex === 1">
                <div class="text">
                U-Lipp is responsible for establishing risk mandate and monitoring risk limit parameters for the FICC-related strategies. He was previously a Vice President of Investment Risk at JP Morgan Asset Management, an Associate Director of Risk Analysis at Dymon Asia and a Risk Officer at Brevan Howard. 
                </div>
                <div class="text">
                He holds a Master of Finance, a Master of Advanced Mechanical Engineering, and a Bachelor's degree in Mechanical Engineering from Imperial College.
                </div>
            </div>
        </div>
        <div class="leader-card">
            <div class="first">

                <div class="name">
                  Alex Ng
                </div>
                <div class="duty" >Director of Risk - Equity</div>
                <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(2)"></div>
            </div>
            <div class="detail" v-if="currentIndex === 2">
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
  </div>
</template>


<style scoped lang="scss">
.transition-container {
    position: relative;
    width: 100%;
    margin: auto;
    color: #fff;
    position: relative;
    height: 100vh;
    position: sticky;
    overflow: hidden;
    background: #fff;
    min-height: 100vh;
  .content {
    position: relative;
    width: 100%;
    // height: 100vh;
    overflow: hidden;
    padding: 10vh 10vw 0 10vw;
    box-sizing: border-box;
    .title {
      color: #0a3a5e;
      font-size: 30rem;
      font-weight: 700;
      padding: 0 0 10vh 0;
    }
    
    /* 初始状态 */
    
  }
  .first-content {
    transform: translateX(0);
    width: 100%;
    display: flex;
    color: #0a3a5e;
    // justify-content: ;
    flex-wrap: wrap;
    height: 100%;
    box-sizing: border-box;
    transition: transform 1s ease;
    
    .leader-card {
      box-sizing: border-box;
      width: 100%;
      .first {

          .name {
            font-size: 30rem;
            width: 100%;
            margin-bottom: 10rem;
          }
          .duty {
            width: 100%;
            font-size: 15rem;
          }
          .arrow {
            display: flex;
            // justify-content: center;
            align-items: center;
            // height: 100rem;
            img {
              width: 80rem;
              transition: transform 1s ease;
              cursor: pointer;
            }
          }
      }
      .detail {
        
        font-size: 12rem;
      }
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
}



</style>
