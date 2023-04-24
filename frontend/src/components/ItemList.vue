<template>
    <ul class="item-list">
        <ItemPreview
            v-for="item in items" 
            :item="item" 
            :key="item._id" 
            @removeItem="$emit('removeItem', item._id)" 
        />
    </ul>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Item } from '../models/Item.model'
import ItemPreview from './ItemPreview.vue'

defineProps({
    items: Array as PropType<Item[]>
})
</script>