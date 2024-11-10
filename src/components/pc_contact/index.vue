<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/header.vue'
// import Background from './background.vue'
// import Introduce from './introduce.vue'
import Footer from '../common/footer.vue'






</script>

<template>
  <div class="full-page-component">
    <div class="container">
        <Header />
        <div class="title">
            Contact Us
        </div>
        <div class="menus">
            <div class="item">
                <div class="sub-title">Hong Kong</div>
                <div class="text">13/F, Two Exchange Square,8 Connaught Place, Central, Hong Kong                </div>
            </div>
            <div class="item">
                <div class="sub-title">Abu Dhabi</div>
                <div class="text">7/F,  Al Khatem Tower, Al Falah St, Al Maryah Island, ADGM Square, Abu Dhabi, UAE                </div>
            </div>
            <div class="item">
                <div class="sub-title">Investor Enquiry                </div>
                <div class="text">ir@infinicapital.com</div>
            </div>
        </div>
    </div>
    
    <!-- <Background />

    <Introduce /> -->

    <Footer />
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 100%;
  min-width: 1980px;
  .container {
    padding-bottom: 200px;
    background: #1a3a5f;
    color: #fff;
    position: relative;
    .title {
        padding: 0px 0 100px;
        width: 60%;
        margin: 0 auto;
        border-bottom: 1px solid #fff;
        
        font-size: 78px;
        height: 260px;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .menus {
        margin-top: 100px;
        
        .item {
            margin: 60px 0;
            .sub-title {
                display: flex;
                justify-content: center;
                align-items: center;
                
                font-weight: 700;
                font-size: 42px;
            }
            .text {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 42px;
            }
        }
    }
  }
}




</style>
