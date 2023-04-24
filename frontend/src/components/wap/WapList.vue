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
    <section v-if="cmp" class="wap-list-cmp" :class="cmp.classes" :style="cmp.style">
        <h3 class="heading">{{ info.heading.txt }}</h3>
        <ul class="clean-list">
            <span v-if="info.listIcon">{{ info.listIcon }}</span>
            <li v-for="txt in info.list.txt" :key="txt">
                {{ txt }}
            </li>
        </ul>
        <a v-if="info.link" :href="info.link.link">{{ info.link.txt }}</a>
    </section>
</template>