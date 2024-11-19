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
    padding: 0 150px;
    height: 400px;
    background-color: #fff;
    // border-top: 1px solid #dee2e6;
    
    color: #1a3a5f;
    .menus-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 100px;
        .logo {
            
            font-size: 42px;
            cursor: pointer;
        }
        .links {
            font-size: 36px;
            display: flex;
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
                font-size: 30px;
                background: #1a3a5f;
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
        width: 100%;
        background: #007bff;
        padding-bottom: 1px;
        margin: 50px 0;
    }
    .legal {
        display: flex;
        font-size: 30px;
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