<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import loginPageLayout from '@/layouts/login-page/login-page.layout.vue'
import appHeader from '@/components/app/app-header/app-header.vue'
import loginForm from '@/components/app/login-form/login.form.vue'

const store = useStore()
const user = computed(() => {
    return store.getters.getUser
})
const credentials = reactive({
    fullname: '',
    username: '',
    email: '',
    password: '',
})
const handleLogin = async () => {
    await store.dispatch({
        type: 'login',
        credentials,
    })
}
</script>

<template>
    <login-page-layout>
        <template #header>
            <app-header :user="user" />
        </template>
        <template #login-form>
            <login-form :credentials="credentials" @login="handleLogin" />
        </template>
    </login-page-layout>
</template>