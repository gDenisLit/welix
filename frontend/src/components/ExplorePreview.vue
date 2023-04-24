<script setup lang="ts">
import type { PropType } from 'vue'
import type { Wap } from '@/models/Wap.model'

defineProps({
    wap: Object as PropType<Wap>
})
</script>

<template>
    <div class="explore-preview" v-if="wap">
        <div class="explore-preview-img">
            <div class="explore-preview-btns">
                <a @click="$emit('editWap', wap?._id)">Edit</a>
                <a @click="$emit('previewWap', wap?._id)">View</a>
            </div>
            <img :src="wap.imgUrl" alt="" />
        </div>
        <p>{{ wap.type }}</p>
    </div>
</template>