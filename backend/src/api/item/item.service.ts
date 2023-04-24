import { logger } from '../../services/logger.service.js'
import { dbService } from '../../services/db.service.js'
import { FilterBy } from '../../models/FilterBy.model.js'
import { Item } from '../../models/Item.model.js'
import * as mongodb from 'mongodb'
const { ObjectId } = mongodb

export const itemService = {
    remove,
    query,
    getById,
    add,
    update,
}

const COLLECTION_NAME = 'item'

async function query(filterBy: FilterBy) {
    try {
        const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const items = await collection.find(criteria).toArray()
        return items
    }
    catch (err: any) {
        logger.error('Cannot find items', err)
        throw err
    }
}

async function getById(itemId: string) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const item = collection.findOne({ _id: new ObjectId(itemId) })
        return item
    }
    catch (err: any) {
        logger.error(`While finding item ${itemId}`, err)
        throw err
    }
}

async function remove(itemId: string) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        await collection.deleteOne({ _id: new ObjectId(itemId) })
        return itemId
    }
    catch (err: any) {
        logger.error(`Cannot remove item ${itemId}`, err)
        throw err
    }
}

async function add(item: Item) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const { insertedId } = await collection.insertOne(item)
        item._id = insertedId
        return item
    }
    catch (err: any) {
        logger.error('Cannot insert item', err)
        throw err
    }
}

async function update(item: Item) {
    try {
        item._id = new ObjectId(item._id)
        const collection = await dbService.getCollection(COLLECTION_NAME)
        await collection.updateOne({ _id: item._id }, { $set: item })
        return item
    }
    catch (err: any) {
        logger.error(`Cannot update item ${item._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy: FilterBy) {
    const criteria = {
        name: { $regex: filterBy.txt, $options: 'i' }
    }
    return criteria
}