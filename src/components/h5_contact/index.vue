<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import Header from '../common/h5_header.vue'
// import Background from './background.vue'
// import Introduce from './introduce.vue'
import Footer from '../common/h5_footer.vue'






</script>

<template>
  <div class="full-page-component">
    <Header />
    <div class="container">
        
        <div class="title">
            Contact Us
        </div>
        <div class="menus">
            <div class="item">
                <div class="sub-title">Hong Kong</div>
                <div class="text">13/F, Two Exchange Square,              </div>
                <div class="text">8 Connaught Place, Central, Hong Kong                </div>
            </div>
            <div class="item">
                <div class="sub-title">Abu Dhabi</div>
                <div class="text">7/F,  Al Khatem Tower, Al Falah St,               </div>
                <div class="text">Al Maryah Island, ADGM Square,               </div>
                <div class="text">Abu Dhabi, UAE                </div>
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
  .container {
    padding: 20vh 10vw 10vh;
    background: #093254;
    color: #fff;
    position: relative;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    .title {
        width: 80%;
        
        font-size: 30rem;
        font-family: var(--main-font);
        display: flex;
        align-content: center;
       
    }
    .menus {
        
        .item {
            margin: 5vh 0;
            .sub-title {
                display: flex;
                align-items: center;
                
                font-weight: 700;
                font-size: 12rem;
            }
            .text {
                display: flex;
                align-items: center;
                font-size: 12rem;
            }
        }
    }
  }
}




</style>


