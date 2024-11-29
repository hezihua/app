<template>
  <div class="container">
    <!-- 我们正在寻找的特质部分 -->
    <div class="section">
      
      <div class="content">
        <div class="question">What we are looking for        </div>
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
      
      <div class="content">
        <div class="question">
          Culture
        </div>
        <div class="title">Diversity and Collaboration</div>
        <div class="text">
          Our culture is defined by our people around the globe. We emphasize diversity, inclusion and autonomy within our framework, enabling our people to excel at solving complex problems together as a team. We are dedicated to continuously building a supportive environment for different perspectives.
        </div>
        <div class="join-button">Join us</div>
      </div>
    </div>
   
  </div>
</template>

<style scoped lang="scss">
.container {
width: 100vw;
margin: 10vh auto 0;
color: #093254;
.divider {
  border: none;
  margin: 20rem 0;
}
.section {
  margin-bottom: 20rem;
  // display: flex;
  // justify-content: center;
  padding: 0vh 10vw;
  box-sizing: border-box;
  
  .content {
      color: #093254;
      .question {
          font-size: 30rem;
          
      }
      .title {
          font-weight: 700;
          margin: 2vh 0 5vh;
          font-size: 18rem;
      }
      .text {
          font-size: 16rem;
      }
      .join-button {
          width: 30vw;
          height: 20rem;
          border-radius: 20rem;
          font-size: 22rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10vh 0 0 0rem;
          background-color:  #093254;
          color: #fff;
          padding: 10rem 20rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
      }
      // .join-button:hover {
      //     background-color: #004f91;
      // }
  }
}
}







</style>

