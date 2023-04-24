<template>
    <label @drop.prevent="handleDrop" @dragover.prevent>
        <img :src="src" alt="">
        <input type="file" @change="handleChange" hidden>
    </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { uploadImg } from '../services/upload.service'
import { utilService } from '../services/util.service';

const emit = defineEmits(['uploaded'])
const props = defineProps({
    imgUrl: String
})

function handleChange(ev: Event) {
    const files = (ev.target as HTMLInputElement).files
    if (!files) return
    handleUpload(files[0])
}

function handleDrop(ev: DragEvent) {
    const files = ev.dataTransfer?.files
    if (!files) return
    handleUpload(files[0])
}

async function handleUpload(file: File) {
    if (!file) return
    try {
        const { url } = await uploadImg(file)
        emit('uploaded', url)
        showSuccessMsg('Image uploaded')
    }
    catch (err) {
        showErrorMsg('Failed to load image')
    }
}

const src = computed(() => {
    return props.imgUrl ?
        props.imgUrl :
        utilService.getIcon('addImg')
})
</script>