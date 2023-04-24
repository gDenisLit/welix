<script setup lang="ts">
import { computed } from 'vue'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'

const props = defineProps({
    cmp: Object as PropType<Cmp>
})
const info = computed(() => props.cmp?.info)
</script>

<template>
    <section v-if="cmp" class="wap-gallery" :class="cmp?.classes" :style="cmp?.style">
        <h3 class="title">{{ info.txt }}</h3>
        <div class="imgs-container">
            <div v-for="(url, idx) in info.imgs.urls" :key="url" :class="'img' + (idx + 1)">
                <img :src="url" alt="gallery-img" />
            </div>
        </div>
    </section>
</template>