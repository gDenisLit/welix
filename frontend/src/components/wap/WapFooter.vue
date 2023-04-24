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
    <section v-if="cmp" class="wap-footer" :class="cmp.classes" :style="cmp.style">
        <div class="footer-inner">
            <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
                <img class="logo" :src="info.logoImg.url" />
            </div>
            <div v-else v-if="info.logoTxt">
                <h2>{{ info.logoTxt.txt }}</h2>
            </div>
            <div class="row">
                <h3>{{ info.row1.txt }}</h3>
                <div class="flex flex-column"></div>
                <p class="txt2" v-for="text in info.row1.texts">{{ text }}</p>
            </div>
            <div class="row" v-if="info.row2.txt">
                <h3>{{ info.row2.txt }}</h3>
                <div class="flex flex-column"></div>
                <p v-for="text in info.row2.texts">{{ text }}</p>
            </div>
        </div>
        <p class="coffee">{{ info.copyright.txt }}</p>
    </section>
</template>