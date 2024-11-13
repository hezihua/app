<!-- Section1.vue -->
<template>
    <div class="section">
      <div class="content">Section 5 Content</div>
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
    color: purple;
    background-color: #4a90e2;
    z-index: 5;
    /* 使用 transform 控制内容动画 */
    transition: transform 0.5s ease;
  }

  </style>
  