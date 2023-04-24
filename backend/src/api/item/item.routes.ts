import express from 'express'
import log from '../../middlewares/logger.middleware'
import { requireAuth } from '../../middlewares/requireAuth.middleware'
import { getItems, getItemById, addItem, updateItem, removeItem } from './item.controller'

const router = express.Router()

router.get('/', log, getItems)
router.get('/:id', getItemById)
router.post('/', requireAuth, addItem)
router.put('/', requireAuth, updateItem)
router.delete('/:id', requireAuth, removeItem)

export default router