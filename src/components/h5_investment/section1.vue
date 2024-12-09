<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    console.log('llll')
    show.value = true
  }, 200)
});





</script>
<template>
    <div class="section">
        <div class="boxes" ref="zoomBackground" >
            <Transition name="fade">

                <div class="title" v-if="show">
                    <div>Investment</div>
                    <div>Approach</div>
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
  transform: translate(-100vw);
}
  .section {
    // background-color: #e0e8f0;
    // text-align: center;
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0;
    color: #fff;
    .boxes {
        background-image: url('../../assets/Investment_Approach.jpg'); /* 背景图路径 */
        background-size: 100% 100%;
        background-position: center;
        transform-origin: center;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
        display: flex;
        align-items: center;
        width: 100vw;
        height: 100vh;
        .title {
            font-size: 30rem;
            font-family: var(--main-font);
            width:65%;
            margin: 0% 10%;
            // transform: translate(-100vw);
        }
    }
  }
  
  
  </style>
  