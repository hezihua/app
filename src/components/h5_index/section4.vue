<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 
const showtimeline = ref(false);
const showcontent = ref(false)






// 使用数组来存储每个块的悬停状态
const isHovering = ref([false, false, false, false]);


const triggerDetails = (index) => {
  showcontent.value = false
  if (isHovering.value[index]) {
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
    setTimeout(() => {
      showcontent.value = true
    }, 100);
    isHovering.value = result
  }
 
  
};

const handleMouseEnter = (index) => {
  console.log('kkkk')
  showcontent.value = false
  let result = [];
  [1,2,3,4].forEach((item, i) => {
    if (i === index) {
        result.push(true)
    } else {
      result.push(false)
    }
  })
  setTimeout(() => {
    showcontent.value = true
  }, 500);
  isHovering.value = result
}
const handleMouseLeave = (index) => {
  showcontent.value = false
  isHovering.value[index] = false;
}


</script>

<template>
    <!-- Philosophy & Values Section -->
    <section class="section philosophy" ref="zoomBackground">
      <div class="title">Philosophy & Values</div>
      <div class="icons">
        <transition name="fade">
          <div class="icon-container" 
          @click="triggerDetails(0)"
          :class="{ 'full-width': isHovering[0] }">
            <div class="icon">
              <img src="../../assets/ic_website_layout_v1B-20.png" alt="">
              <div class="text">Discipline</div>
            </div>
            <div v-if="isHovering[0] && showcontent" class="content-detail">
              A strong risk culture is embedded in our proprietary DNA. Our mission is clear: to safeguard and grow our investors' capital
            </div>
            <div class="add" :class="{ 'active': isHovering[0] }"> + </div>
          </div>
        </transition>
        
        <transition name="fade">
          <div class="icon-container" 
          @click="triggerDetails(1)"
          :class="{ 'full-width': isHovering[1] }">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-21.png" alt="">
              <div  class="text">Entrepreneurial Spirit</div>
            </div>
            <div v-if="isHovering[1] && showcontent" class="content-detail">
              
              We acknowledge that there is always potential for improvement. We are in a state of continuous evolution, aiming for excellence in everything we do
            </div>
            <div class="add"  :class="{ 'active': isHovering[1] }"> + </div>
          </div>
        </transition>
        
        
        <transition name="fade">
          <div class="icon-container" 
          @click="triggerDetails(2)"
          :class="{ 'full-width': isHovering[2] }">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-22.png" alt="">
              <div  class="text">Adaptability</div>
              
            </div>
            <div v-if="isHovering[2] && showcontent" class="content-detail" >
              The market is anything but static. We embrace this challenge with perseverance and flexibility
            </div>
            <div class="add"  :class="{ 'active': isHovering[2] }"> + </div>
          </div>
        </transition>
        
        
        <transition name="fade" >
          <div class="icon-container" 
          
          @click="triggerDetails(3)"
          :class="{ 'full-width': isHovering[3] }">
            <div class="icon" >
              <img src="../../assets/ic_website_layout_v1B-23.png" alt="">
              <div  class="text">Respect</div>
              
            </div>
            <div v-if="isHovering[3] && showcontent" class="content-detail">
              We hold transparency and collaboration in high esteem, convinced that open dialogue and a supportive culture foster the most robust investment ideas
            </div>
            <div class="add"  :class="{ 'active': isHovering[3] }"> + </div>
          </div>
        </transition>
        
      </div>
    </section>

  
</template>

<style scoped lang="scss">
.section {
  padding: 0 10vw 10vh;
  width: 100%;
  box-sizing: border-box;
  position: sticky;
  overflow: hidden;
  top: -30vh;
  background-color: #ffffff;
  color: #093254;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

    /* 定义动画 */
@keyframes showcontent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.philosophy {
  .title {
    font-size: 34rem;
    font-family: var(--main-font);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 15vh;
    color: #093254;
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .icon-container {
      position: relative;
      width: 80vw;
      // padding: 20rem;
      cursor: pointer;
      color: #fff;
      height: 20vh;
      background: #093254;
      border-radius: 5rem;
      // display: flex;
      // align-items: flex-start;
      margin-bottom: 2vh;
      transition: all .5s ease; /* 加入过渡效果 */    
      &.full-width {
          height: 40vh; /* 宽度撑满 */
      }
    }
    .add {
      position: absolute;
      top: 10rem;
      right: 20rem;
      color: #fff;
      font-size: 38rem;
      transform: rotate(0deg);
      transition: all .5s ease; /* 加入过渡效果 */    
      &.active {
          transform: rotate(45deg); /* 宽度撑满 */
      }
    }
    .content-detail {
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12rem;
      height: 20vh;
      width: 80vw;
      padding: 0 10vw;
      box-sizing: border-box;
      animation: showcontent .5s ease-out forwards;
    }
    .icon {
      width: 80vw;
      font-size: 15rem;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      
      img {
        height: 20vw;
        margin: 2vh auto 10rem;
      }
      .text {
        display: flex;
        justify-content: center;
        width: 100%;
      }
    }
  }
}


</style>
