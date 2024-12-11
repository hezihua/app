<template>
    <div class="header">
        <div class="logo" @click="navigateTo('/index')">
          <img src="../../assets/logo.png" alt="">
        </div>
        <div class="add" @click="toggleMenu">+</div>
        <div class="menus" :class="{ 'show': isMenuVisible }">
            <div class="hide" @click="toggleMenu">+</div>
            <div class="item" @click="navigateTo('/about')">About us</div>
            <div class="item" @click="navigateTo('/investment')">Investment approach</div>
            <div class="item" @click="navigateTo('/career')">Career</div>
            <div class="item" @click="navigateTo('/contact')">Contact us</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();



const isMenuVisible = ref(false);

const  toggleMenu = ()=> {
    isMenuVisible.value = !isMenuVisible.value;
}
const navigateTo = (route)=> {
    router.push(route);
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    height: 100rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30rem;
    color: #fff;
    padding: 0 10vw;
    box-sizing: border-box;
    z-index: 999;
    top: 0;
    left: 0;
    .logo {
        width: 60%;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
    }
    .add {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
    }
    .menus {
        position: fixed;
        right: 0;
        top: 0;
        width: 96vw;
        height: 100vh;
        background-color: #093254;
        padding: 10vh 20vw;
        box-sizing: border-box;
        transform: translateX(100%);
        transition: transform 0.5s ease-in-out;
        .hide {
            position: absolute;
            right: 4vw;
            top: 4vw;
            font-size: 40rem;
            transform: rotate(45deg);
        }
        &.show {
            transform: translateX(0);
        }
    }
    .item {
        margin: 10vh 0;
    }
}
</style>