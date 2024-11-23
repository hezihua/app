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
        font-size: 68rem;
        font-family: var(--main-font);
        text-align: center;
        width: 800rem;
        margin: 200rem auto 60rem;
    }
    .introduce {
        font-size: 32rem;
        color: #234c68;
        margin: 0rem 0 100rem;
        text-align: center;
    }
    .features {
        display: flex;
        justify-content: center;
        width: 1410rem;
        margin: 0 auto;
        padding: 0 0 80rem;
        position: relative;
        height: 300rem;
        .feature {
            position: absolute;
            left: 0;
            top: 0;
            background-color: #093254;
            color: white;
            padding: 80rem 0rem 0;
            box-sizing: border-box;
            border-radius: 20rem;
            width: 300rem;
            height: 300rem;
            transition: all 2s ease; /* 加入过渡效果 */            
            font-size: 32rem;
            display: flex;
            cursor: pointer;
            
            > div {
                text-align: center;
                margin: 0 auto;
                width: 300rem;
            }
            &.full-width {
                width: 100%; /* 宽度撑满 */
            }
            .detail {
                flex-grow: 1;
                .content {
                    font-size: 32rem;
                    width: 70%;
                    padding: 0 15%;
                    animation: showcontent 1s ease-out forwards;
                }
            }
        }

        .feature:nth-child(1) {
            transform: translateX(0rem);
        }

        .feature:nth-child(2) {
            transform: translateX(370rem);
        }

        .feature:nth-child(3) {
            transform: translateX(740rem);
        }

        .feature:nth-child(4) {
            transform: translateX(1110rem);
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
          background: #234c68;
        }

        
        // .feature:hover {
        //   animation: zoomIn 1s ease-out forwards;
        // }
    }
  }

  .Infrastructure-container {
    height: 1400rem;
    position: relative;
    
    .Infrastructure {
        position: absolute;
        right: 0;
        top: 0;
        width: 70%;
        background: #093254;
        color: #fff;
        height: 1400rem;
        
        .title {
            font-size: 62rem;
            font-family: var(--main-font);
            // margin-bottom: 200rem;
        }

        .item {
            width: 700rem;
            height: 250rem;
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
                font-size: 42rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                .text {
                    width: 450rem;
                    height: 250rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                }
            }
            .content-detail {
                position: absolute;
                left: 0;
                top: 0;
                font-size: 26rem;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 250rem;
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
            left: -700rem;
            top: 200rem;
            z-index: 9;
            img {
                width: 1000rem;
                height: 1000rem;
            }
        }
    }
  }
  
  
  </style>
  