import { ObjectId } from 'mongodb'

export interface User {
    _id?: ObjectId
    username?: string,
    password?: string,
    fullname?: string,
    isAdmin?: boolean,
    imgUrl?: string
}