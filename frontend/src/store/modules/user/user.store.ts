import { ActionContext } from "vuex"
import { User } from "../../../models/User.model"
import { RootState } from "../.."
import { userActions } from "./user.actions"

export interface UserState {
    loggedinUser: User | null
}

export interface Payload {
    type: string
    user: User
    credentials: User,
}

export type Context = ActionContext<UserState, RootState>

export function setLoggedinUser(user: User | null) {
    return {
        type: 'setLoggedinUser',
        user
    }
}

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
    actions: userActions
}