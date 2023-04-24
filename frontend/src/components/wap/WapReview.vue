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
    <section v-if="cmp" class="wap-review" :class="cmp.classes" :style="cmp.style">
        <div class="wap-review__inner">
            <img v-if="info.img" :src="info.img.url" alt="img-review" />
            <div class="wap-review-texts">
                <p class="wap-review-text" :style="info.text.style">
                    {{ info.text.txt }}
                </p>
                <p class="wap-review-author" :style="info.author.style">
                    {{ info.author.txt }}
                </p>
                <p v-if="info.role" class="wap-review-description" :style="info.role.style">
                    {{ info.role.txt }}
                </p>
            </div>
        </div>
    </section>
</template>