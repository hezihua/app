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
    <div class="container">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: calculatedHeight + 'px' }">
            <div class="title">
                <div>Career</div>
            </div>
            
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    color: #fff;
    position: relative;
    .about-boxes {
        background-image: url('../../assets/career.jpg'); /* 背景图路径 */
        background-size: 102% 102%;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        .article {
            margin-bottom: 50px;
        }
        .title {
            font-size: 78px;
            width:65%;
            margin: 20% 10% 3%;
        }
        .text {
            font-size: 36px;
            width: 65%;
            margin: 0% 10%;
        }
    }
  }
  
  
  </style>
  