import express from 'express'
import { requireAdmin } from '../../middlewares/requireAuth.middleware'
import { getUser, getUsers, deleteUser, updateUser } from './user.controller'

const router = express.Router()

router.get('/', requireAdmin, getUsers)
router.get('/:id', requireAdmin, getUser)
router.put('/:id', requireAdmin, updateUser)
router.delete('/:id', requireAdmin, deleteUser)

export default router