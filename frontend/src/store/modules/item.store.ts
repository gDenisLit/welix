import { ActionContext } from "vuex"
import { FilterBy } from "../../models/FilterBy.model"
import { Item } from "../../models/Item.model"
import { itemService } from "../../services/item.service"
import { RootState } from '../index'

export interface ItemState {
    items: Item[] | null
}

interface Payload {
    items: Item[]
    savedItem: Item
    item: Item
    itemId: string
    filterBy: FilterBy
}

type Context = ActionContext<ItemState, RootState>

export const itemStore = {
    state: {
        items: null
    },
    getters: {
        getItems({ items }: ItemState) {
            return items
        }
    },
    mutations: {
        setItems(state: ItemState, { items }: Payload) {
            state.items = items
        },
        removeItem({ items }: ItemState, { itemId }: Payload) {
            if (!items) return
            const idx = items.findIndex(item => item._id === itemId)
            if (idx >= 0) items.splice(idx, 1)
        },
        addItem({ items }: ItemState, { savedItem }: Payload) {
            if (!items) return
            items.unshift(savedItem)
        },
        updateItem({ items }: ItemState, { savedItem }: Payload) {
            if (!items) return
            const idx = items.findIndex(i => i._id === savedItem._id)
            if (idx >= 0) items.splice(idx, 1, savedItem)
        }
    },
    actions: {
        async loadItems({ commit }: Context, { filterBy }: Payload) {
            try {
                const items = await itemService.query(filterBy)
                if (items) commit({ type: 'setItems', items })
            }
            catch (err) {
                console.dir(err)
                throw Error
            }
        },
        async removeItem({ commit }: Context, { itemId }: Payload) {
            try {
                await itemService.remove(itemId)
                commit({ type: 'removeItem', itemId })
            }
            catch (err) {
                console.dir(err)
                throw Error
            }
        },
        async saveItem({ commit }: Context, { item }: Payload) {
            const type = item._id ? 'updateItem' : 'addItem'
            try {
                const savedItem = await itemService.save(item)
                commit({ type, savedItem })
            }
            catch (err) {
                console.dir(err)
                throw Error
            }
        }
    }
}