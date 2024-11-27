<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素






</script>
<template>
    <div class="container">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: '38vw' }">
            <div class="title">
                <div>Investment</div>
                <div>Approach</div>
            </div>
            
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .container {
    // background-color: #e0e8f0;
    // text-align: center;
    color: #fff;
    position: relative;
    .about-boxes {
        background-image: url('../../assets/Investment_Approach.jpg'); /* 背景图路径 */
        background-size: 102% 102%;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        display: flex;
        align-items: center;
        .title {
            font-size: 72rem;
            font-family: var(--main-font);
            width:65%;
            margin: 0% 10%;
        }
    }
  }
  
  
  </style>
  