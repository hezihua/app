<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Footer from '../common/h5_footer.vue'
const isSecondContentVisible = ref(false)
const currentIndex = ref(0)


const toggleContent = (index = 0)=> {
  isSecondContentVisible.value = !isSecondContentVisible.value;
  currentIndex.value = index
  
}

const showcontent = ref(false)






// 使用数组来存储每个块的悬停状态
const isHovering = ref([false, false, false, false]);


const triggerDetails = (index) => {
  showcontent.value = false
  if (isHovering.value[index]) {
    isHovering.value[index] = false;
  } else {
    let result = [];
    [1,2,3,4].forEach((item, i) => {
      if (i === index) {
          result.push(true)
      } else {
        result.push(false)
      }
    })
    setTimeout(() => {
      showcontent.value = true
    }, 500);
    isHovering.value = result
  }
 
  
};



</script>

<template>
  <div class="transition-container">
    <div class="content">
      <div class="title">
        <div>Founder</div>
      </div>
      <div class="first-content">
        
        <div 
          class="leader-card full-width" 
          @click="triggerDetails(0)"
        >
            <div class="first">

                <div class="name">
                  Tony Chin
                </div>
                <div class="duty" >Founder, CEO and CIO</div>
    
                <!-- <div class="arrow"> <img src="../../assets/arrow.png" ></div> -->
            </div>
            <div class="detail">
              <div class="detailcontent" >

                <div class="text">
                  Before founding Infini in 2015, he was engaged in proprietary trading and also successfully built several start-ups.
                  He started his career in the investment banking division at Morgan Stanley and HSBC.
                </div>
              </div>
            </div>
        </div>
        <!-- <div 
          class="leader-card" 
          :class="{ 'second-full-width': isHovering[1] }"
          @click="triggerDetails(1)"
        >
            <div class="first">

                <div class="name">
                  U-Lipp Tong
                </div>
                <div class="duty" >Head of Risk - FICC</div>
                <div class="arrow"> <img src="../../assets/arrow.png" ></div>
            </div>
            <div class="detail second" >
              <div class="detailcontent" v-if="isHovering[1] && showcontent">

                <div class="text">
                U-Lipp is responsible for establishing risk mandate and monitoring risk limit parameters for the FICC-related strategies. He was previously a Vice President of Investment Risk at JP Morgan Asset Management, an Associate Director of Risk Analysis at Dymon Asia and a Risk Officer at Brevan Howard. 
                </div>
                <div class="text">
                He holds a Master of Finance, a Master of Advanced Mechanical Engineering, and a Bachelor's degree in Mechanical Engineering from Imperial College.
                <div class="educationtitle"> Education</div>
                <div class="spetext">

                  MSc in Finance, MEng & BEng in Mechanical Engineering from Imperial College

                </div>

                </div>
              </div>
            </div>
        </div>
        <div 
          class="leader-card" 
          :class="{ 'third-full-width': isHovering[2] }"
          @click="triggerDetails(2)"
        >
            <div class="first">

                <div class="name">
                  Alex Ng
                </div>
                <div class="duty" >Director of Risk - Equity</div>
                <div class="arrow"> <img src="../../assets/arrow.png" ></div>
            </div>
            <div class="detail third">
              <div class="detailcontent" v-if="isHovering[2] && showcontent">

                <div class="text">
                  Alex oversees risk management for equity-related strategies. Previously, he held a senior risk position at Polymer, managing risk identification, assessment, and mitigation. Before that, he was a Vice President at MSCI.
                </div>
                <div class="text">
                  <div class="educationtitle"> Education</div>
                  <div class="spetext">
                    MBA and BBA – The Hong Kong University of Science and Technology
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div 
          class="leader-card" 
          :class="{ 'fourth-full-width': isHovering[3] }"
          @click="triggerDetails(3)"
        >
            <div class="first">

                <div class="name">
                    Jackel Chow
                </div>
                <div class="duty">CFA, FRM                </div>
                <div class="duty" >Head of Operations</div>
                <div class="arrow"> <img src="../../assets/arrow.png" ></div>
            </div>
            <div class="detail fourth" >
              <div class="detailcontent" v-if="isHovering[3] && showcontent">

                <div class="text">
                    Jackel is leading the integration of external trading platforms and facilitating the interaction between trading and non-trading functions. He was previously a member of the Operations Committee and the Best Execution/Risk Committee at Ovata Capital and Folger Hill. He also worked in trading desk operations at Barclays, Morgan Stanley, and Goldman Sachs. 
                    <div class="educationtitle"> Education</div>
                  <div class="spetext">

                    Master's Degree in Financial Engineering – University of Hong Kong 
                  </div>
                  <div class="spetext">

                    BBA in Accounting and Finance – The Hong Kong University of Science and Technology 
                  </div>
                  <div class="spetext">

                    LLB – University of London
                  </div>

                </div>
              </div>
            </div>
        </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped lang="scss">
.transition-container {
    width: 100%;
    margin: auto;
    color: #093254;
    position: relative;
    overflow: hidden;
    background: #fff;
    min-height: 100vh;
  .content {
    position: relative;
    width: 100%;
    padding: 15vh 0 0 0;
    box-sizing: border-box;
    .title {
      color: #093254;
      font-size: 30rem;
      font-weight: 700;
      padding: 0 10vw 15vh;
      font-family: var(--main-font);
    }
    
    /* 初始状态 */
    
  }
  .first-content {
    transform: translateX(0);
    width: 100%;
    display: flex;
    color: #093254;
    // justify-content: ;
    flex-wrap: wrap;
    height: 100%;
    box-sizing: border-box;
    transition: transform 1s ease;
    
    .leader-card {
      box-sizing: border-box;
      width: 100%;
      height: 120rem;
      overflow: hidden;
      transition: all .5s ease; /* 加入过渡效果 */   
      &.full-width {
          height: 450rem; /* 宽度撑满 */
      }
      &.second-full-width {
        height: 246rem;
      }
      &.third-full-width {
        height: 220rem;
      }
      &.fourth-full-width {
        height: 266rem;
      }
      .first {
          height: 150rem;
          padding: 0 10vw;
          .name {
            font-size: 30rem;
            width: 100%;
            height: 40rem;
          }
          .duty {
            width: 100%;
            font-size: 15rem;
          }
          .arrow {
            display: flex;
            align-items: center;
            height: 40rem;
            img {
              width: 40rem;
              transition: transform 1s ease;
              cursor: pointer;
            }
          }
      }
      .detail {
        background: #093254;
        color: #fff;
        
        font-size: 14rem;
        height: 300rem;
        width: 100vw;
        padding: 10vw 10vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .detailcontent {
          text-align: justify;
          .educationtitle {
            text-decoration: underline;
            margin: 10rem 0 5rem;
          }
          .spetext {
            margin-bottom: 5rem;
          }
        }
      }

      .second {
        height: 126rem;
      }

      .third {
        height: 100rem;
      }
      .fourth {
        height: 146rem;
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
