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

const items = [
  { title: "AI Empowerment", details: "We are exploring the use of AI in the  investment process and are in discussions with a reputable provider in the region to support this initiative." },
  { title: "In-house Quantitative and IT Teams", details: "We have dedicated our in-house research and development effort in technology to accelerate our platform evolution." },
  { title: "Proprietary Systems", details: "We have developed tailor-made system solutions to best fit our strategy and risk mandate, optimizing risk-reward ratios and adapting quickly to changing market conditions." }
];

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




</script>
<template>
    <div class="container">
      
        <div class="feature-boxes">
            <div class="title">
                Robust Risk Management Framework
            </div>
            <div class="introduce">
                <div>As a firm that invests substantial capital in our own strategies,</div>
                <div>capital preservation and quality of returns are of the utmost importance to us.</div>

            </div>
            <div class="features">
                <transition name="fade-feature">
                    <div :class="{ 'full-width': currentIndex === 0 }"  class="feature" @click="handleClick(0)" v-if="currentIndex === 0 || currentIndex === -1">
                        <div>
                            <div>Specialized Risk</div>
                            <div>Management</div>
                            <div>Process</div>
                        </div>
                        <div class="detail" v-if="currentIndex === 0">
                            <div class="content"  v-if="showcontent">

                                Risk managers specialize in the asset classes they oversee, facilitating productive discussions with investment professionals.
                            </div>
                        </div>
                    </div>
                </transition>
                <transition name="fade-feature">
                    <div :class="{ 'full-width': currentIndex === 1 }" class="feature color" @click="handleClick(1)"  v-if="currentIndex === 1 || currentIndex === -1">
                        <div>
                            <div>Prudent</div>
                            <div>Capital</div>
                            <div>Allocation</div>
                        </div>
                        <div class="detail" v-if="currentIndex === 1">
                            <div class="content"  v-if="showcontent">

                                Capital allocation is both art and science. We strive to identify the best uses of capital to generate superior long-term returns for investors. 
                            </div>
                        </div>
                    </div>
                </transition>
                <transition name="fade-feature">
                    <div :class="{ 'full-width': currentIndex === 2 }" class="feature" @click="handleClick(2)"  v-if="currentIndex === 2 || currentIndex === -1">
                        <div>
                            <div>Mitigation</div>
                            <div>of</div>
                            <div>Tail Risks</div>
                        </div>
                        <div class="detail" v-if="currentIndex === 2">
                            <div class="content"  v-if="showcontent">

                                We systematically evaluate potential stress factors and scenarios to manage exposures across our portfolio, striking the right balance between risk and reward.
                            </div>
                        </div>
                    </div>
                </transition>
                <transition name="fade-feature">
                    <div :class="{ 'full-width': currentIndex === 3 }" class="feature color" @click="handleClick(3)"  v-if="currentIndex === 3 ||  currentIndex === -1">
                        <div>
                            <div>Resilient</div>
                            <div>Liquidity</div>
                            <div>Profile</div>
                        </div>
                        <div class="detail" v-if="currentIndex === 3">
                            <div class="content" v-if="showcontent">

                                We employ a range of methods to monitor and manage the liquidity of our portfolio. We stay vigilant even in highly liquid asset classes to avoid concentration risks. 
                            </div>
                        </div>
                    </div>
                    
                </transition>
            </div>
            <div class="Infrastructure-container">
                
                <div class="Infrastructure">
                    <div class="image">
                        <img src="../../assets/Infrastructure.jpg" alt="">
                    </div>
                    <div class="title">Infrastructure</div>
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
  }
  
  .feature-boxes {
    overflow: hidden;

    .title {
        font-size: 68px;
        text-align: center;
        width: 800px;
        margin: 200px auto 60px;
    }
    .introduce {
        font-size: 32px;
        color: #005a8c;
        margin: 0px 0 100px;
        text-align: center;
    }
    .features {
        display: flex;
        justify-content: center;
        width: 2000px;
        margin: 0 auto;
        padding: 0 0 80px;
        position: relative;
        height: 380px;
        .feature {
            position: absolute;
            left: 0;
            top: 0;
            background-color: #1a3a5f;
            color: white;
            padding: 120px 0px 0;
            box-sizing: border-box;
            border-radius: 20px;
            width: 380px;
            height: 380px;
            transition: all 2s ease; /* 加入过渡效果 */            
            font-size: 32px;
            display: flex;
            
            > div {
                text-align: center;
                margin: 0 auto;
                width: 380px;
            }
            &.full-width {
                width: 100%; /* 宽度撑满 */
            }
            .detail {
                flex-grow: 1;
                .content {
                    font-size: 42px;
                    width: 70%;
                    padding: 0 15%;
                    animation: showcontent 1s ease-out forwards;
                }
            }
        }

        .feature:nth-child(1) {
            transform: translateX(0px);
        }

        .feature:nth-child(2) {
            transform: translateX(540px);
        }

        .feature:nth-child(3) {
            transform: translateX(1080px);
        }

        .feature:nth-child(4) {
            transform: translateX(1620px);
        }

        .fade-feature-enter-active {
            transition: opacity 2s ease;
        }
        
        .fade-feature-leave-active {
            transition: opacity 0.5s ease;
        }

        .fade-feature-enter-from, .fade-feature-leave-to {
            opacity: 0;
        }

        .color {
          background: #3498db;
        }

        
        // .feature:hover {
        //   animation: zoomIn 1s ease-out forwards;
        // }
    }
  }

  .Infrastructure-container {
    height: 1400px;
    position: relative;
    
    .Infrastructure {
        position: absolute;
        right: 0;
        top: 0;
        width: 70%;
        background: #1a3a5f;
        color: #fff;
        height: 1400px;
        
        .title {
            font-size: 98px;
            // margin-bottom: 200px;
        }

        .item {
            width: 700px;
            height: 250px;
            position: relative;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            text-align: center;
            
            transition: background-color 0.3s;
            cursor: pointer;
            margin: 0 auto;
            .content-title {
                position: absolute;
                left: 0;
                top: 0;
                font-size: 48px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                .text {
                    width: 450px;
                    height: 250px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                }
            }
            .content-detail {
                position: absolute;
                left: 0;
                top: 0;
                font-size: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 250px;
            }
        }

        .fade-enter-active, .fade-leave-active {
            transition: opacity 0.5s;
        }

        .fade-enter-from, .fade-leave-to {
            opacity: 0;
        }
        .image {
            position: absolute;
            left: -700px;
            top: 200px;
            z-index: 9;
            img {
                width: 1000px;
                height: 1000px;
            }
        }
    }
  }
  
  
  </style>
  