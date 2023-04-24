<script setup lang="ts">
import { computed } from 'vue'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'

const props = defineProps({
    cmp: Object as PropType<Cmp>
})
const info = computed(() => props.cmp?.info)
const goToLink = () => {
    window.open(props.cmp?.info.link, '_blank')
}
</script>

<template>
    <section v-if="cmp" :class="cmp.classes" :style="cmp.style">
        <section class="__inner">
            <span class="tag" v-if="info.tag" :style="info.tag.style">{{
                info.tag.txt
            }}</span>
            <h2 v-if="info.heading" class="text1">{{ info.heading.txt }}</h2>
            <h2 v-if="info.subHeading" class="text2">{{ info.subHeading.txt }}</h2>
            <div v-if="info.icon" class="icon-wrapper">
                <img :src="info.icon.src" alt="" :class="info.icon.classes" :style="info.icon.style" v-if="info.icon"
                    @click="goToLink()" />
            </div>
        </section>
    </section>
</template>