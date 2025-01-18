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
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.0682916876185!2d114.1548537758105!3d22.283565400988625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404006370e0c22d%3A0x12d44e86bf1bbc62!2sTwo%20Exchange%20Square%2C%208%20Connaught%20Pl%2C%20Central%2C%20%E9%A6%99%E6%B8%AF!5e0!3m2!1szh-CN!2sus!4v1737202564089!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="sub-title">Hong Kong</div>
                <div class="text">27/F, East Tower, Cheung Kong Center II, 10 Harcourt Road, Central, Hong Kong                </div>
            </div>
            <div class="item">
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.52717314234!2d54.38623817688795!3d24.501834459511237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6654db69f649%3A0x8931516916fe26f1!2zQWwgS2hhdGVtIFRvd2VyIC0gQWwgRmFsYWggU3QgLSBBbCBNYXJ5YWggSXNsYW5kIC0gTUkxIC0gQWJ1IERoYWJpIC0g6Zi_5ouJ5Lyv6IGU5ZCI6YWL6ZW_5Zu9!5e0!3m2!1szh-CN!2sus!4v1737203362168!5m2!1szh-CN!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="sub-title">Abu Dhabi</div>
                <div class="text">7/F,  Al Khatem Tower, Al Falah St, Al Maryah Island, ADGM Square, Abu Dhabi, UAE                </div>
            </div>
            <div class="item">
                <div class="sub-title">Investor Enquiry                </div>
                <div class="text">ir@infinicapital.com</div>
            </div>
        </div>
    </div>

    <Footer />
   
  </div>
</template>

<style scoped lang="scss">

.full-page-component {
  width: 100%;
  // min-width: 1900rem;
  .container {
    padding-bottom: 200rem;
    background: #093254;
    color: #fff;
    position: relative;
    .title {
        padding: 0rem 0 100rem;
        width: 60%;
        margin: 0 auto;
        border-bottom: 1rem solid #fff;
        
        font-size: 72rem;
        font-family: var(--main-font);
        height: 400rem;
        display: flex;
        justify-content: center;
        align-items: end;
    }
    .menus {
        margin-top: 100rem;
        
        .item {
            margin: 60rem 0;
            .map-container {
                display: flex;
                justify-content: center;
                margin-bottom: 40px;
            }
            .sub-title {
                display: flex;
                justify-content: center;
                align-items: center;
                
                font-weight: 700;
                font-size: 38rem;
            }
            .text {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 26rem;
            }
        }
    }
  }
}




</style>
