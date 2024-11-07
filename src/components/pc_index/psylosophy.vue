<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Story from './story.vue'
import Evolution from './evolution.vue'
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
const show = ref(false); 
const showtimeline = ref(false);
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
});

// 组件销毁时移除事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeight);
});


</script>

<template>
    <!-- Philosophy & Values Section -->
    <section class="section philosophy" ref="zoomBackground" :style="{ height: calculatedHeight  * 0.5+ 'px' }">
      <div class="title">Philosophy & Values</div>
      <div class="icons">
        <div class="icon">
          <img src="../../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Discipline</div>
        </div>
        <div class="icon">
          <img src="../../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Entrepreneurial </div>
          <div>Spirit</div>
        </div>
        <div class="icon">
          <img src="../../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Adaptability</div>
          
        </div>
        <div class="icon">
          <img src="../../assets/ic_website_layout_v1B-27.png" alt="">
          <div>Respect</div>
          
        </div>
      </div>
    </section>

  
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  color: #fff;
}

.philosophy {
  background-color: #ffffff;
  color: #1a3a5f;
  .title {
    font-size: 80px;
    display: flex;
    justify-content: center;
    margin: 5% 0 3%;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    .icon {

      height: 400px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // flex-wrap: wrap;
      font-size: 46px;
      width: 220px;
      img {
        width: 220px;
      }
      > div {
        display: flex;
        justify-content: center;
      }
    }
  }
}


</style>
