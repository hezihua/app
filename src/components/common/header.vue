<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (route)=> {
        router.push(route);
      }
const login  = ()=> {
  window.open('https://statestreet-icx.efrontcloud.com/@7102/statestreet/login.aspx')
}

</script>

<template>
    <!-- Philosophy & Values Section -->
    <section class="section header">
      <div class="header-content">
        <div class="logo" @click="navigateTo('/index')">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="menus">
          <div class="item" @click="navigateTo('/about')">About us</div>
          <div class="item" @click="navigateTo('/investment')">Investment approach</div>
          <div class="item" @click="navigateTo('/career')">Career</div>
          <div class="item" @click="navigateTo('/contact')">Contact us</div>
          <div class="login" @click="login">Investor login</div>
          <!-- https://statestreet-icx.efrontcloud.com/@7102/statestreet/login.aspx -->
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
    width: 100%;
    z-index: 99;
    .header-content {
      width: 90vw;
      display: flex;
      justify-content: space-between;
      height: 200rem;
      
      align-items: center;
      margin: 0 auto;
    }
    .logo {
        font-size: 36rem;
        cursor: pointer;
        padding-left: 20rem;
        width: 300rem;
        img {
          width: 100%;
        }
    }
    .menus {
        display: flex;
        font-size: 26rem;
        align-items: center;
        padding-right: 20rem;
        .item {
            color: #fff;
            margin: 0 0rem 0 40rem;
            cursor: pointer;
        }
        .login {
                padding: 10rem 25rem;
                border-radius: 60rem;
                height: 30rem;
                font-size: 26rem;
                background: #fff;
                color: #093254;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                margin: 0 0rem 0 40rem;
            }
    }
    
}



</style>
