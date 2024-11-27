<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';


</script>

<template>
    <div class="leadership" id="leadership">
        <div class="left">
            <div class="title">Leadership</div>
            <div class="sub-title">Expertise leads to success</div>
            <div class="text">Infini Capital is led by a seasoned and mutually complementary team </div>
            <div class="text">of industry experts. With a strong emphasis on collaboration, </div>
            <div class="text">entrepreneurship and agility, they develop the overarching </div>
            <div class="text">investment strategy and supporting infrastructure.</div>
        </div>
        <div class="right">
            <img src="../../assets/leader.jpg" alt="">
        </div>
      
    </div>
  </template>
  
  <style scoped lang="scss">
  .leadership {
    background-color: #0a3a5e;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
    height: 1000rem;
    .left {
        width: 50%;
        .title {
            font-size: 72rem;
            font-family: var(--main-font);
            margin-top: 280rem;

        }
        .sub-title {
            font-size: 48rem;
            margin: 30rem 0;
        }
        .text {
            font-size: 26rem;
        }
    }
    .right{
        width: 50%;
        height: 1000rem;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            // object-fit: cover;
            object-fit: cover; /* 保持图片比例并填满容器 */
            object-position: right; /* 将图片的中心位置显示在容器中央 */
        }
    }
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  