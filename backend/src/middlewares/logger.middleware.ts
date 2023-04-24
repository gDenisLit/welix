import { logger } from '../services/logger.service.js'
import { Request, Response, NextFunction } from 'express'

async function log(req: Request, res: Response, next: NextFunction) {
    // logger.info('Sample Logger Middleware')
    console.log('log')
    next()
}

export default log