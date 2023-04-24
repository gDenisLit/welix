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
    <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
        <div class="hero-inner">
            <div class="text-box">
                <h1 class="heading" :style="info.heading.style">
                    {{ info.heading.txt }}
                </h1>
                <h2 class="sub-heading" v-if="info.subHeading" :style="info.subHeading.style">
                    {{ info.subHeading.txt }}
                </h2>
                <div class="btns" v-if="info.btns">
                    <a v-for="(btn, idx) in info.btns" :class="'btn' + (idx + 1)" :href="btn.link">
                        {{ btn.txt }}</a>
                </div>
            </div>
            <div v-if="info.imgs" v-for="(url, idx) in info.imgs.urls" :class="'img' + (idx + 1)" :key="url">
                <img :src="url" alt="gallery-img" />

            </div>

            <img v-if="info.img" :src="info.img.url" />
        </div>
    </section>
</template>