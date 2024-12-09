<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const leftcontent = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEnd.value) {
        leftcontent.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // leftcontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

onMounted(()=> {
  const moduleElement = document.querySelector('#leftcontent');
  observer.observe(moduleElement);
})


</script>

<template>
    <div class="leadership" id="leadership">
        <div class="left">
          <div class="leftcontent" id="leftcontent" ref="leftcontent">

            <div class="title">
                <div>Continual Diversification</div>
                <div>and Focus on</div>
                <div>Quality of Returns</div>
            </div>
            
            <div class="text">We understand there is no “one-size-fits-all” strategy. As the market inevitably changes, so does our firm, constantly adapting and  improving. We harness the mathematical power of diversification while vertically spanning across lowly-correlated, high-Sharpe strategies. Put simply, we don’t compromise on quality of returns and seek to generate alpha regardless of the market environment. </div>
          </div>
        </div>
        <div class="right">
          <div class="right-content">

            <div class="item">Fundamental</div>
            <div class="border"></div>
            <div class="item">Tactical Trading</div>
            <div class="border"></div>
            <div class="item">Discretionary Macro</div>
            <div class="border"></div>
            <div class="item">Quantitative Strategies</div>
          </div>
        </div>
      
    </div>
  </template>
  
  <style scoped lang="scss">

/* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
}

.leftcontent.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}
  .leadership {
    background-color: #093254;
    color: white;
    // text-align: center;
    display: flex;
    justify-content: space-between;
    height: 1400rem;
    padding: 0 10%;
    .left {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding: 0 0 0 10%;
        .leftcontent {
          .title {
            font-size: 62rem;
            margin: 0 0 180rem;
            font-family: var(--main-font);
          }
          .text {
            font-size: 26rem;
            width: 80%;
            // margin: 0 auto;
          }
        }
        
        
    }
    .right{
        width: 30%;
        // height: 1000rem;
        padding: 0 0;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item {
            font-size: 48rem;
            width: 450rem;
            text-align: center;
        }
        .border {
            height: 80rem;
            width: 450rem;
            border-left: 1rem solid #fff;
            transform: translateX(225rem);
            margin: 40rem 0;

        }
    }
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  