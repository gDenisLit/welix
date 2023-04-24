import { userService } from "../../../services/user.service"
import { Context, Payload, setLoggedinUser } from "./user.store"

export const userActions = {
    login,
    signup,
    logout,
    updateUser,
    loadLoggedinUser
}

async function login({ commit }: Context, { credentials }: Payload) {
    try {
        const user = await userService.login(credentials)
        commit(setLoggedinUser(user))
        return user
    } catch (err) {
        console.log('userStore: Error in login', err)
        throw err
    }
}

async function signup({ commit }: Context, { credentials }: Payload) {
    try {
        const user = await userService.signup(credentials)
        commit(setLoggedinUser(user))
        return user
    } catch (err) {
        console.log('userStore: Error in signup', err)
        throw err
    }
}

async function logout({ commit }: Context) {
    try {
        await userService.logout()
        commit(setLoggedinUser(null))
    } catch (err) {
        console.log('userStore: Error in logout', err)
        throw err
    }
}

async function updateUser({ commit }: Context, { user }: Payload) {
    try {
        user = await userService.update(user)
        commit(setLoggedinUser(user))
    } catch (err) {
        console.log('userStore: Error in updateUser', err)
        throw err
    }
}

function loadLoggedinUser({ commit }: Context) {
    try {
        const user = userService.getLoggedinUser()
        if (user) commit(setLoggedinUser(user))
    }
    catch (err: any) {
        console.log('userStore:', err.message)
    }
}