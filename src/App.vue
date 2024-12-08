<script setup>
import { onMounted, ref } from 'vue';
import tips from './components/common/tips.vue'
const showTips = ref(true)

const handleAgree = ()=> {
  showTips.value = false
  var overlay = document.querySelector("#app");
  overlay.style.overflow = "";
  overlay.style.height = "";
}

const handleDisagree = ()=> {
  window.location.href = 'about:blank';
}
onMounted(()=> {
  var overlay = document.querySelector("#app");
  overlay.style.overflow = "hidden";
  overlay.style.height = "100vh";
  // overlay.style.overflow = "hidden";
})
</script>

<template>
  <router-view></router-view>
  <tips :isVisible="showTips" @agree="handleAgree" @disagree="handleDisagree"/>
</template>

<style scoped>

</style>
