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
                <div class="map-container">
                    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.0682916876185!2d114.1548537758105!3d22.283565400988625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404006370e0c22d%3A0x12d44e86bf1bbc62!2sTwo%20Exchange%20Square%2C%208%20Connaught%20Pl%2C%20Central%2C%20%E9%A6%99%E6%B8%AF!5e0!3m2!1szh-CN!2sus!4v1737202564089!5m2!1szh-CN!2sus&language=en"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9192575349102!2d114.1626069!3d22.2810482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040147d6a99521%3A0x4582641cfc0d3d67!2sCHEUNG%20KONG%20CENTER%20II!5e0!3m2!1sen!2sus!4v1737389267611!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="sub-title">Hong Kong</div>
                <div class="text">27/F, East Tower, Cheung Kong Center II,                 </div>
                <div class="text">10 Harcourt Road, Central, Hong Kong                </div>
            </div>
            <div class="item">
                <div class="map-container">
                    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.52717314234!2d54.38623817688795!3d24.501834459511237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6654db69f649%3A0x8931516916fe26f1!2zQWwgS2hhdGVtIFRvd2VyIC0gQWwgRmFsYWggU3QgLSBBbCBNYXJ5YWggSXNsYW5kIC0gTUkxIC0gQWJ1IERoYWJpIC0g6Zi_5ouJ5Lyv6IGU5ZCI6YWL6ZW_5Zu9!5e0!3m2!1szh-CN!2sus!4v1737203362168!5m2!1szh-CN!2sus&language=en"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.52717314234!2d54.38623817688795!3d24.501834459511237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6654db69f649%3A0x8931516916fe26f1!2sAl%20Khatem%20Tower%20-%20Al%20Falah%20St%20-%20Al%20Maryah%20Island%20-%20MI1%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1737389408683!5m2!1sen!2sus"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="sub-title">Abu Dhabi</div>
                <div class="text">7/F,  Al Khatem Tower, Al Falah St,               </div>
                <div class="text">Al Maryah Island, ADGM Square,               </div>
                <div class="text">Abu Dhabi, UAE                </div>
            </div>
            <div class="item">
                <div class="sub-title">Investor Enquiries                </div>
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
    iframe {
        width: 80vw; /* 宽度为视口宽度的100% */
        height: 70vw; /* 高度为视口宽度的70% */
        border: none; /* 可选：移除边框 */
        margin-bottom: 10vw;
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


