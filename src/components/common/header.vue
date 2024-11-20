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
      <div class="logo" @click="navigateTo('/index')">InfiniCapital</div>
      <div class="menus">
        <div class="item" @click="navigateTo('/about')">About us</div>
        <div class="item" @click="navigateTo('/investment')">Investment approach</div>
        <div class="item" @click="navigateTo('/career')">Career</div>
        <div class="item" @click="navigateTo('/contact')">Contact us</div>
        <div class="item" @click="navigateTo('/investor-login')">Investor login</div>
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
    display: flex;
    justify-content: space-between;
    height: 200px;
    width: 100%;
    align-items: center;
    z-index: 99;
    .logo {
        font-size: 48px;
        margin-left: 150px;
        cursor: pointer;
    }
    .menus {
        display: flex;
        font-size: 30px;
        margin-right: 100px;
        align-items: center;
        .item {
            color: #fff;
            margin: 0 50px 0 0;
            cursor: pointer;
        }
    }
    
}



</style>
