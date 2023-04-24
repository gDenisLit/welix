<script setup lang="ts">
import { reactive, computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLogin = ref(true)

const credentials = reactive({
    fullname: '',
    username: '',
    email: '',
    password: '',
})

async function handleLogin() {
    await store.dispatch({
        type: 'login',
        credentials,
    })
}

const type = computed(() => {
    return isLogin.value ? 'Login' : 'Signup'
})

const toggleType = () => {
    isLogin.value = !isLogin.value
}

const loginType = computed(() => {
    return isLogin.value ?
        'Don\'t have an account?' :
        'Already have an account?'
})
</script>

<template>
    <main class="login main-layout">
        <section class="login-wrapper main-layout">
            <div class="login-wrapper__inner">
                <form @submit.prevent="handleLogin" class="login__form" v-if="credentials">
                    <h2>{{ type }}</h2>
                    <input v-model="credentials.fullname" placeholder="Fullname" v-if="!isLogin" autofocus />
                    <input v-model="credentials.username" placeholder="Username" autofocus />
                    <input v-model="credentials.email" type="email" placeholder="Email" v-if="!isLogin" />
                    <input v-model="credentials.password" type="password" placeholder="Password" show-password />
                    <button class="login__btn">
                        {{ type }}
                    </button>
                    <p @click="toggleType">{{ loginType }}</p>
                </form>
            </div>
        </section>
    </main>
</template>