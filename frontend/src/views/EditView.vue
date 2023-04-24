<template>
    <main class="edit-view" v-if="item">
        <h2 class="mbe-2">{{ formType }}</h2>
        <form class="edit-view__form flex gap-3" @submit.prevent="saveItem">
            <UploadImg @uploaded="setImgUrl" :imgUrl="imgUrl" />
            <div class="flex column">
                <label class="mbe-2">
                    <p>Name:</p>
                    <input class="c-input" type="text" v-model="item.name" placeholder="Items name">
                </label>
                <label class="mbe-2">
                    <p>Price:</p>
                    <input class="c-input" type="number" v-model="item.price" placeholder="Items price">
                </label>
                <section class="flex gap-1">
                    <button class="c-btn">Save</button>
                    <RouterLink class="c-btn" to="/items">Back</RouterLink>
                </section>
            </div>
        </form>
    </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Item } from '../models/Item.model'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { itemService } from '../services/item.service.js'
import UploadImg from '../components/UploadImg.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()
const item = ref<Item | null>(null)

onMounted(async () => {
    const { id } = route.params
    item.value = (id) ?
        await itemService.getById(id as string) :
        itemService.getEmptyItem()
})

async function saveItem() {
    try {
        await store.dispatch({
            type: 'saveItem',
            item: { ...item.value }
        })
        showSuccessMsg('Item Saved')
        router.push('/items')
    }
    catch (err) {
        showErrorMsg('Failed to save')
    }
}

function setImgUrl(imgUrl: string) {
    if (!item.value) return
    item.value.imgUrl = imgUrl
}

const formType = computed(() => {
    return item.value?._id ? 'Edit Item' : 'Add Item'
})

const imgUrl = computed(() => {
    return item.value?.imgUrl ?
        item.value.imgUrl as string :
        ''
})
</script>