import { logger } from '../services/logger.service'
import asyncLocalStorage, { Store } from '../services/als.service'
import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User.model'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    const loggedinUser = _getUserFromStore()

    if (loggedinUser) {
        return next()
    }
    else {
        return res
            .status(401)
            .send('Not Authenticated')
    }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
    const loggedinUser = _getUserFromStore()

    if (!loggedinUser) {
        return res
            .status(401)
            .send('Not Authenticated')
    }
    if (loggedinUser.isAdmin) {
        return next()
    }
    else {
        logger.warn(`${loggedinUser.fullname} attempted to perform admin action`)
        return res.status(403).end('Not Authorized')
    }
}

function _getUserFromStore(): User | void {
    const alsStore = asyncLocalStorage.getStore()
    if (!alsStore) {
        logger.error('Had error with alsStore: ALS Middlewere ')
        return
    }
    return alsStore.loggedinUser
}