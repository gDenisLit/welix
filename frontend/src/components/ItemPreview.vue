<template>
    <li class="item-preview" v-if="item">
        <div class="info">
            <img :src="item.imgUrl" class="image" />
            <p>Name: {{ item.name }}</p>
            <p>Price: {{ itemPrice }}</p>
        </div>
        <div class="actions">
            <img @click.stop="$emit('removeItem')" :src="icons.delete" />
            <img @click.stop="$router.push(`/edit/${item?._id}`)" :src="icons.edit" />
            <img @click.stop="$router.push(`/details/${item?._id}`)" :src="icons.info" />
        </div>
    </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { PropType } from 'vue'
import { Item } from '../models/Item.model'
import { utilService } from '../services/util.service'

defineEmits([
    'removeItem'
])

const props = defineProps({
    item: Object as PropType<Item>
})

const itemPrice = computed(() => {
    return props.item?.price + '$'
})

const icons = {
    delete: utilService.getIcon('delete'),
    edit: utilService.getIcon('edit'),
    info: utilService.getIcon('info')
}
</script>