<script setup>

const goto = ()=> {
  window.open('https://apply.workable.com/infini-capital-management-limited')
}
</script>

<template>
  <div class="container">
    <!-- 我们正在寻找的特质部分 -->
    <div class="section">
      <div class="question">
        <div class="text">
          What we are looking for
        </div>        
      </div>
      <div class="content">
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
      <div class="question">
          <div class="text">Culture</div> 
          <div class="join-button" @click="goto">Join us</div>
      </div>
      <div class="content">
        <div class="title">Diversity and Collaboration</div>
        <div class="text">
          Our culture values diversity, inclusion, and autonomy, fostering teamwork and a supportive environment for solving complex problems.
        </div>

      </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: calc(100% - 400rem);
  margin: 0 auto;
  color: #093254;
  .divider {
    border: none;
    margin: 20rem 0;
  }
  .section {
    margin-bottom: 20rem;
    display: flex;
    justify-content: center;
    padding: 100rem 0 40rem;
    box-sizing: border-box;
    .question {
        width: 30%;
        font-size: 42rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: var(--main-font);
        .text {
          width: 60%;
        }
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
        color: #0b5e9c;
        .title {
            font-weight: 700;
            width: 80%;
            margin-bottom: 50rem;
            font-size: 42rem;
            font-family: var(--main-font);
        }
        .text {
            width: 80%;
            font-size: 26rem;
        }
    }
  }
}







</style>

  