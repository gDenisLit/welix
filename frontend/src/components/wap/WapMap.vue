<script setup lang="ts">
import { computed } from 'vue'
import type { Cmp } from '@/models/Cmp.model'
import type { PropType } from 'vue'

const props = defineProps({
    cmp: Object as PropType<Cmp>
})
const info = computed(() => props.cmp?.info)
const mapSize = computed(() => {
    return { width: 500 + 'px', height: 450 + 'px' }
})
</script>

<template>
    <!-- <div class="map-container">
        <GMapMap class="map small" :center="info.center" :style="mapSize" :zoom="15" map-type-id="terrain"
            @mousedown.stop>
            <GMapCluster @mousedown.stop>
                <GMapMarker :key="index" v-for="(m, index) in info.markers" :position="m.position" :clickable="false"
                    :draggable="false" @click="center = m.position" @mousedown.stop />
            </GMapCluster>
        </GMapMap>
    </div> -->
</template>