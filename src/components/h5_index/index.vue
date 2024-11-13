<template>
    <div ref="container" class="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import Section1 from './section1.vue';
  import Section2 from './section2.vue';
  import Section3 from './section3.vue';
  import Section4 from './section4.vue';
  import Section5 from './section5.vue';
  
  const sections = ref([]);
  const  handleScroll = ()=> {
      let scrollPosition = window.scrollY;
      let viewportHeight = window.innerHeight;
      console.log(scrollPosition, viewportHeight, 'viewsss')
      if(scrollPosition > 1 * viewportHeight) {
        let story = document.querySelector('.story')
        let content  = story.querySelector('.content')
        console.log(story, content)
        content.classList.add('scroll')
      } else {
        let story = document.querySelector('.story');
        let content = story.querySelector('.content');

        // 滚动回去时移除 scroll 类
        content.classList.remove('scroll');
      }

      if(scrollPosition > 2.2 * viewportHeight) {
        let section3 = document.querySelector('.section3')
        let content  = section3.querySelector('.content')
        console.log(section3, content)
        content.classList.add('scroll')
        content.style.top = `-${0.2 * viewportHeight}px`
      } else {
        let section3 = document.querySelector('.section3');
        let content = section3.querySelector('.content');
        content.style.top = `-0px`

        // 滚动回去时移除 scroll 类
        content.classList.remove('scroll');
      }

      if(scrollPosition > 3.2 * viewportHeight) {
        let section4 = document.querySelector('.section4')
        let content  = section4.querySelector('.content')
        console.log(section4, content)
        content.classList.add('scroll')
        
      } else {
        let section4 = document.querySelector('.section4');
        let content = section4.querySelector('.content');

        // 滚动回去时移除 scroll 类
        content.classList.remove('scroll');
      }
    }
  onMounted(() => {
    sections.value = document.querySelectorAll('.section');
    // // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    
    
  });
  </script>
  
  <style lang="scss">
  .container {
    height: 500vh;
    overflow-y: scroll;
    font-size: 18px;
    
  }
  .scroll {
    position: fixed!important;
  }
  </style>
  