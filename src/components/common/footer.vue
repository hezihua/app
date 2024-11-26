<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (route)=> {
        router.push(route);
      }

</script>

<template>
    <div class="footer">
        <div class="menus-row">

            <div class="logo" @click="navigateTo('/index')">
              <img src="../../assets/footer_logo.png" alt="">
            </div>
            <div class="links">
                <div class="item" @click="navigateTo('/about')">About us</div>
                <div class="item" @click="navigateTo('/investment')">Investment approach</div>
                <div class="item" @click="navigateTo('/career')">Career</div>
                <div class="item" @click="navigateTo('/contact')">Contact us</div>
                <div class="login" @click="navigateTo('/investor-login')">
                    Investor Login
                </div>
            </div>
            
        </div>
        <div class="line"></div>
        <div class="legal">
            <div class="item" @click="navigateTo('/terms')">Terms of Use</div>
            <div class="item" @click="navigateTo('/media')">Media Inquiries</div>
            <div class="item" @click="navigateTo('/privacy')">Privacy Policy</div>
            <div class="item" @click="navigateTo('/disclosures')">Disclosures</div>
        </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  .footer {
    // padding: 0 20rem;
    // box-sizing: border-box;
    height: 360rem;
    background-color: #fff;
    // border-top: 1rem solid #dee2e6;
    
    color: #093254;
    .menus-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 100rem;
        width: 80vw;
        margin: 0 auto;
        .logo {
            padding-left: 20rem;
            font-size: 36rem;
            cursor: pointer;
            width: 300rem;
            img {
              width: 300rem;
            }
        }
        .links {
            font-size: 24rem;
            display: flex;
            padding-right: 20rem;
            .item {
                margin-right: 40rem;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            .login {
                padding: 10rem 20rem;
                border-radius: 60rem;
                height: 50rem;
                font-size: 24rem;
                background: #093254;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }
    .line {
        height: 0;
        width: 80vw;
        background: #0b5e9c;
        padding-bottom: 1rem;
        margin: 50rem auto;
    }
    .legal {
        display: flex;
        font-size: 24rem;
        padding-left: 20rem;
        width: 80vw;
        margin: 0 auto;
        .item {
            margin-right: 40rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
  }
  </style>