<!-- Section1.vue -->
<template>
    <div class="section section4">
      <div class="content">Section 4 Content</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Section1',
  };
  </script>
  
  <style scoped>
  .section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    border-radius: 20rem 20rem 0 0;
  }
  
  .content {
    width: 100vw;
    position: relative;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: white;
    background-color: #4a90e2;
    z-index: 4;
    /* 使用 transform 控制内容动画 */
    transition: transform 0.5s ease;
  }
  
  /* 模拟后一个 section 的内容逐步覆盖当前 section */
  .section + .section .content {
    position: relative;
    top: 0;
    height: 100vh;
    background-color: green;
    z-index: 5;
  }
  </style>
  