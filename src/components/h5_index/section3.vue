<!-- Section1.vue -->
<template>
    <div class="section section3">
      <div class="content">Section 3 Content</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Section1',
  };
  </script>
  
  <style scoped>
  .section {
    height: 120vh;
    position: sticky;
    overflow: hidden;
    border-radius: 20rem 20rem 0 0;
    position: sticky;
    top: -20vh;
  }
  
  .content {
    width: 100vw;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20rem;
    color: white;
    background-color: #4a90e2;
    z-index: 3;
    will-change: position;
    /* 使用 transform 控制内容动画 */
    transition: transform 0.5s ease;
    
  }
  
  /* 模拟后一个 section 的内容逐步覆盖当前 section */
  .section + .section .content {
    position: sticky;
    top: 0;
    height: 120vh;
    background-color: red;
    z-index: 4;
  }
  </style>
  