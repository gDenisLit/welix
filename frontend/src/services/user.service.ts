import { storageService } from './storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'
import type { User } from '../models/User.model'

const LOGGEIN_USER_KEY = 'loggedinUser'
const USER_KEY = 'user_db'
const ENV = import.meta.env.VITE_ENV
const API = 'auth'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    update,
}

async function login(credentials: User) {
    const user = ENV === 'local' ?
        await _checkLogin(credentials) :
        await httpService.post(`${API}/login`, credentials)

    return (user) ? saveLocalUser(user) : null
}

async function signup(credentials: User) {
    if (!credentials.imgUrl) credentials.imgUrl = utilService.getIcon('user')

    const user = ENV === 'local' ?
        await storageService.post(USER_KEY, credentials) :
        await await httpService.post(`${API}/signup`, credentials)

    return saveLocalUser(user)
}

async function logout() {
    return ENV === 'local' ?
        sessionStorage.removeItem(LOGGEIN_USER_KEY) :
        await httpService.post(`${API}/logout`)
}

async function update(user: User) {
    const savedUser = ENV === 'local' ?
        await storageService.put(USER_KEY, user) :
        await httpService.put(`${API}/${user._id}`, user)

    saveLocalUser(savedUser)
    return savedUser
}

async function _checkLogin(credentials: User) {
    const users = await storageService.query(USER_KEY)
    const user = users.find((user: User) =>
        user.username === credentials.username &&
        user.password === credentials.password
    )
    if (user) return user
    else throw new Error('Wrong credentials')
}

function saveLocalUser({ _id, fullname, imgUrl }: User) {
    const user = { _id, fullname, imgUrl }
    sessionStorage.setItem(LOGGEIN_USER_KEY, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    const user = sessionStorage.getItem(LOGGEIN_USER_KEY)
    if (!user) throw new Error('No loggedin user')
    else return JSON.parse(user)
}

; (async () => {
    if (ENV !== 'local') return

    const users = await storageService.query(USER_KEY)
    if (!users || !users.length) {
        await signup({ fullname: 'Puki Norma', username: 'puki', password: '123', isAdmin: false })
        await signup({ fullname: 'Master Adminov', username: 'admin', password: '123', isAdmin: true })
        await signup({ fullname: 'Muki G', username: 'muki', password: '123', isAdmin: false })
        await storageService.postMany(USER_KEY, users)
    }
})()