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
    padding-bottom: 80rem;
    .title {
        font-size: 72rem;
        font-family: var(--main-font);
        padding: 80rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .awards {
        display: flex;
        // gap: 40rem;
        justify-content: space-around;
        
        .award {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            padding-bottom: 40rem;
            font-size: 26rem;
            img {
                // width: 100rem;
                height: 100rem;
                padding: 80rem 0 40rem;
            }
        }
        .border {
            border-right: 1rem solid #234c68;
        }
    }
  }
  
  
  
  
  </style>
  