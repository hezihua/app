<template>
    <section class="section story story-background" ref="zoomBackground">
      <div id="storycontent" class="content">
        <!-- 内容 -->
        <div class="title">Our Story</div>
        <p class="text">Infini Capital started as a proprietary trading house...</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Section1',
  };
  </script>
  
  <style scoped lang="scss">
  .section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    border-radius: 20rem 20rem 0 0;
  }
  
  .story {
    .content {
      width: 100vw;
      height: 120vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: url('../../assets/story.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      color: #fff;
      position: relative;
      transition: transform 0.3s ease;
      z-index: 2;
    }
  
    .title {
      font-size: 30rem;
      width: 80vw;
      margin: 20vh 0% 8vh;
    }
  
    .text {
      font-size: 15rem;
      width: 80vw;
      margin: 4vh 0%;
    }
  }
  </style>
  