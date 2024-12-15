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
const isHovering = ref([false, false, false]);


const triggerDetails = (index) => {
  showcontent.value = false
  if (isHovering.value[index]) {
    isHovering.value[index] = false;
  } else {
    let result = [];
    [1,2,3].forEach((item, i) => {
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
        <div>Operating</div>
        <div>Committee</div>
      </div>
      <div class="first-content">
        
        <div 
          class="leader-card" 
          :class="{ 'full-width': isHovering[0] }"
          @click="triggerDetails(0)"
        >
            <div class="first">

                <div class="name">
                    Stephen Lukow
                </div>
                <div class="duty" >General Counsel</div>
    
                <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" ></div>
            </div>
            <div class="detail">
              <div class="detailcontent" v-if="isHovering[0] && showcontent">

                <div class="text">

                <!-- </div>
                <div class="text"> -->
                    Stephen is responsible for the provision of in-house advice on a range of legal and compliance matters within Infini Capital. He was previously Asian General Counsel at ExodusPoint. Prior to his time at ExodusPoint, he was Regional Head of Trading Agreements at Bank of America. He also led the legal team for structured credit transactions in New York and founded and led Asian fixed income legal team in Tokyo during his time in Lehman Brothers. 
                <!-- </div>
                <div class="text"> -->
                    He received his J.D. from Harvard Law School in 1993 and Bachelor of Arts degrees from Brown University in 1986.
                </div>
              </div>
            </div>
        </div>
        <div 
          class="leader-card" 
          :class="{ 'full-width': isHovering[1] }"
          @click="triggerDetails(1)"
        >
            <div class="first">

                <div class="name">
                    Jackel Chow
                </div>
                <div class="duty" >Head of Operations</div>
                <div class="arrow"> <img src="../../assets/ic_website_layout_v1B.png" ></div>
            </div>
            <div class="detail" >
              <div class="detailcontent" v-if="isHovering[1] && showcontent">

                <div class="text">
                    Jackel is leading the integration of external trading platforms and facilitating the interaction between trading and non-trading functions. He was previously a member of the Operations Committee and the Best Execution/Risk Committee at Ovata Capital and Folger Hill. He also worked in trading desk operations at Barclays, Morgan Stanley, and Goldman Sachs. 
                <!-- </div>
                <div class="text"> -->
                    He holds a Master's Degree in Financial Engineering from the University of Hong Kong and a Bachelor's degree from The Hong Kong University of Science and Technology, as well as a law degree from the University of London. He is a CFA and FRM Charter Holder.
                </div>
              </div>
            </div>
        </div>
       

      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped lang="scss">
.transition-container {
    width: 100%;
    margin: auto;
    color: #fff;
    position: relative;
    overflow: hidden;
    background: #093254;
    min-height: 100vh;
    // padding-bottom: 10vh;
    top: -0vh;
  .content {
    position: relative;
    width: 100%;
    padding: 10vh 0 0 0;
    // height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    .title {
      color: #fff;
      font-size: 30rem;
      font-weight: 700;
      padding: 0 10vw 10vh;
      font-family: var(--main-font);
    }
    
    /* 初始状态 */
    
  }
  .first-content {
    transform: translateX(0);
    width: 100%;
    display: flex;
    color: #fff;
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
          height: 370rem; /* 宽度撑满 */
      }
      .first {
          height: 120rem;
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
        background: #fff;
        color: #093254;
        font-size: 12rem;
        height: 250rem;
        width: 100vw;
        padding: 10vw 10vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        .detailcontent {
          text-align: justify;
        }
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
