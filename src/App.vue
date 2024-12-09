<script setup>
import { onMounted, ref } from 'vue';
import tips from './components/common/tips.vue'
import h5_tips from './components/common/h5_tips.vue'
import Vue3DeviceDetector from 'vue3-device-detector';
const showTips = ref(false)

const handleAgree = ()=> {
  showTips.value = false
  localStorage.setItem('token', new Date().getTime())
  // let overlay = document.querySelector("#app");
  // overlay.style.overflow = "";
  // overlay.style.height = "";
}

const handleDisagree = ()=> {
  window.location.href = 'about:blank';
}
onMounted(()=> {
  // let overlay = document.querySelector("#app");
  // overlay.style.overflow = "hidden";
  // overlay.style.height = "100vh";
  // overlay.style.overflow = "hidden";
  const token = localStorage.getItem('token')
  console.log(token)
  if(!token || new Date().getTime() > Number(token) + 3 * 24 * 60 * 60 * 1000) {
    showTips.value = true
  }
})
</script>

<template>
  <router-view></router-view>
  
  <h5_tips v-if="Vue3DeviceDetector().isMobile" :isVisible="showTips" @agree="handleAgree" @disagree="handleDisagree"/>
  <tips :isVisible="showTips" @agree="handleAgree" @disagree="handleDisagree" v-else/>
</template>

<style scoped>

</style>
