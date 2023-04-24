<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, shallowRef } from 'vue'
import { wapService } from '@/services/wap.service'
import wapDetailsLayout from '@/layouts/wap-details/wap-details.layout.vue'
import wapDetails from '@/components/editor/wap-details/wap-details.vue'

const route = useRoute()
const { id } = route.params

let wap = shallowRef()
onMounted(async () => {
    wap.value = await wapService.getById(id)
})
</script>

<template>
    <wap-details-layout :class="wap?.class" v-if="wap">
        <template #wap>
            <wap-details :wap="wap" />
        </template>
    </wap-details-layout>
</template>