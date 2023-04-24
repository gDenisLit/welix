import { FilterBy } from "../models/FilterBy.model"
import { Item } from "../models/Item.model"
import { httpService } from "./http.service"
import { storageService } from "./storage.service"
import { utilService } from "./util.service"

const ITEM_KEY = 'items_db'
const API = 'item'
const ENV = import.meta.env.VITE_ENV

export const itemService = {
    query,
    getById,
    save,
    remove,
    getEmptyItem
}

async function query(filterBy: FilterBy) {
    return ENV === 'local' ?
        await _filteredItems(filterBy) :
        await httpService.get(API, filterBy)
}

function getById(itemId: string) {
    return ENV === 'local' ?
        storageService.get(ITEM_KEY, itemId) :
        httpService.get(`${API}/${itemId}`)
}

function save(itemToSave: Item) {
    const method = itemToSave._id ? 'put' : 'post'

    return ENV === 'local' ?
        storageService[method](ITEM_KEY, itemToSave) :
        httpService[method](API, itemToSave)
}

function remove(itemId: string) {
    return ENV === 'local' ?
        storageService.remove(ITEM_KEY, itemId) :
        httpService.delete(`${API}/${itemId}`)
}

function getEmptyItem(): Item {
    return {
        name: '',
        price: 0,
        imgUrl: ''
    }
}

async function _filteredItems(filterBy: FilterBy) {
    let items: Item[] = await storageService.query(ITEM_KEY)
    if (!filterBy) return items

    items = items.filter(item => {
        const regex = new RegExp(filterBy.txt, 'i')
        if (!regex.test(item.name)) return false
        else return item
    })
    return items
}

function _createItem(name: string) {
    return {
        _id: utilService.makeId(),
        name: name,
        price: utilService.getRandomIntInc(10, 100),
        imgUrl: utilService.getIcon(name)
    }
}

; (() => {
    if (ENV !== 'local') return
    let items = utilService.loadFromStorage(ITEM_KEY)
    if (!items || !items.length) {
        items = [
            _createItem('Hammer'),
            _createItem('Saw'),
            _createItem('Wrench'),
        ]
        utilService.saveToStorage(ITEM_KEY, items)
    }
})()