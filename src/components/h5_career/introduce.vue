<script setup>

const goto = ()=> {
  window.open('https://apply.workable.com/infini-capital-management-limited', '_self')
}
</script>

<template>
  <div class="container">
    <!-- 我们正在寻找的特质部分 -->
    <div class="section">
      
      <div class="content">
        <div class="question">What we are looking for        </div>
        <div class="title">Innovation and Entrepreneurship        </div>
        <div class="text">
          At Infini Capital, we embrace uncertainty, pursuing innovative ideas and solving complex problems creatively.
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
          Our culture values diversity, inclusion, and autonomy, fostering teamwork and a supportive environment for solving complex problems.
        </div>
        <div class="join-button" @click="goto">Join us</div>
      </div>
    </div>
   
  </div>
</template>

<style scoped lang="scss">
.container {
width: 100vw;
margin: 0 auto 0;
color: #093254;
background: #fff;
padding: 10vh 0;
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
        width: 60vw;
          font-size: 30rem;
          font-family: var(--main-font);
          
      }
      .title {
          font-weight: 700;
          margin: 2vh 0 5vh;
          font-size: 18rem;
          font-family: var(--main-font);
      }
      .text {
          font-size: 15rem;
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

