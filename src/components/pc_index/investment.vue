<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
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


    <!-- Investment Section -->
    <section class="section investment investment-background" ref="zoomBackground" :style="{ height: calculatedHeight + 'px' }">
      <div class="content">
        <div class="title">
          <div>Investment in and </div>
          <div>Empowerment of</div>
          <div>Excellent People</div>
        </div>
        <p class="text">People are the lifeblood of our business. We take pride in having cultivated an organization that is a magnet for exceptional talent.</p>
        <p class="text">At Infini Capital, our people are given an opportunity to be impactful in a highly human-centric, highly self-driven environment. We believe in providing our talent with the opportunity to thrive, which in turn leads to our investments prospering.</p>
        <div class="buttonbox">
          <div class="button">Meet the Team  +</div>
          <div class="button">Join Us  +</div>
        </div>
        
      </div>
    </section>
</template>

<style scoped lang="scss">

.section {
  width: 100%;

  color: #fff;
  
  
}

.investment-background {
  width: 100%;
  background-image: url('../../assets/ExcellentPeople.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}


.story, .evolution, .investment {
  background-color: #1a3a5f; /* 根据设计图调整颜色 */
}





.investment {
  
  
  .content {
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 60%;
    
    background: #1a3a5f;
    // width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    overflow: hidden;
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 58px;
      width:45%;
      margin: 25% 15% 3%;
    }
    .text {
      font-size: 22;
      width: 45%;
      margin: 1% 15%;
    }
    .buttonbox {
      display: flex;
      // justify-content: center;
      margin: 200px 0 0 15%;
      .button {
        width: 350px;
        height: 80px;
        color: #1a3a5f;
        background: #fff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 40px;
        margin: 0 60px 0 0;
        cursor: pointer;
      }
    }
  }
}




</style>
