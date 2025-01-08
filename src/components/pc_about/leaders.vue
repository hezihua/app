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
        <div>Senior</div>
        <div>Management</div>
      </div>
      <div class="first-content">
        
        <div class="leader-card"  v-if="!(isSecondContentVisible && currentIndex !== 0)" @click="toggleContent(0)" >
            <div class="name">
              Tony Chin
            </div>
            <div class="duty" >Chief Executive Officer and</div>
            <div class="duty" >Chief Investment Officer</div>

            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" ></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 1)" @click="toggleContent(1)">
            <div class="name">
              U-Lipp Tong
            </div>
            <div class="duty" >Director of Risk - FICC</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png"></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 2)" @click="toggleContent(2)">
            <div class="name">
              Alex Ng
            </div>
            <div class="duty" >Director of Risk - Equity</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" ></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 3)" @click="toggleContent(3)">
            <div class="name">
                Jackel Chow
            </div>
            <div class="duty" >Head of Operations</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" ></div>
        </div>

      </div>

      <div class="second-content">
        <!-- 第二张图片的内容 -->
         <div class="second-contend-core">

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
               U-Lipp is responsible for establishing risk mandate and monitoring risk limit parameters for the FICC-related strategies. He was previously a Vice President of Investment Risk at JP Morgan Asset Management, an Associate Director of Risk Analysis at Dymon Asia and a Risk Officer at Brevan Howard. 
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
           <div v-if="currentIndex === 3">
            <div class="text">
              Jackel is leading the integration of external trading platforms and facilitating the interaction between trading and non-trading functions. He was previously a member of the Operations Committee and the Best Execution/Risk Committee at Ovata Capital and Folger Hill. He also worked in trading desk operations at Barclays, Morgan Stanley, and Goldman Sachs. 
  
            </div>
            <div class="text">
              He holds a Master's Degree in Financial Engineering from the University of Hong Kong and a Bachelor's degree from The Hong Kong University of Science and Technology, as well as a law degree from the University of London. He is a CFA and FRM Charter Holder.
  
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
  height: 1000rem;
  /* max-width: 600rem; */
  margin: auto;
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 58rem;
    > .text {
      margin: 700rem 0 0 10%;
      color: #093254;
      font-weight: 700;
      font-family: var(--main-font);
    }
    
    /* 初始状态 */
    
  }
  .first-content, .second-content {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    // padding: 20rem;
    box-sizing: border-box;
    // background-color: #093254; /* 设置背景颜色 */
    color: white;
    transition: transform 1s ease;
    clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%); /* 定义多边形的剪裁路径 */
  }
  .first-content {
    transform: translateX(0);
    width: 75%;
    display: flex;
    background-color: #093254;
    // justify-content: ;
    flex-wrap: wrap;
    padding-left: 20%;
    .leader-card {
      padding: 100rem 0 0;
      box-sizing: border-box;
      width: 40%;
      height: 400rem;
      cursor: pointer;
      .name {
        font-size: 58rem;
        width: 100%;
        margin-bottom: 10rem;
        font-family: var(--main-font);
      }
      .duty {
        width: 100%;
        font-size: 26rem;
      }
      .arrow {
        display: flex;
        // justify-content: center;
        align-items: center;
        height: 100rem;
        img {
          width: 80rem;
          transition: transform 1s ease;
          
        }
      }
    }
    
  }
  .second-content {
    width: 75%;
    background-color: #234c68;
    transform: translateX(100%); /* 初始位置在屏幕右侧外 */
    font-size: 26rem;
    display: flex;
    align-items: center;

    .text {
      padding: 20rem 25%;
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
