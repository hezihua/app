<template>
    <div class="industry-leadership">
      <div class="title">Industry Leadership</div>
      <div class="awards">
        <div class="award border">
            <img src="../../assets/ic_website_layout_v1B-32.png" alt="AIMA logo" />
            <div>Member of AIMA</div>
        </div>
        <div class="award">
            <img src="../../assets/ic_website_layout_v1B-33.png" alt="AIMA logo" />
            <div>Insights & Mandate</div>
            <div>Professional Investment Awards 2024</div>
            <div>Performance Awards: </div>
            <div>Asian Hedge Fund (3 Years) – Multi-Strategy</div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .industry-leadership {
    background-color: #fff;
    text-align: center;
    padding-bottom: 80px;
    .title {
        font-size: 72px;
        padding: 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .awards {
        display: flex;
        // gap: 40px;
        justify-content: space-around;
        
        .award {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            padding-bottom: 40px;
            font-size: 42px;
            img {
                // width: 100px;
                height: 100px;
                padding: 80px 0 40px;
            }
        }
        .border {
            border-right: 1px solid #005a8c;
        }
    }
  }
  
  
  
  
  </style>
  