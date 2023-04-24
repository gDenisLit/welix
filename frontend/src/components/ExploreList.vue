<script setup lang="ts">
import type { PropType } from 'vue'
import type { Wap } from '@/models/Wap.model'
import ExplorePreview from './ExplorePreview.vue'

defineProps({
    waps: Array as PropType<Wap[]>
})
</script>

<template>
    <ul class="explore-list" v-if="waps">
        <li v-for="wap in waps" :key="wap._id">
            <ExplorePreview :wap="wap" @editWap="(wap: Wap) => $emit('editWap', wap)"
                @previewWap="(wapId: string) => $emit('previewWap', wapId)" />
        </li>
    </ul>
</template>