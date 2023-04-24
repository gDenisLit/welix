<template>
    <UserMsg />
    <div class="main-layout">
        <AppHeader />
        <RouterView />
        <AppFooter />
    </div>
</template>


<script lang="ts" setup>
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import UserMsg from './components/UserMsg.vue'

const store = useStore()
store.dispatch({ type: 'loadItems' })
store.dispatch({ type: 'loadLoggedinUser' })
</script>