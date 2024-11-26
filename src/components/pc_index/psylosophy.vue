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

// 使用数组来存储每个块的悬停状态
const isHovering = ref([false, false, false, false]);


const triggerDetails = (index) => {
  if (isHovering[index]) {
    isHovering.value[index] = false;
  } else {
    let result = [];
    [1,2,3,4].forEach((item, i) => {
      if (i === index) {
          result.push(true)
      } else {
        result.push(false)
      }
    })
    isHovering.value = result
  }
 
  
};

const hideDetails = (index) => {
  isHovering.value[index] = false;
};


</script>

<template>
    <!-- Philosophy & Values Section -->
    <section class="section philosophy" ref="zoomBackground">
      <div class="title">Philosophy & Values</div>
      <div class="icons">
        <transition name="fade">
          <div class="icon-container" @click="triggerDetails(0)">
            <div class="icon">
              <img src="../../assets/ic_website_layout_v1B-20.png" alt="">
              <div>Discipline</div>
            </div>
            <div v-if="isHovering[0]" class="content-detail">
              A strong risk culture is embedded in our proprietary DNA. Our mission is clear: to safeguard and grow our investors' capital
            </div>
            <div class="add"> + </div>
          </div>
        </transition>
        
        <transition name="fade">
          <div class="icon-container" @click="triggerDetails(1)">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-21.png" alt="">
              <div>Entrepreneurial</div>
              <div> Spirit</div>
            </div>
            <div v-if="isHovering[1]" class="content-detail">
              
              We acknowledge that there is always potential for improvement. We are in a state of continuous evolution, aiming for excellence in everything we do
            </div>
            <div class="add"> + </div>
          </div>
        </transition>
        
        
        <transition name="fade">
          <div class="icon-container" @click="triggerDetails(2)">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-22.png" alt="">
              <div>Adaptability</div>
              
            </div>
            <div v-if="isHovering[2]" class="content-detail" >
              The market is anything but static. We embrace this challenge with perseverance and flexibility
            </div>
            <div class="add"> + </div>
          </div>
        </transition>
        
        
        <transition name="fade" >
          <div class="icon-container" @click="triggerDetails(3)">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-23.png" alt="">
              <div>Respect</div>
              
            </div>
            <div v-if="isHovering[3]" class="content-detail">
              We hold transparency and collaboration in high esteem, convinced that open dialogue and a supportive culture foster the most robust investment ideas
            </div>
            <div class="add"> + </div>
          </div>
        </transition>
        
      </div>
    </section>

  
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.philosophy {
  background-color: #ffffff;
  color: #093254;
  padding: 0 0 100rem 0;
  .title {
    font-size: 72rem;
    font-family: var(--main-font);
    display: flex;
    justify-content: center;
    margin: 5% 0;
    color: #093254;
  }
  .icons {
    display: flex;
    // width: 80%;
    justify-content: center;
    margin: 20rem auto;
    overflow: hidden;
    .icon-container {
      position: relative;
      // width: 260rem;
      // padding: 20rem;
      margin: 0 40rem;
      cursor: pointer;
      color: #fff;
      height: 360rem;
      background: #093254;
      border-radius: 20rem;
      display: flex;
      align-items: center;
    }
    .add {
      position: absolute;
      top: 10rem;
      right: 20rem;
      color: #fff;
      font-size: 38rem;
    }
    .content-detail {
      
      // position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rem;
      height: 320rem;
      width: 340rem;
      padding: 0 20rem 0 0;

      // background:  rgb(26, 58, 95, .5);
    }
    .icon {
      // position: absolute;
      width: 260rem;
      font-size: 36rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      
      img {
        width: 160rem;
        margin: 0 auto 30rem;
        // margin-left: 60rem;
      }
      > div {
        display: flex;
        justify-content: center;
        width: 260rem;
      }
    }
  }
}


</style>
