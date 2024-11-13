<!-- Section1.vue -->
<template>
    <section class="section hero zoom-background" ref="zoomBackground" >
      <!-- <Header /> -->
      <Transition name="fade">

        <div class="content">
          <div class="textLeft">
            <div>A Pan-Asia</div>
            <div>Multi-Strategy </div>
            <div>Platform</div>
          </div>
          <div class="border"></div>
          <div class="textRight">
            <div>Relentless Pursuit</div> 
            <div>of Quality</div> 
            <div>Returns</div>
          </div>
        </div>
      </Transition>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Section1',
  };
  </script>
  
  <style scoped lang="scss">

@keyframes zoomIn {
  0% {
    transform: translate(0, 0) scale(1.1) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
}
  .section {
    height: 100vh;
    // position: relative;
    overflow: hidden;
  }

  .zoom-background {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.zoom-background::before {
    content: "";
    position: absolute;
    // top: 50vh;
    // left: 50vw;
    width: 100vw; /* 放大一点以防旋转时背景漏出 */
    height: 100vh;
    background-image: url('../../assets/landing_earth.jpg'); /* 背景图路径 */
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: 20% 0;
    transform-origin: center;
    // transform: translate(-50vw, -50vh) rotate(0deg); /* 移动到中心，并设置旋转角度 */
    // animation: zoomIn 1s ease-out forwards; /* 设置动画持续时间 */
}

/* 顶部背景 */
.hero {
  position: sticky;
  top: 0;
  .content {
    position: absolute;
    width: 100vw;
    height: 100vh;  
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 2em;
    color: white;
    // background-image: url('../../assets/landing_earth.jpg'); /* 背景图路径 */
    // background-size: cover;
    // background-repeat: no-repeat;
    // transform-origin: center;
    // animation: zoomIn 2s ease-out forwards; /* 设置动画持续时间 */
    // background-color: #4a90e2;
    z-index: 1;
    /* 使用 transform 控制内容动画 */
    // transition: transform 0.5s ease;
    .border {
      background: #fff;
      width: 80vw;
      border-bottom: 1px solid #fff;
      margin: 10vh 0;
    }
    .textLeft {
      font-size: 30rem;
    }
    .textRight {
      font-size: 30rem;
    }

  }
}

  
  /* 模拟后一个 section 的内容逐步覆盖当前 section */
  .section + .section .content {
    position: relative;
    top: 0;
    height: 150vh;
    z-index: 2;
  }
  </style>
  