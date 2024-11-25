<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/h5_header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素

const show = ref(false); 


// 组件挂载后计算一次高度
onMounted(() => {

  setTimeout(()=> {
    show.value = true
  }, 2000)
});

// 组件销毁时移除事件监听器
onUnmounted(() => {

});


</script>
<template>
    <div class="container">
      <Header />
        <div class="about-boxes" ref="zoomBackground">
            <div class="title">
                <div>Career</div>
            </div>
            
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
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
        height: 60vh;
        .article {
            margin-bottom: 50rem;
        }
        .title {
            font-size: 30rem;
            font-family: var(--main-font);
            width:65%;
            margin: 20vh 10% 3%;
        }
        .text {
            font-size: 36rem;
            width: 65%;
            margin: 0% 10%;
        }
    }
  }
  
  
  </style>
  