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


</script>

<template>
    <div class="leadership" id="leadership">
        <div class="left">
            <div class="title">Leadership</div>
            <div class="sub-title">Expertise leads to success</div>
            <div class="text">Infini Capital is led by a seasoned and mutually complementary team </div>
            <div class="text">of industry experts. With a strong emphasis on collaboration, </div>
            <div class="text">entrepreneurship and agility, they develop the overarching </div>
            <div class="text">investment strategy and supporting infrastructure.</div>
        </div>
        <div class="right">
            <img src="../../assets/leader.jpg" alt="">
        </div>
      
    </div>
  </template>
  
  <style scoped lang="scss">
  .leadership {
    background-color: #0a3a5e;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
    height: 1000px;
    .left {
        width: 50%;
        .title {
            font-size: 78px;
            margin-top: 280px;

        }
        .sub-title {
            font-size: 48px;
            margin: 30px 0;
        }
        .text {
            font-size: 32px;
        }
    }
    .right{
        width: 50%;
        height: 1000px;
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
    margin-top: 20px;
  }
  </style>
  