<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';



</script>

<template>
    <div class="leadership" id="leadership">
        <div class="left">
            <div class="title">
                <div>Continual Diversification</div>
                <div>and Focus on</div>
                <div>Quality of Returns</div>
            </div>
            
            <div class="text">We understand there is no “one-size-fits-all” strategy. As the market inevitably changes, so does our firm, constantly adapting and  improving. We harness the mathematical power of diversification while vertically spanning across lowly-correlated, high-Sharpe strategies. Put simply, we don’t compromise on quality of returns and seek to generate alpha regardless of the market environment. </div>
        </div>
        <div class="right">
            <div class="item">Fundamental</div>
            <div class="border"></div>
            <div class="item">Tactical Trading</div>
            <div class="border"></div>
            <div class="item">Discretionary Macro</div>
            <div class="border"></div>
            <div class="item">Quantitative Strategies</div>
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
    height: 1400px;
    padding: 0 10%;
    .left {
        width: 70%;
        // padding: 0 0 0 10%;
        .title {
            font-size: 72px;
            margin: 320px 0 180px;

        }
        .sub-title {
            font-size: 48px;
            margin: 30px 0;
        }
        .text {
            font-size: 32px;
            width: 80%;
            // margin: 0 auto;
        }
    }
    .right{
        width: 30%;
        // height: 1000px;
        padding: 200px 0;
        box-sizing: border-box;
        overflow: hidden;
        .item {
            font-size: 58px;
            width: 450px;
            text-align: center;
        }
        .border {
            height: 80px;
            width: 450px;
            border-left: 1px solid #fff;
            transform: translateX(225px);
            margin: 40px 0;

        }
    }
  }
  
  .leader-profile {
    margin-top: 20px;
  }
  </style>
  