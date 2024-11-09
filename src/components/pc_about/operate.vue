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
        <div>Operate</div>
        <div>Committee</div>
      </div>
      <div class="first-content">
        
        <div class="leader-card"  v-if="!(isSecondContentVisible && currentIndex !== 0)">
            <div class="name">
                Stephen Lukow
            </div>
            <div class="duty" >General Counsel </div>

            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(0)"></div>
        </div>
        <div class="leader-card"   v-if="!(isSecondContentVisible && currentIndex !== 1)">
            <div class="name">
                Jackel Chow
            </div>
            <div class="duty" >Head of Operations</div>
            <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" @click="toggleContent(1)"></div>
        </div>

      </div>

      <div class="second-content">
        <!-- 第二张图片的内容 -->
        <div v-if="currentIndex === 0">
          <div class="text">
            Stephen is responsible for the provision of in-house advice on a range of legal and compliance matters within Infini Capital. He was previously Asian General Counsel at ExodusPoint. Prior to his time at ExodusPoint, he was Regional Head of Trading Agreements at Bank of America. He also led the legal team for structured credit transactions in New York and founded and led Asian fixed income legal team in Tokyo during his time in Lehman Brothers. 

          </div>
          <div class="text">
            He received his J.D. from Harvard Law School in 1993 and Bachelor of Arts degrees from Brown University in 1986.
          </div>
        </div>
        <div v-if="currentIndex === 1">
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
    background: #f8f9fa;
    > .text {
        position: absolute;
        right: 15%;
        margin: 700px 0 0 10%;
        color: #0a3a5e;
        font-weight: 700;
    }
    
    /* 初始状态 */
    
  }
  .first-content, .second-content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    // padding: 20px;
    box-sizing: border-box;
    // background-color: #0a3a5e; /* 设置背景颜色 */
    color: white;
    transition: transform 1s ease;
    clip-path: polygon(0% 0, 100% 0, 80% 100%, 0% 100%); /* 定义多边形的剪裁路径 */
  }
  .first-content {
    transform: translateX(0);
    width: 75%;
    // display: flex;
    background-color: #0a3a5e;
    // justify-content: ;
    // flex-wrap: wrap;
    padding-left: 25%;
    .leader-card {
      padding: 100px 0 0;
      box-sizing: border-box;
    //   width: 40%;
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
    background-color: #3498db;
    transform: translateX(-100%); /* 初始位置在屏幕右侧外 */
    font-size: 36px;
    padding: 260px 0 0;
    .text {
      padding: 20px 25%;
    }
  }

  /* 切换到第二张内容 */
  .content.active .first-content {
    transform: translateX(30%); /* 第一个内容向左移出屏幕 */
    padding-left: 55%;
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
