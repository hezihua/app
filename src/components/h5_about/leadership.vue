<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const leadershipcontent = ref(null); // 用于引用 <div> 元素
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
        leadershipcontent.value.classList.add('active'); // 添加类来触发动画
        isEnd.value = true
      }
      
    } else {
      // 模块离开可视化区域
      // backgroundStyle.value.transform = 'scale(1.0)';
      // leadershipcontent.value.classList.remove('active'); // 移除类来停止动画
    }
  });
}, { threshold: [0, 1] });

onMounted(()=> {
    const moduleElement = document.querySelector('#leadershipcontent');
    observer.observe(moduleElement);
})

</script>

<template>
    <div class="leadership" id="leadership">
        <div id="leadershipcontent" ref="leadershipcontent">

            <div class="title">Leadership</div>
            <!-- <div class="sub-title">Expertise leads to success</div> -->
            <div class="text">Infini Capital is led by a seasoned team of industry </div>
            <div class="text">experts with complementary skills. Emphasizing </div>
            <div class="text">collaboration, entrepreneurship, and agility, they develop the overarching</div>
            <div class="text">investment strategy and supporting infrastructure.</div>
        </div>
      
    </div>
  </template>
  
  <style scoped lang="scss">
#leadershipcontent.active {
  animation: zoomIn 1s ease-out forwards; /* 应用放大动画 */
}
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
  .leadership {
    
    color: #fff;
    position: relative;
    height: 100vh;
    position: sticky;
    overflow: hidden;
    top: 0;
    background-image: url('../../assets/leader.jpg'); /* 背景图路径 */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10vw;
    box-sizing: border-box;
    #leadershipcontent {
        padding: 15vh 0;
        
    }
    .title {
        font-size: 30rem;
        margin-bottom: 10vh;
        font-family: var(--main-font);

    }
    .sub-title {
        font-size: 22rem;
        margin: 30rem 0;
    }
    .text {
        font-size: 15rem;
    }
   
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  