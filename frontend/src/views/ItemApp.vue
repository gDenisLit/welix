<template>
    <main class="item-app">
        <section class="flex items-center gap-1 w-100 mbe-1">
            <RouterLink class="add-item c-btn primary" to="/edit"></RouterLink>
            <ItemFilter @filterItems="filterItems" />
        </section>
        <ItemList :items="items" @removeItem="removeItem" />
    </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { FilterBy } from '../models/FilterBy.model';
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import ItemFilter from '../components/ItemFilter.vue'
import ItemList from '../components/ItemList.vue'

const store = useStore()
const items = computed(() => {
    return store.getters.getItems
})

async function removeItem(itemId: string) {
    try {
        await store.dispatch({
            type: 'removeItem',
            itemId
        })
        showSuccessMsg('Item Removed')
    }
    catch (err) {
        showErrorMsg('Failed to remove Item')
    }
}

function filterItems(filterBy: FilterBy) {
    store.dispatch({
        type: 'loadItems',
        filterBy
    })
}
</script>