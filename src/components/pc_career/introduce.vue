<template>
    <div class="container">
      <!-- 我们正在寻找的特质部分 -->
      <div class="section">
        <div class="question">What we are looking for        </div>
        <div class="content">
          <div class="title">Innovation and Entrepreneurship        </div>
          <div class="text">
            At Infini Capital, we embrace uncertainty and invest our energy into pursuing new ideas. We are passionate about solving complex problems in a creative and visionary manner.
          </div>
        </div>
      </div>
  
      <!-- 分割线 -->
      <hr class="divider" />
  
      <!-- 文化部分 -->

      <div class="section">
        <div class="question">
            <div>Culture</div> 
            <div class="join-button">Join us</div>
        </div>
        <div class="content">
          <div class="title">Diversity and Collaboration</div>
          <div class="text">
            Our culture is defined by our people around the globe. We emphasize diversity, inclusion and autonomy within our framework, enabling our people to excel at solving complex problems together as a team. We are dedicated to continuously building a supportive environment for different perspectives.
          </div>

        </div>
      </div>
     
    </div>
  </template>

<style scoped lang="scss">
.container {
  max-width: calc(100% - 400rem);
  margin: 0 auto;
  color: #1a1a1a;
  .divider {
    border: none;
    margin: 20rem 0;
  }
  .section {
    margin-bottom: 20rem;
    display: flex;
    justify-content: center;
    padding: 60rem 0;
    box-sizing: border-box;
    .question {
        width: 30%;
        font-size: 72rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .join-button {
            width: 300rem;
            height: 60rem;
            border-radius: 60rem;
            font-size: 32rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 200rem 0 0 0rem;
            background-color:  #093254;
            color: #fff;
            padding: 10rem 20rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .join-button:hover {
            background-color: #004f91;
        }
    }
    .content {
        color: #093254;
        
        width: 70%;
        .title {
            font-weight: 700;
            width: 80%;
            margin-bottom: 50rem;
            font-size: 42rem;
        }
        .text {
            width: 80%;
            font-size: 26rem;
        }
    }
  }
}







</style>

  