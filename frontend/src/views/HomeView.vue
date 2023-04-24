<script setup lang="ts">
import { computed } from 'vue'
import { store } from '@/store'
import homePageLayout from '@/layouts/home-page/home-page.layout.vue'
import appHeader from '@/components/app/app-header/app-header.vue'
import appHero from '@/components/app/app-hero/app-hero.vue'

const user = computed(() => {
    return store.getters.getUser
})
</script>

<template>
    <home-page-layout>
        <template #header>
            <app-header :user="user" />
        </template>
        <template #hero>
            <app-hero />
        </template>
    </home-page-layout>
</template>