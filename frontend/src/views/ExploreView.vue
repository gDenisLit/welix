<script setup lang="ts">
import { store } from '@/store'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import templatePageLayout from '@/layouts/template-page/template-page.layout.vue'
import appHeader from '@/components/app/app-header/app-header.vue'
import wapList from '@/components/app/wap-list/wap-list.vue'
import type { Wap } from '@/models/Wap.model'

const router = useRouter()
store.dispatch({
    type: 'loadWaps',
    filterBy: { isTemplate: true }
})
const waps = computed(() => {
    return store.getters.getWaps
})

const editWap = (wapId: Wap) => {
    router.push(`/editor/${wapId}`)
}

const previewWap = (wapId: string) => {
    let routeData = router.resolve({
        name: 'details',
        params: { id: wapId },
    })
    window.open(routeData.href, '_blank')
}
</script>

<template>
    <template-page-layout>
        <template #header>
            <app-header />
        </template>
        <template #heading>
            <span>Pick one of our professionally designed website templates</span>
        </template>
        <template #sub-heading>
            <span>Or express your inner creativity and start from blank</span>
        </template>
        <template #wap-list>
            <wap-list :waps="waps" @editWap="editWap" @previewWap="previewWap" />
        </template>
    </template-page-layout>
</template>