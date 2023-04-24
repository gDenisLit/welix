import { userService } from '../user/user.service'
import { logger } from '../../services/logger.service'
import { User } from '../../models/User.model'
import config from '../../config'
import bcrypt from 'bcrypt'
import Cryptr from 'cryptr'

const cryptr = new Cryptr(config.cryptrKey as string)

export const authService = {
    login,
    signup,
    getLoginToken,
    validateToken
}

async function login(username: string, password: string): Promise<User | void> {

    logger.debug(`auth.service - login with username: ${username}`)
    const user = await userService.getByUsername(username)
    if (!user) {
        return Promise.reject('Invalid username or password')
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (isCorrectPassword) {
        delete user.password
        return user
    }
    else {
        return Promise.reject('Invalid username or password')
    }

}

async function signup({ username, password, fullname, imgUrl }: User): Promise<User | void> {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !password || !fullname) return Promise.reject('Missing required signup information')

    const userExist = await userService.getByUsername(username)
    if (userExist) return Promise.reject('Username already taken')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash, fullname, imgUrl })
}

function getLoginToken(user: User) {
    const userInfo = { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin }
    return cryptr.encrypt(JSON.stringify(userInfo))
}

function validateToken(loginToken: string): User | null {
    try {
        logger.debug('GOT:', loginToken)
        const json = cryptr.decrypt(loginToken)
        const loggedinUser: User = JSON.parse(json)
        return loggedinUser
    } catch (err) {
        logger.error('Invalid login token')
    }
    return null
}