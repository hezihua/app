<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/h5_header.vue';

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 200)
});



</script>
<template>
    <div class="about-us">
      <Header />
        <div class="about-boxes" ref="zoomBackground" >
          <Transition name="fade">

            <div id="aboutuscontent" v-if="show">
  
              <div class="title">About Us</div>
              <div class="article">
                  <div class="text">From our founding in 2015 and our roots in proprietary investment, Infini Capital has organically </div>
                  <div class="text">grown into a global multi-strategy investment management firm with a Pan-Asia focus.</div>
              </div>
              <div>
                  <div class="text">We are relentless in our pursuit of high-quality returns, combining diversified, lowly-correlated</div>
                  <div class="text">high-Sharpe strategies within our platform.</div>
              </div>
            </div>
          </Transition>
        </div>
    </div>
  </template>
  
  <style scoped lang="scss">

  /* 定义动画 */
@keyframes zoomIn {
  0% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1.08);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  // transform: translate(-60vw);
}
  .about-us {
    color: #fff;
    height: calc(100vh + 100rem);
    position: sticky;
    overflow: hidden;
    top: -100rem;
    .about-boxes {
        background-image: url('../../assets/aboutus.jpg'); /* 背景图路径 */
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transform-origin: center;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        // padding-left: 10vw;
        width: 100vw;
        height: calc(100vh + 100rem);
        #aboutuscontent {
          padding: 0 0 0 10vw;
        }
        .article {
            margin-bottom: 50rem;
        }
        .title {
            font-size: 30rem;
            font-family: var(--main-font);
            width:65%;
            margin: 0% 0% 3%;
        }
        .text {
            font-size: 15rem;
            width: 65%;
        }
    }
  }
  
  
  </style>
  