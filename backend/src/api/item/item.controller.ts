import { itemService } from './item.service'
import { logger } from '../../services/logger.service'
import { Request, Response } from 'express'
import { FilterBy } from '../../models/FilterBy.model'

export async function getItems(req: Request, res: Response) {
    try {
        const filterBy: FilterBy = {
            txt: req.query.txt as string || ''
        }
        logger.debug('Getting Items | Filter:', filterBy)
        const items = await itemService.query(filterBy)
        res.json(items)
    }
    catch (err: any) {
        logger.error('Failed to get items', err)
        res.status(500).send({ err: 'Failed to get items' })
    }
}

export async function getItemById(req: Request, res: Response) {
    try {
        const itemId = req.params.id
        const item = await itemService.getById(itemId)
        res.json(item)
    }
    catch (err: any) {
        logger.error('Failed to get item', err)
        res.status(500).send({ err: 'Failed to get item' })
    }
}

export async function addItem(req: Request, res: Response) {
    try {
        const item = {
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl
        }
        const addedItem = await itemService.add(item)
        res.json(addedItem)
    }
    catch (err: any) {
        logger.error('Failed to add item', err)
        res.status(500).send({ err: 'Failed to add item' })
    }
}

export async function updateItem(req: Request, res: Response) {
    try {
        const item = {
            _id: req.body._id,
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl
        }
        const updatedItem = await itemService.update(item)
        res.json(updatedItem)
    }
    catch (err: any) {
        logger.error('Failed to update item', err)
        res.status(500).send({ err: 'Failed to update item' })
    }
}

export async function removeItem(req: Request, res: Response) {
    try {
        const itemId = req.params.id
        const removedId = await itemService.remove(itemId)
        res.send(removedId)
    }
    catch (err: any) {
        logger.error('Failed to remove item', err)
        res.status(500).send({ err: 'Failed to remove item' })
    }
}