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

            <div class="logo" @click="navigateTo('/index')">InfiniCapital</div>
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
    // padding: 0 20px;
    // box-sizing: border-box;
    height: 360px;
    background-color: #fff;
    // border-top: 1px solid #dee2e6;
    
    color: #093254;
    .menus-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 100px;
        width: 1180px;
        margin: 0 auto;
        .logo {
            padding-left: 20px;
            font-size: 36px;
            cursor: pointer;
        }
        .links {
            font-size: 24px;
            display: flex;
            padding-right: 20px;
            .item {
                margin-right: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            .login {
                padding: 10px 20px;
                border-radius: 60px;
                height: 50px;
                font-size: 24px;
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
        width: 1180px;
        background: #0b5e9c;
        padding-bottom: 1px;
        margin: 50px auto;
    }
    .legal {
        display: flex;
        font-size: 24px;
        padding-left: 20px;
        width: 1180px;
        margin: 0 auto;
        .item {
            margin-right: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
  }
  </style>