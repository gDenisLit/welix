<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'

let isMenuOpen = ref(false)
const props = defineProps({
    cmp: Object as PropType<Cmp>
})
const info = computed(() => props.cmp?.info)
const isShown = computed(() => {
    return { open: isMenuOpen.value }
})
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
    <section class="wap-nav" :class="cmp?.classes" :style="cmp?.style">
        <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
        <!-- <MenuOutlined class="hamburger" @click="toggleMenu" /> -->
        <ul class="nav-bar clean-list flex items-center space-between" :class="isShown">
            <li v-for="link in info.links" class="nav-link">
                <a :href="link.href">{{ link.txt }}</a>
            </li>
        </ul>
    </section>
</template>