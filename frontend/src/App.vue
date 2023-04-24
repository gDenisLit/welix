<template>
    <UserMsg />
    <RouterView />
</template>


<script lang="ts" setup>
import { useStore } from 'vuex'
import UserMsg from './components/UserMsg.vue'

const store = useStore()
store.dispatch({ type: 'loadLoggedinUser' })
</script>