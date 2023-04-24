import { userService } from "../../services/user.service"
import { User } from "../../models/User.model"
import { ActionContext } from "vuex"
import { RootState } from '../index'

export interface UserState {
    loggedinUser: User | null
}

interface Payload {
    user: User
    credentials: User
}

type Context = ActionContext<UserState, RootState>

export const userStore = {
    state: {
        loggedinUser: null,
    },
    getters: {
        loggedinUser({ loggedinUser }: UserState) {
            return loggedinUser
        },
    },
    mutations: {
        setLoggedinUser(state: UserState, { user }: Payload) {
            state.loggedinUser = user
        },
    },
    actions: {
        async login({ commit }: Context, { credentials }: Payload) {
            try {
                const user = await userService.login(credentials)
                commit({ type: 'setLoggedinUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in login', err)
                throw err
            }
        },
        async signup({ commit }: Context, { credentials }: Payload) {
            try {
                const user = await userService.signup(credentials)
                commit({ type: 'setLoggedinUser', user })
                return user
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async logout({ commit }: Context) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
        async updateUser({ commit }: Context, { user }: Payload) {
            try {
                user = await userService.update(user)
                commit({ type: 'setLoggedinUser', user })
            } catch (err) {
                console.log('userStore: Error in updateUser', err)
                throw err
            }
        },
        loadLoggedinUser({ commit }: Context) {
            try {
                const user = userService.getLoggedinUser()
                if (user) commit({ type: 'setLoggedinUser', user })
            }
            catch (err: any) {
                console.log('userStore:', err.message)
            }
        }
    }
}