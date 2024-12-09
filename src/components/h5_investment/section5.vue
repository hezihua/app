<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Footer from '../common/h5_footer.vue'

const zoomBackground = ref(null); // 用于引用 <div> 元素
const show = ref(false); 

// 组件挂载后计算一次高度
onMounted(() => {
  setTimeout(()=> {
    show.value = true
  }, 2000)
});

const items = [
  { title: "AI Empowerment", details: "We are exploring the use of AI in the  investment process and are in discussions with a reputable provider in the region to support this initiative." },
  { title: "In-house Quantitative and IT Teams", details: "We have dedicated our in-house research and development effort in technology to accelerate our platform evolution." },
  { title: "Proprietary Systems", details: "We have developed tailor-made system solutions to best fit our strategy and risk mandate, optimizing risk-reward ratios and adapting quickly to changing market conditions." }
];
const blockHovering = ref([false, false, false, false]);
// 使用数组来存储每个块的悬停状态
const isHovering = ref([false, false, false]);

const showDetails = (index) => {
  isHovering.value[index] = true;
};

const hideDetails = (index) => {
  isHovering.value[index] = false;
};

const currentIndex = ref(-1)
const showcontent = ref(false)

const handleClick = (index = 0) => {
    if (isHovering.value[index]) {
      isHovering.value[index] = false;
    } else {
      let result = [];
      [1,2,3,4].forEach((item, i) => {
        if (i === index) {
            result.push(true)
        } else {
          result.push(false)
        }
      })
      isHovering.value = result
    }
    
}


const triggerDetails = (index) => {
  showcontent.value = false
  if (blockHovering.value[index]) {
    blockHovering.value[index] = false;
  } else {
    let result = [];
    [1,2,3,4].forEach((item, i) => {
      if (i === index) {
          result.push(true)
      } else {
        result.push(false)
      }
    })
    setTimeout(() => {
      showcontent.value = true
    }, 1000);
    blockHovering.value = result
  }
 
  
};

const handleMouseEnter = (index) => {
  showcontent.value = false
  let result = [];
  [1,2,3,4].forEach((item, i) => {
    if (i === index) {
        result.push(true)
    } else {
      result.push(false)
    }
  })
  setTimeout(() => {
    showcontent.value = true
  }, 1000);
  blockHovering.value = result
}
const handleMouseLeave = (index) => {
  showcontent.value = false
  blockHovering.value[index] = false;
}




</script>
<template>
  <div class="container">
    <div class="Infrastructure-container">
      <div class="Infrastructure">
        <div class="infrastructuretitle">Infrastructure</div>
        <div class="list">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="item"
            @click="handleClick(index)"
          >
            <!-- 使用 transition 实现动画 -->
              <div v-if="isHovering[index]" class="content-detail">
                {{ item.details }}
              </div>
              <div v-if="!isHovering[index]"  class="content-title">
                <div class="text">{{ item.title }}</div>
                <div class="add">+</div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

  
  <style scoped lang="scss">

/* 定义透明度过渡动画 */
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.5s ease;
// }
// .fade-enter-from, .fade-leave-to {
//   opacity: 0;
// }



    /* 定义动画 */
@keyframes showcontent {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  .container {
    background: #f8f9fa;
    position: relative;
    overflow: hidden;
  }
  

  .Infrastructure-container {
    
    .Infrastructure {
        width: 100vw;
        background: url('../../assets/Infrastructure.jpg') no-repeat;
        color: #fff;
        height: 100vh;
        padding: 0 10vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        .infrastructuretitle {
            font-size: 30rem;
            font-family: var(--main-font);
            // margin-bottom: 200rem;
        }

        .item {
            text-align: center;
            
            // display: flex;
            // justify-content: center;
            // align-items: center;
            
            cursor: pointer;
            margin: 0 auto;
            height: 20vh;
            .content-title {
                font-size: 20rem;
                display: flex;
                justify-content: center;
                align-content: center;
                flex-wrap: wrap;
                width: 100%;
                transition: all 1s ease;
                height: 100%;
                .text {
                    
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                }
                .add {
                  width: 100%;
                }
            }
            .content-detail {
                transition: all 1s ease;
                font-size: 12rem;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;

                
            }
        }
    }
  }
  
  
  </style>
  