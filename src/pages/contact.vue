<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 <component :is="currentComponent" />
</template>

<script>
import PCComponent from '../components/pc_contact/index.vue';
import MobileComponent from '../components/h5_contact/index.vue';
import Vue3DeviceDetector from 'vue3-device-detector';

export default {
  components: {
    PCComponent,
    MobileComponent
  },
  data() {
    return {
      currentComponent: null
    };
  },
  created() {
    console.log(Vue3DeviceDetector().isMobile, 'Vue3DeviceDetector.isMobile')
    this.currentComponent = Vue3DeviceDetector().isMobile ? MobileComponent : PCComponent;
  }
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
