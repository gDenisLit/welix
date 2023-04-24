<script setup lang="ts">
import { computed } from 'vue'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'
import WapNav from './WapNav.vue'

const props = defineProps({
    cmp: Object as PropType<Cmp>
})
const info = computed(() => props.cmp?.info)
</script>

<template>
    <header class="wap-header" :class="cmp?.classes" :style="cmp?.style">
        <div class="wap-header__inner flex justify-between items-center">
            <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
                <img class="logo" :src="info.logoImg?.url" />
            </div>
            <div v-else v-if="info.logoTxt" :style="info.logoTxt.style">
                <h2 class="logo">
                    {{ info.logoTxt?.txt }}
                </h2>
            </div>
            <wap-nav v-if="info.nav" :cmp="info.nav" />
        </div>
    </header>
</template>