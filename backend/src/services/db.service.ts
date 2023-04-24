import config from '../config'
import { logger } from './logger.service'
import * as mongodb from 'mongodb'

const { MongoClient } = mongodb

export const dbService = {
    getCollection
}

let DB_CONNECTION: mongodb.Db = null!

async function getCollection(collectionName: string) {
    try {
        const db = await connect()
        const collection = db.collection(collectionName)
        return collection
    }
    catch (err: any) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    if (DB_CONNECTION) return DB_CONNECTION
    try {
        const client = await MongoClient.connect(config.dbURL as string)
        const db = client.db(config.dbName)
        DB_CONNECTION = db
        return db
    }
    catch (err: any) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}