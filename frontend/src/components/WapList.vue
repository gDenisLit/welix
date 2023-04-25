<script setup lang="ts">
import type { PropType } from 'vue'
import type { Wap } from '@/models/Wap.model'
import WapPreview from './WapPreview.vue'

defineProps({
    waps: Array as PropType<Wap[]>
})
</script>

<template>
    <ul class="wap-list" v-if="waps">
        <li v-for="wap in waps" :key="wap._id">
            <WapPreview :wap="wap" @editWap="(wap: Wap) => $emit('editWap', wap)"
                @previewWap="(wapId: string) => $emit('previewWap', wapId)" />
        </li>
    </ul>
</template>