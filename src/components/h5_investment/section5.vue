<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Footer from '../common/h5_footer.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 2000)
});

const items = [
  { title: "AI Empowerment", details: "We are exploring the use of AI in the  investment process and are in discussions with a reputable provider in the region to support this initiative." },
  { title: "In-house Quantitative and IT Teams", details: "We have dedicated our in-house research and development effort in technology to accelerate our platform evolution." },
  { title: "Proprietary Systems", details: "We have developed tailor-made system solutions to best fit our strategy and risk mandate, optimizing risk-reward ratios and adapting quickly to changing market conditions." }
];
const blockHovering = ref([false, false, false, false]);
// 使用数组来存储每个块的悬停状态
const isHovering = ref([false, false, false]);

const showDetails = (index) => {
  isHovering.value[index] = true;
};

const hideDetails = (index) => {
  isHovering.value[index] = false;
};

const currentIndex = ref(-1)
const showcontent = ref(false)

const handleClick = (index = 0) => {
    console.log(currentIndex ,-1)
    if(currentIndex.value === -1) {
        currentIndex.value = index
        setTimeout(()=> {
            showcontent.value = true
        }, 2000)
    } else {
        currentIndex.value = -1
        showcontent.value = false

    }
    
}


const triggerDetails = (index) => {
  showcontent.value = false
  if (blockHovering.value[index]) {
    blockHovering.value[index] = false;
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
    }, 1000);
    blockHovering.value = result
  }
 
  
};

const handleMouseEnter = (index) => {
  console.log('kkkk')
  showcontent.value = false
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
  }, 1000);
  blockHovering.value = result
}
const handleMouseLeave = (index) => {
  showcontent.value = false
  blockHovering.value[index] = false;
}




</script>
<template>
    <div class="container">
        <div class="Infrastructure-container">
          <div class="Infrastructure">
            <div class="infrastructuretitle">Infrastructure</div>
            <div class="list">
                <div 
                    v-for="(item, index) in items" 
                    :key="index" 
                    class="item" 
                    @mouseenter="showDetails(index)" 
                    @mouseleave="hideDetails(index)"
                    >
                    <transition name="fade">
                        <div v-if="isHovering[index]" class="content-detail">{{ item.details }}</div>
                        <div v-else class="content-title">
                            <div class="text">
                                {{ item.title }}
                            </div>
                            <div>
                                +
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
              
          </div>
        </div>
        <Footer />
    </div>
      
  </template>
  
  <style scoped lang="scss">



.fade-feature-enter-active, .fade-feature-leave-active {
  transition: opacity 0.3s;
}
.fade-feature-enter, .fade-feature-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

    /* 定义动画 */
@keyframes showcontent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  .container {
    background: #f8f9fa;
    // height: 140vh;
    position: relative;
    overflow: hidden;
    // border-radius: 20rem 20rem 0 0;
    // top: -40vh;
  }
  

  .Infrastructure-container {
    
    .Infrastructure {
        width: 100vw;
        background: url('../../assets/Infrastructure.jpg') no-repeat;
        color: #fff;
        height: 100vh;
        padding: 0 10vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        .infrastructuretitle {
            font-size: 30rem;
            font-family: var(--main-font);
            // margin-bottom: 200rem;
        }

        .item {
            // width: ;
            // height: 250rem;
            // position: relative;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            text-align: center;
            
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s;
            cursor: pointer;
            margin: 0 auto;
            height: 20vh;
            .content-title {
                // position: absolute;
                // left: 0;
                // top: 0;
                font-size: 20rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                
                .text {
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                }
            }
            .content-detail {
                // position: absolute;
                // left: 0;
                // top: 0;
                
                font-size: 12rem;
                display: flex;
                justify-content: center;
                align-items: center;
                // height: 250rem;
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
        }

        .fade-enter-from, .fade-leave-to {
            opacity: 0;
        }
    }
  }
  
  
  </style>
  