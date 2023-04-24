<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { wapService } from '@/services/wap.service'
import { cmps } from '@/services/cmp.service'
import type { Wap } from '@/models/Wap.model'

const wap = ref<Wap | null>(null)

onMounted(async () => {
    const { id } = useRoute().params
    const _wap = await wapService.getById(id)
    if (_wap) wap.value = _wap
})
</script>

<template>
    <section class="wap-details" :class="wap.class" v-if="wap">
        <component v-for="cmp in wap?.cmps" :is="cmps[cmp.type]" :cmp="cmp" :wap="wap" />
    </section>
</template>
