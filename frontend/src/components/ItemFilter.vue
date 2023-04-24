<template>
    <section class="item-filter">
        <form @submit.prevent="filterItems" class="item-filter__form flex gap-1">
            <input type="search" class="c-input" v-model="filterBy.txt" placeholder="Search Item" />
            <button class="c-btn">
                Search
            </button>
        </form>
    </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const filterBy = reactive({
    txt: ''
})

const emit = defineEmits([
    'filterItems'
])

function filterItems() {
    emit('filterItems', { ...filterBy })
}
</script>