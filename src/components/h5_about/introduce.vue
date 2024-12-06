<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 200)
});



</script>
<template>
    <div class="section">
      
        <div class="feature-boxes">
            <div class="introduce">
                <div>As has always been the case,</div>
                <div>we challenge, innovate, adapt and improve.Our firm has evolved through iterations since inception,</div>
                <div>developing over time in our pursuit of excellence.</div>

            </div>
            <div class="features">

                <div class="feature">First Asian Hedge Fund with Presence in Abu Dhabi</div>
                <div class="feature color">Proprietary Fund DNA Prioritizing Capital Preservation and High-Quality Returns</div>
                <div class="feature">Substantial Internal Investment to Ensure Alignment of Interest with Investors</div>
                <div class="feature color">Bottom-up Construction of Fund Infrastructure Enables Agility</div>
            </div>
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
  .section {
    color: #fff;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: hidden;
    
    background: #fff;
    display: flex;
    align-items: center;
  }
  
  .feature-boxes {
    padding: 0 10vw;
    
    .introduce {
        font-size: 15rem;
        color: #234c68;
        margin: 0 0 10vh;
        
        
    }
    .features {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .feature {
            background-color: #234c68;
            color: white;
            border-radius: 20rem;
            width: 39vw;
            height: 39vw;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 12rem;
            cursor: pointer;
            padding: 10rem;
            box-sizing: border-box;
            margin-bottom: 2vw;
            
        }
        .color {
          background: #093254;
        }
    }
  }
  
  
  </style>
  