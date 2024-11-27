<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素





</script>
<template>
    <div class="container">
        <Header />
        <div class="about-boxes" ref="zoomBackground"  :style="{ height: '75vw' }">
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
        .title {
            font-size: 72rem;
            font-family: var(--main-font);
            width:65%;
            margin: 20% 10% 3%;
        }
    }
  }
  
  
  </style>
  