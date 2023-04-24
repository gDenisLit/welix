<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <header class="app-header main-layout full">
        <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
        <div class="app-header__inner flex justify-between items-center">
            <section class="logo-wrapper">
                <img class="logo" src="@/assets/img/logo.png" alt="" @click="$router.push('/')" />
            </section>
            <section class="nav-wrapper">
                <nav-links :user="user" />
            </section>
        </div>
    </header>
</template>