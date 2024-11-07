<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const zoomBackground = ref(null); // 用于引用 <div> 元素
const calculatedHeight = ref(0); // 动态高度
const isSecondContentVisible = ref(false)
const currentIndex = ref(null)
const leaders = ref([
  {
    name: 'Tony Chin',
    duty: ['Chief Executive Officer and', 'Chief Investment Officer']
  },
  {
    name: 'U-Lipp Tong',
    duty: ['Director of Risk - FICC']
  },
  {
    name: 'Alex Ng',
    duty: ['Director of Risk - Equity']
  },

])
const show = ref(false); 
const showtimeline = ref(false);
// 动态计算高度
const calculateHeight = () => {
  if (zoomBackground.value) {
    const width = zoomBackground.value.clientWidth;
    calculatedHeight.value = width * 0.5625; // 例如，高度为宽度的 60%
  }
};

const toggleContent = (index = 0)=> {
  isSecondContentVisible.value = !isSecondContentVisible.value;
  currentIndex.value = index
  
}




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
  <div class="transition-container">
    <div class="content" :class="{ active: isSecondContentVisible }">
      <div class="text" v-if="!isSecondContentVisible">
        <div>Risk</div>
        <div>Committee</div>
      </div>
      <div class="first-content">
        
        <div class="leader-card" @click="toggleContent(0)" v-if="!(isSecondContentVisible && currentIndex !== 0)">
            <div class="name">
              Tony Chin
            </div>
            <div class="duty" >Chief Executive Officer and</div>
            <div class="duty" >Chief Investment Officer</div>
        </div>
        <div class="leader-card"  @click="toggleContent(1)" v-if="!(isSecondContentVisible && currentIndex !== 1)">
            <div class="name">
              U-Lipp Tong
            </div>
            <div class="duty" >Director of Risk - FICC</div>

        </div>
        <div class="leader-card"  @click="toggleContent(2)" v-if="!(isSecondContentVisible && currentIndex !== 2)">
            <div class="name">
              Alex Ng
            </div>
            <div class="duty" >Director of Risk - Equity</div>

        </div>

      </div>

      <div class="second-content">
        <!-- 第二张图片的内容 -->
        <h2>Tony Chin</h2>
        <p>Chief Executive Officer and Chief Investment Officer</p>
        <p>Tony Chin 是 Infin Capital 的创始人、CEO 和 CIO，也是公司投资委员会的主席。...</p>
      </div>
    </div>
    
    <button @click="toggleContent">切换内容</button>
  </div>
</template>


<style scoped lang="scss">
.transition-container {
  position: relative;
  width: 100%;
  height: 1000px;
  /* max-width: 600px; */
  margin: auto;
  .first-content {
    transform: translateX(0);
    width: 75%;
    display: flex;
    background-color: #0a3a5e;
    // justify-content: ;
    flex-wrap: wrap;
    padding-left: 20%;
    .leader-card {
      padding: 100px 0 0;
      box-sizing: border-box;
      width: 40%;
      height: 400px;
      .name {
        font-size: 58px;
        width: 100%;
      }
      .duty {
        width: 100%;
        font-size: 32px;
      }
    }
    
  }
  .second-content {
    background-color: #3498db;
    transform: translateX(100%); /* 初始位置在屏幕右侧外 */
    
  }

  /* 切换到第二张内容 */
  .content.active .first-content {
    transform: translateX(-30%); /* 第一个内容向左移出屏幕 */
    padding-left: 6%;
  }

  .content.active .second-content {
    transform: translateX(0); /* 第二个内容移入屏幕 */
  }
}

.content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 58px;
  .text {
    margin: 700px 0 0 10%;
    color: #0a3a5e;
    font-weight: 700;
  }
  
  /* 初始状态 */
  
}

.first-content, .second-content {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  // padding: 20px;
  box-sizing: border-box;
  // background-color: #0a3a5e; /* 设置背景颜色 */
  color: white;
  transition: transform 1s ease;
  clip-path: polygon(0% 0, 100% 0, 100% 100%, 20% 100%); /* 定义多边形的剪裁路径 */
}





button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
