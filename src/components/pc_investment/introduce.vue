<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';



</script>

<template>
    <div class="leadership" id="leadership">
        <div class="left">
          <div class="leftcontent">

            <div class="title">
                <div>Continual Diversification</div>
                <div>and Focus on</div>
                <div>Quality of Returns</div>
            </div>
            
            <div class="text">We understand there is no “one-size-fits-all” strategy. As the market inevitably changes, so does our firm, constantly adapting and  improving. We harness the mathematical power of diversification while vertically spanning across lowly-correlated, high-Sharpe strategies. Put simply, we don’t compromise on quality of returns and seek to generate alpha regardless of the market environment. </div>
          </div>
        </div>
        <div class="right">
          <div class="right-content">

            <div class="item">Fundamental</div>
            <div class="border"></div>
            <div class="item">Tactical Trading</div>
            <div class="border"></div>
            <div class="item">Discretionary Macro</div>
            <div class="border"></div>
            <div class="item">Quantitative Strategies</div>
          </div>
        </div>
      
    </div>
  </template>
  
  <style scoped lang="scss">
  .leadership {
    background-color: #0a3a5e;
    color: white;
    // text-align: center;
    display: flex;
    justify-content: space-between;
    height: 1400rem;
    padding: 0 10%;
    .left {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // padding: 0 0 0 10%;
        .leftcontent {
          .title {
            font-size: 62rem;
            margin: 0 0 180rem;
            font-family: var(--main-font);
          }
          .text {
            font-size: 26rem;
            width: 80%;
            // margin: 0 auto;
          }
        }
        
        
    }
    .right{
        width: 30%;
        // height: 1000rem;
        padding: 0 0;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item {
            font-size: 48rem;
            width: 450rem;
            text-align: center;
        }
        .border {
            height: 80rem;
            width: 450rem;
            border-left: 1rem solid #fff;
            transform: translateX(225rem);
            margin: 40rem 0;

        }
    }
  }
  
  .leader-profile {
    margin-top: 20rem;
  }
  </style>
  