import { logger } from '../../services/logger.service'
import { dbService } from '../../services/db.service'
import { User } from '../../models/User.model'
import * as mongodb from 'mongodb'
const { ObjectId } = mongodb

export const userService = {
    query,
    getById,
    getByUsername,
    remove,
    update,
    add
}

const COLLECTION_NAME = 'user'

async function query() {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const users: User[] = await collection.find().toArray()
        users.forEach(user => delete user.password)
        return users
    }
    catch (err: any) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function getById(userId: string) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const user = await collection.findOne({ _id: new ObjectId(userId) })
        if (!user) return
        delete user.password
        return user
    }
    catch (err: any) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}

async function getByUsername(username: string) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        const user = await collection.findOne({ username })
        return user
    }
    catch (err: any) {
        logger.error(`while finding user by username: ${username}`, err)
        throw err
    }
}

async function remove(userId: string) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        await collection.deleteOne({ _id: new ObjectId(userId) })
    }
    catch (err: any) {
        logger.error(`cannot remove user ${userId}`, err)
        throw err
    }
}

async function update(user: User) {
    try {
        user._id = new ObjectId(user._id)
        const collection = await dbService.getCollection(COLLECTION_NAME)
        await collection.updateOne({ _id: user._id }, { $set: user })
        return user
    }
    catch (err: any) {
        logger.error(`cannot update user ${user._id}`, err)
        throw err
    }
}

async function add(user: User) {
    try {
        const collection = await dbService.getCollection(COLLECTION_NAME)
        await collection.insertOne(user)
        return user
    }
    catch (err: any) {
        logger.error('cannot add user', err)
        throw err
    }
}