<template>
    <UserMsg />
    <div class="main-layout">
        <AppHeader />
        <RouterView />
    </div>
</template>


<script lang="ts" setup>
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader.vue'
import UserMsg from './components/UserMsg.vue'

const store = useStore()
store.dispatch({ type: 'loadLoggedinUser' })
// store.dispatch({
//     type: 'loadWaps',
//     filterBy: { isTemplate: true }
// })
</script>