<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/h5_header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素

const show = ref(false); 


// 组件挂载后计算一次高度
onMounted(() => {

  setTimeout(()=> {
    show.value = true
  }, 200)
});

// 组件销毁时移除事件监听器
onUnmounted(() => {

});


</script>
<template>
    <div class="container">
      <Header />
        <div class="career" ref="zoomBackground">
          <Transition name="fade">

            <div class="title" v-if="show">
              <div>Career</div>
            </div>
          </Transition>
            
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
    .fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-100vw);
}
  .container {
    color: #fff;
    position: relative;
    
    .career {
        background-image: url('../../assets/career.jpg'); /* 背景图路径 */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        height: 100vh;
        .article {
            margin-bottom: 50rem;
        }
        .title {
            font-size: 30rem;
            font-family: var(--main-font);
            width:65%;
            margin: 35vh 10% 3%;
        }
        .text {
            font-size: 36rem;
            width: 65%;
            margin: 0% 10%;
        }
    }
  }
  
  
  </style>
  