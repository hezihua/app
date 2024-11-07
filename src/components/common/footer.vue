<template>
    <div class="footer">
        <div class="menus-row">

            <div class="logo">InfiniCapital</div>
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
  
  <script>
  export default {
    name: 'FooterComponent',
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .footer {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    padding: 0 150px;
    height: 400px;
    background-color: #f8f9fa;
    border-top: 1px solid #dee2e6;
    
    color: #007bff;
    .menus-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 50px;
        .logo {
            
            font-size: 58px;
        }
        .links {
            font-size: 46px;
            display: flex;
            .item {
                margin-right: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            .login {
                // margin: 20px 0;
                padding: 10px 40px;
                border-radius: 60px;
                height: 60px;
                background: #007bff;
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
        font-size: 46px;
        .item {
            margin-right: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
  }
  </style>