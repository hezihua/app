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

            
            <div class="links">
                <div class="item" @click="navigateTo('/about')">About us</div>
                <div class="item" @click="navigateTo('/investment')">Investment approach</div>
                <div class="item" @click="navigateTo('/career')">Career</div>
                <div class="item" @click="navigateTo('/contact')">Contact us</div>
                
            </div>
            
        </div>
        <div class="line"></div>
        <div class="legal">
            <div class="item" @click="navigateTo('/disclosures')">Disclosures</div>
            <div class="login" @click="navigateTo('/investor-login')">
                Investor Login
            </div>
            <div class="logo" @click="navigateTo('/index')">InfiniCapital</div>
        </div>
    </div>
  </template>
  
  
  <style scoped lang="scss">
  .footer {
    // padding: 0 20rem;
    // box-sizing: border-box;
    // height: 40vh;
    background-color: #fff;
    // border-top: 1rem solid #dee2e6;
    padding: 2vh 0 5vh;
    color: #093254;
    .menus-row {
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        // padding-top: 100rem;
        width: 80vw;
        margin: 0 auto;

        
        .links {
            font-size: 16rem;
            font-weight: 700;
            .item {
                margin: 10rem 0;
                cursor: pointer;
            }
           
        }
    }
    .line {
        height: 0;
        width: 80vw;
        // background: #0b5e9c;
        border-bottom: 1rem solid #0b5e9c;
        margin: 2vh auto 2vh;
    }
    .legal {
        // display: flex;
        font-size: 16rem;
        width: 80vw;
        margin: 0 auto;
        .login {
            border-radius: 60rem;
            width: 60%;
            height: 40rem;
            font-size: 16rem;
            background: #093254;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin-bottom: 10rem;
        }
        .logo {
            font-size: 42rem;
            cursor: pointer;
        }
        .item {
            cursor: pointer;
            margin: 10rem 0;
        }
    }
  }
  </style>