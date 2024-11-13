<!-- Section1.vue -->
<template>
    <!-- <div class="section">
      <div class="content">Section 2 Content</div>
    </div> -->
    <section class="section story story-background" ref="zoomBackground">
        <div id="storycontent" class="content">
            <!-- section 2 -->
          <div class="title">Our Story</div>
          <p class="text">Infini Capital started as a proprietary trading house and organically evolved into an alternative investment manager. We prioritize capital preservation and high-quality returns as core to our investment and operation.</p>
          <p class="text">Over the years, we have captured uncorrelated and attractive return streams, by implementing this principle and by empowering extraordinary talents to pursue their best ideas.</p>
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
    position: sticky;
    overflow: hidden;
    border-radius: 20rem 20rem 0 0;
  }
  
  
  /* 模拟后一个 section 的内容逐步覆盖当前 section */
  .section + .section .content {
    // position: sticky;
    top: 0;
    // height: 100vh;
    z-index: 3;
  }

.story {
  
  position: sticky;
  top: 0;
  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-image: url('../../assets/story.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 2;
    color: #fff;
    // will-change: position;
    /* 使用 transform 控制内容动画 */
    // transition: transform 0.5s ease;
    // transition: position 1s ease;
    // clip-path: polygon(0 0, 60% 0, 100% 100%, 0 100%); /* 定义多边形的剪裁路径 */
    .title {
      font-size: 30rem;
      width:80vw;
      margin: 20vh 0% 8vh;
    }
    .text {
      font-size: 15rem;
      width: 80vw;
      margin: 4vh 0%;
    }
  }
}
  </style>
  