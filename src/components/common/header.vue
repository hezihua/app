<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
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
    <section class="section header" ref="zoomBackground">
      <div class="logo">InfiniCapital</div>
      <div class="menus">
        <div class="item">
          <div>About us</div>
        </div>
        <div class="item">
          <div>Investment approach </div>
        </div>
        <div class="item">

          <div>Career</div>
          
        </div>
        <div class="item">
          <div>Contact us</div>
          
        </div>
      </div>
    </section>

  
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  color: #fff;
}

.header {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 200px;
    align-items: center;
    .logo {
        font-size: 58px;
        margin-left: 150px;
    }
    .menus {
        display: flex;
        font-size: 46px;
        margin-right: 100px;
        align-items: center;
        .item {
            color: #fff;
            margin: 0 50px;
        }
    }
    
}



</style>
