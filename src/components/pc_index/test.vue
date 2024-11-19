<template>
    <div id="container">
      <div id="box">Scroll Animation</div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from "vue";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  
  // 注册 ScrollTrigger 插件
  gsap.registerPlugin(ScrollTrigger);
  
  onMounted(() => {
    // 创建动画时间轴
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#container", // 触发动画的容器
        start: "top 0%",      // 动画开始的位置
        end: "bottom 10%",  // 动画结束的位置
        scrub: true,           // 平滑滚动效果
        pin: true,             // 固定容器
      },
    });
  
    // 添加动画效果
    timeline
      .to("#box", { scale: 1.5 })         // 放大
      .to("#box", { rotation: 360 })     // 旋转
      .to("#box", { backgroundColor: "#ff0000" }); // 改变背景颜色
  });
  
  onUnmounted(() => {
    // 销毁 ScrollTrigger 实例，防止内存泄漏
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  });
  </script>
  
  <style scoped>
  /* 容器样式 */
  #container {
    height: 100vh; /* 让页面可以滚动 */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #f0f0f0;
    overflow: hidden;
  }
  
  /* 动画元素样式 */
  #box {
    width: 200px;
    height: 200px;
    background: #00aaff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border-radius: 10px;
    text-align: center;
  }
  </style>
  