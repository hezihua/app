<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';

const leadershipcontent = ref(null); // 用于引用 <div> 元素
const isEnd = ref(false)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 模块进入可视化区域
      // backgroundStyle.value.transform = 'scale(1.02)';
      if(!isEnd.value) {
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
        <div class="left">
            <div id="leadershipcontent" ref="leadershipcontent">

                <div class="title">Leadership</div>
                <div class="sub-title">Expertise leads to success</div>
                <div class="text">Infini Capital is led by a seasoned team of industry </div>
                <div class="text">experts with complementary skills. Emphasizing </div>
                <div class="text">collaboration, entrepreneurship, and agility, they develop the overarching </div>
                <div class="text">investment strategy and supporting infrastructure.</div>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/leader.jpg" alt="">
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
    background-color: #093254;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    height: 1000rem;
    #leadershipcontent {
        padding: 15vh 0;
        
    }
    .left {
        width: 50%;
        .title {
            font-size: 72rem;
            font-family: var(--main-font);

        }
        .sub-title {
            font-size: 48rem;
            margin: 30rem 0;
        }
        .text {
            font-size: 26rem;
        }
    }
    .right{
        width: 50%;
        height: 1000rem;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            // object-fit: cover;
            object-fit: cover; /* 保持图片比例并填满容器 */
            object-position: right; /* 将图片的中心位置显示在容器中央 */
        }
    }
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  