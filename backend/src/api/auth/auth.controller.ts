import { authService } from './auth.service'
import { logger } from '../../services/logger.service'
import { Request, Response } from 'express'

export async function login(req: Request, res: Response) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        if (user) {
            const loginToken = authService.getLoginToken(user)
            logger.info('User login: ', user)
            res.cookie('loginToken', loginToken, { sameSite: 'none', secure: true })
            res.json(user)
        }
    }
    catch (err: any) {
        logger.error('Failed to Login ', err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

export async function signup(req: Request, res: Response) {
    try {
        const credentials = {
            username: req.body.username,
            fullname: req.body.fullname,
            password: req.body.password,
            imgUrl: req.body.imgUrl
        }

        const account = await authService.signup(credentials)
        if (account) logger.debug(`auth.route - new account created: `, account)

        const user = await authService.login(
            credentials.username,
            credentials.password
        )

        if (user) {
            logger.info('User signup:', user)
            const loginToken = authService.getLoginToken(user)
            res.cookie('loginToken', loginToken, { sameSite: 'none', secure: true })
            res.json(user)
        }
    }
    catch (err: any) {
        logger.error('Failed to signup ', err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

export async function logout(req: Request, res: Response) {
    try {
        res.clearCookie('loginToken')
        res.send({ msg: 'Logged out successfully' })
    }
    catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}