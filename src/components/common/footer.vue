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
    <div class="footer">
        <div class="menus-row">
            <div class="logo" @click="navigateTo('/index')">
                <div class="logobox">
                    <img src="../../assets/footer_logo.png" alt="" class="logoimg">
                </div>
              <div class="memberbox">
                <div class="text">Member of</div>
                <img src="../../assets/ic_website_layout_v1B-32.png" alt="" class="memberimg">
              </div>
            </div>
            <div class="links">
                <div class="item" @click="navigateTo('/about')">About us</div>
                <div class="item" @click="navigateTo('/investment')">Investment approach</div>
                <div class="item" @click="navigateTo('/career')">Career</div>
                <div class="item" @click="navigateTo('/contact')">Contact us</div>
                <div class="login" @click="login">
                    Investor Login
                </div>
            </div>
            
        </div>
        <div class="line"></div>
        <div class="legal">
            <div class="item" @click="navigateTo('/privacy')">Privacy Policy</div>
            <div class="item" @click="navigateTo('/disclosures')">Disclosures</div>
        </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  .footer {
    padding: 0 0 10vh;
    background-color: #fff;
    
    color: #093254;
    .menus-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 100rem;
        width: 90vw;
        margin: 0 auto;
        .logo {
            padding-left: 20rem;
            font-size: 36rem;
            cursor: pointer;
            width: 570rem;
            display: flex;
            // display: flex;
            .logobox {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 300rem;
                margin-right: 160rem;
                .logoimg {
                  width: 300rem;
                }
            }
            .memberbox {
                width: 140rem;
                display: inline-block;
                .text {
                    font-size: 28rem;
                    // font-weight: 700;
                }
                .memberimg {
                    width: 140rem;
                }
            }
        }
        .links {
            font-size: 26rem;
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
                padding: 10rem 25rem;
                border-radius: 60rem;
                height: 30rem;
                font-size: 26rem;
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
        width: 90vw;
        background: #0b5e9c;
        padding-bottom: 1rem;
        margin: 20rem auto 40rem;
    }
    .legal {
        display: flex;
        font-size: 26rem;
        padding-left: 20rem;
        width: 90vw;
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