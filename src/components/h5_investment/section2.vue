<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const content = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEnd.value) {
        content.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // content.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

onMounted(()=> {
  const moduleElement = document.querySelector('#content');
  observer.observe(moduleElement);
})


</script>

<template>
    <div class="leadership" id="leadership">

          <div class="content" id="content" ref="content">

            <div class="title">
                <div>Innovative Portfolio Allocation</div>
                <div>with a Focus</div>
                <div>on Quality Returns</div>
            </div>
            <div class="text">At Infini Capital, we recognize that no single strategy fits all market environments. By embracing diversification and leveraging high-Sharpe strategies, we prioritize delivering consistent, high-quality returns while generating alpha in any market environment. </div>
            <div class="timeline">

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

.content.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}
  .leadership {
    background-color: #093254;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
    height: 160vh;
    position: sticky;
    overflow: hidden;
    top: -60vh;
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 30rem;
        margin: 0 0 6vh;
        font-family: var(--main-font);
      }
      .text {
        font-size: 15rem;
        width: 80%;
        // margin: 0 auto;
      }
      .timeline{
        // width: 30%;
        height: 60vh;
        padding: 10vh 0 0;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .item {
            font-size: 20rem;
            width: 100vw;
            text-align: center;
        }
        .border {
            height: 10vh;
            width: 100vw;
            border-left: 1rem solid #fff;
            transform: translateX(50vw);
            margin: 4vh 0;

        }
      }
    }
    
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  