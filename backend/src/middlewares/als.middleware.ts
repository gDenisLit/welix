import { authService } from '../api/auth/auth.service'
import asyncLocalStorage, { Store } from '../services/als.service'
import { Request, Response, NextFunction } from 'express'
import { logger } from '../services/logger.service'

async function setupAsyncLocalStorage(req: Request, res: Response, next: NextFunction) {
    const storage: Store = {
        loggedinUser: null!
    }
    asyncLocalStorage.run(storage, () => {
        const { loginToken } = req.cookies
        if (!loginToken) return next()

        const loggedinUser = authService.validateToken(loginToken)

        if (loggedinUser) {
            const alsStore = asyncLocalStorage.getStore()
            if (!alsStore) {
                logger.error('Had error with alsStore: ALS Middlewere ')
                return
            }
            alsStore.loggedinUser = loggedinUser
        }
        next()
    })
}

export default setupAsyncLocalStorage