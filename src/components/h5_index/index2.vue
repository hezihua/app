<template>
    <div ref="container" class="container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
import Section1 from './section1.vue';
import Section2 from './section2.vue';
import Section3 from './section3.vue';
import Section4 from './section4.vue';
import Section5 from './section5.vue';

export default {
  components: { Section1, Section2, Section3, Section4, Section5 },
  setup() {
    const sections = ref([]);
    const observer = ref(null);

    onMounted(() => {
      // 获取所有的 section 元素
      sections.value = document.querySelectorAll('.section');

      // 定义一个函数来处理滚动事件
      const handleScroll = () => {
        let scrollPosition = window.scrollY;

        // 遍历所有 section 元素
        sections.value.forEach((section, index) => {
          // 获取每个 section 的顶部位置
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + section.offsetHeight;
          console.log(scrollPosition, sectionTop, sectionHeight)
          // const visibleHeight = section.boundingClientRect.height * section.intersectionRatio;
          // 检查当前 section 是否在可视区域内
          if (scrollPosition >= sectionTop - sectionHeight  && scrollPosition < sectionTop  ) {
            // 如果当前 section 在可视区域内，将其前面的所有 section 的 content 设置为 fixed
            for (let i = 0; i < index; i++) {
              console.log(index, 'index', scrollPosition , sections.value[i].offsetTop)
              if(index - 1 === i) {
                const topValue = scrollPosition - sections.value[i].offsetTop;
                sections.value[i].querySelector('.content').style.position = 'fixed';
                sections.value[i].querySelector('.content').style.top = `${-topValue}rem`;
              } else {
                sections.value[i].querySelector('.content').style.position = 'relative';
                sections.value[i].querySelector('.content').style.top = `${-0}rem`;
              }
             
             
            }
            // 将当前 section 的 content 设置为 relative
            section.querySelector('.content').style.position = 'relative';
            section.querySelector('.content').style.top = `0rem`;
          } else {
            // 如果当前 section 不在可视区域内，将其 content 设置为 relative
            section.querySelector('.content').style.position = 'relative';
            section.querySelector('.content').style.top = `0rem`;
            // section.querySelector('.content').style.position = 'relative';
          }
        });
      };

      // 添加滚动事件监听器
      observer.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleScroll();
          }
        });
      }, {
        root: null, // 相对于视口检查交叉情况
        rootMargin: '0rem',
        threshold: 0.1, // 目标10%可见时触发回调
      });

      // 为每个 section 添加 IntersectionObserver
      sections.value.forEach((section) => {
        observer.value.observe(section);
      });

      // 移除滚动事件监听器
    //   window.removeEventListener('scroll', handleScroll);
    });

    return {};
  },
};
  </script>
  
  <style>
  .container {
    height: 500vh; /* 支持滚动的总高度 */
    overflow-y: scroll;
    font-size: 18rem;
  }
  </style>
  