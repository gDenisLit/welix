<template>
    <header class="app-header">
        <div class="screen" v-if="isNavOpen" :class="{ open: isNavOpen }" @click="toggleNav"></div>
        <div class="logo flex items-center gap-2">
            <img :src="icons.logo" alt="LOGO">
            Item App
        </div>
        <button class="hamburger btn" @click="toggleNav">
            <img :src="icons.hamburger" />
        </button>

        <nav :class="{ open: isNavOpen, nav: true }">
            <RouterLink class="nav-link" v-for="link in links" :key="link.path" :to="link.path">
                {{ link.name }}
            </RouterLink>
            <section class="nav-user">
                <div v-if="loggedinUser" @click="state.showLogout = !state.showLogout">
                    <img :src="loggedinUser.imgUrl" alt="">
                    <button v-if="state.showLogout" class="c-btn" @click="onLogout">Logout</button>
                </div>
                <RouterLink to="/login" class="nav-link" v-else>
                    Login
                </RouterLink>
            </section>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { utilService } from '../services/util.service'

const store = useStore()
const isNavOpen = ref(false)

const state = reactive({
    isNavOpen: false,
    showLogout: false
})

const links = ref(utilService.getHeaderLinks())
const icons = {
    logo: utilService.getIcon('logo'),
    hamburger: utilService.getIcon('hamburger')
}

function toggleNav() {
    isNavOpen.value = !isNavOpen.value
}

function onLogout() {
    store.dispatch({ type: 'logout' })
}

const loggedinUser = computed(() => {
    return store.getters.loggedinUser
})

</script>