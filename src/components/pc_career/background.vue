<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 200)
});




</script>
<template>
    <div class="container">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: '75vw' }">
            <Transition name="fade">

                <div class="title" v-if="show">
                    <div>Careers</div>
                </div>
            </Transition>
            
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translate(-100vw);
}
  .container {
    color: #fff;
    position: relative;
    .about-boxes {
        background-image: url('../../assets/career.jpg'); /* 背景图路径 */
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        .title {
            font-size: 72rem;
            font-family: var(--main-font);
            width:65%;
            margin: 400rem 10% 0;
        }
    }
  }
  
  
  </style>
  