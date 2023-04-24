import { createStore, Store } from 'vuex'
import type { UserState } from './modules/user/user.store'
import { userStore } from './modules/user/user.store'

export interface RootState {
    userStore: UserState
}

const store: Store<RootState> = createStore({
    strict: import.meta.env.NODE_ENV !== 'production',
    modules: {
        userStore
    }
})

export default store