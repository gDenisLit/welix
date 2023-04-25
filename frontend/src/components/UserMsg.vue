<template>
    <div class="user-msg" :class="msg?.type" v-if="msg">
        <img :src="iconUrl" alt="">
        <h3>{{ msg.txt }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onUnmounted } from 'vue'
import { eventBus } from '../services/event-bus.service'
import type { Msg } from '../services/event-bus.service'
import { utilService } from '../services/util.service'


const msg = ref<Msg | null>(null)
const unsub = eventBus.on('show-msg', showMsg)

const iconUrl = computed(() => {
    if (!msg.value) return ''
    return utilService.getIcon(msg.value.type)
})

onUnmounted(() => {
    unsub()
})

function showMsg(msgData: Msg) {
    msg.value = msgData
    setTimeout(() => {
        msg.value = null
    }, 2000)
}
</script>