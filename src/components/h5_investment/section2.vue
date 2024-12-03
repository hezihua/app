<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const content = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      console.log(isEnd.value)
      if(!isEnd.value) {
        console.log(isEnd.value, 'isEnd')
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
                <div>Continual Diversification</div>
                <div>and Focus on</div>
                <div>Quality of Returns</div>
            </div>
            
            <div class="text">We understand there is no “one-size-fits-all” strategy. As the market inevitably changes, so does our firm, constantly adapting and  improving. We harness the mathematical power of diversification while vertically spanning across lowly-correlated, high-Sharpe strategies. Put simply, we don’t compromise on quality of returns and seek to generate alpha regardless of the market environment. </div>
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
    border-radius: 20rem 20rem 0 0;
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
  