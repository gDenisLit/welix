import { userService } from './user.service.js'
import { logger } from '../../services/logger.service.js'
import { Request, Response } from 'express'
import { User } from '../../models/User.model.js'

export async function getUser(req: Request, res: Response) {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    }
    catch (err: any) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: 'Failed to get user' })
    }
}

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await userService.query()
        res.send(users)
    }
    catch (err: any) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    }
    catch (err: any) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: 'Failed to delete user' })
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const user: User = {
            username: req.body.username,
            password: req.body.password,
            fullname: req.body.fullname,
            imgUrl: req.body.imgUrl
        }
        const savedUser = await userService.update(user)
        res.send(savedUser)
    }
    catch (err: any) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}