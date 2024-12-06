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
            <div class="leftbox">
                <div class="item" @click="navigateTo('/disclosures')">Disclosures</div>
                <div class="login" @click="navigateTo('/investor-login')">
                    Investor Login
                </div>
            </div>
            <div class="memberbox">
                <div class="text">member of</div>
                <img src="../../assets/ic_website_layout_v1B-32.png" alt="" class="memberimg">
            </div>
           
        </div>
        <div class="logo" @click="navigateTo('/index')">
            <img src="../../assets/footer_logo.png" alt="">
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
                margin: 15rem 0;
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
        display: flex;
        .leftbox {
            width: 70%;
        }
        .login {
            border-radius: 60rem;
            width: 80%;
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
        
        .item {
            cursor: pointer;
            margin: 15rem 0;
        }
        .memberbox {
            width: 30%;
            display: inline-block;
            .text {
                font-size: 15rem;
                font-weight: 700;
            }
            .memberimg {
                width: 80rem;
            }
        }
    }
    .logo {
        font-size: 42rem;
        cursor: pointer;
        width: 14rem;
        width: 80vw;
        padding: 0 10vw;
        img {
            width: 100%;
        }
    }
  }
  </style>