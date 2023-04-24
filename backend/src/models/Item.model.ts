import { ObjectId } from 'mongodb'

export interface Item {
    name: string;
    price: number;
    _id?: ObjectId
    imgUrl: string;
}