<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const user = useStore().getters.user

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function logout() {
    useStore().dispatch('logout')
}

const shouldShow = computed(() => {
    return useRoute().name !== 'explore'
})
</script>

<template>
    <header class="app-header">
        <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
        <div class="app-header__inner flex justify-between items-center">
            <section class="logo-wrapper">
                <img class="logo" src="@/assets/img/welix-logo.png" alt="" @click="$router.push('/')" />
            </section>
            <section class="nav-wrapper">
                <router-link class="header-link" to="/explore">Explore</router-link>
                <router-link class="header-link" v-if="user" to="/dashboard">Backoffice</router-link>
                <router-link class="header-link" v-if="!user" to="/login">Log in</router-link>
                <router-link class="header-link" v-if="user" to="/" @click="logout">Log out</router-link>
                <img v-if="user" class="user-img" :src="user.img" alt="" />
                <router-link class="header-link action" to="/explore" v-if="shouldShow">Get Started</router-link>
            </section>
        </div>
    </header>
</template>