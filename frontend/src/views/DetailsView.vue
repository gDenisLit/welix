<template>
    <main class="item-details flex column gap-1" v-if="item">
        <img :src="item.imgUrl" alt="">
        <p>ID: {{ item._id }}</p>
        <p>Name: {{ item.name }}</p>
        <p>Price: {{ itemPrice }}</p>
        <RouterLink class="c-btn" to="/items">Back</RouterLink>
    </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Item } from '../models/Item.model'
import { itemService } from '../services/item.service'

const item = ref<Item | null>(null)
const route = useRoute()

onMounted(async () => {
    const { id } = route.params
    const _item = await itemService.getById(id as string)
    if (_item) item.value = _item
})

const itemPrice = computed(() => {
    return (item.value) ? item.value.price + '$' : '$'
})
</script>