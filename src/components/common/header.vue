<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (route)=> {
        router.push(route);
      }

</script>

<template>
    <!-- Philosophy & Values Section -->
    <section class="section header">
      <div class="header-content">
        <div class="logo" @click="navigateTo('/index')">InfiniCapital</div>
        <div class="menus">
          <div class="item" @click="navigateTo('/about')">About us</div>
          <div class="item" @click="navigateTo('/investment')">Investment approach</div>
          <div class="item" @click="navigateTo('/career')">Career</div>
          <div class="item" @click="navigateTo('/contact')">Contact us</div>
          <div class="item" @click="navigateTo('/investor-login')">Investor login</div>
        </div>

      </div>
    </section>

  
</template>

<style scoped lang="scss">
.section {
  width: 100%;
  color: #fff;
}

.header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 99;
    .header-content {
      width: 1180px;
      display: flex;
      justify-content: space-between;
      height: 200px;
      
      align-items: center;
      margin: 0 auto;
    }
    .logo {
        font-size: 36px;
        cursor: pointer;
        padding-left: 20px;
    }
    .menus {
        display: flex;
        font-size: 24px;
        align-items: center;
        padding-right: 20px;
        .item {
            color: #fff;
            margin: 0 0px 0 40px;
            cursor: pointer;
        }
    }
    
}



</style>
