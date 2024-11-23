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


const showDetails = (index) => {
  isHovering.value[index] = true;
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
          <div class="icon-container">
            <transition name="fade">
              <div v-if="isHovering[0]" class="content-detail" @click="hideDetails(0)">
                A strong risk culture is embedded in our proprietary DNA. Our mission is clear: to safeguard and grow our investors' capital
              </div>
            </transition>
            <transition name="fade">
              <div class="icon" v-if="!isHovering[0]" @click="showDetails(0)">
                <img src="../../assets/ic_website_layout_v1B-20.png" alt="">
                <div>Discipline</div>
              </div>
            </transition>
          </div>
        
          <div class="icon-container">
            <transition name="fade">
               <div v-if="isHovering[1]" class="content-detail" @click="hideDetails(1)">
                
                We acknowledge that there is always potential for improvement. We are in a state of continuous evolution, aiming for excellence in everything we do
              </div>
            </transition>
            <transition name="fade">
              <div class="icon" v-if="!isHovering[1]" @click="showDetails(1)">
                <img src="../../assets/ic_website_layout_v1B-21.png" alt="">
                <div>Entrepreneurial</div>
                <div> Spirit</div>
              </div>
            </transition>
          </div>
        
        
          <div class="icon-container">
            <transition name="fade">
              <div v-if="isHovering[2]" class="content-detail" @click="hideDetails(2)">
                The market is anything but static. We embrace this challenge with perseverance and flexibility
              </div>
            </transition>
            <transition name="fade">
              <div class="icon" v-if="!isHovering[2]" @click="showDetails(2)">
                <img src="../../assets/ic_website_layout_v1B-22.png" alt="">
                <div>Adaptability</div>
                
              </div>
            </transition>
          </div>
        
        
          <div class="icon-container">
            <transition name="fade">
              <div v-if="isHovering[3]" class="content-detail" @click="hideDetails(3)">
                We hold transparency and collaboration in high esteem, convinced that open dialogue and a supportive culture foster the most robust investment ideas
              </div>
            </transition>
            <transition name="fade">
              <div class="icon" v-if="!isHovering[3]" @click="showDetails(3)">
                <img src="../../assets/ic_website_layout_v1B-23.png" alt="">
                <div>Respect</div>
                
              </div>
            </transition>
          </div>
        
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
  .title {
    font-size: 62rem;
    font-family: var(--main-font);
    display: flex;
    justify-content: center;
    margin: 5% 0;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin-top: 20rem;
    overflow: hidden;
    .icon-container {
      position: relative;
      height: 320rem;
      width: 260rem;
      // padding: 20rem;
      cursor: pointer;
    }
    .content-detail {
      
      // position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22rem;
      height: 320rem;
      // background:  rgb(26, 58, 95, .5);
    }
    .icon {
      // position: absolute;
      font-size: 36rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 160rem;
        margin: 0 auto;
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
