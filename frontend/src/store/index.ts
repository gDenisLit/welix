import { createStore, Store } from 'vuex'
import { itemStore, ItemState } from './modules/item.store'
import { UserState, userStore } from './modules/user/user.store'


export interface RootState {
    itemStore: ItemState,
    userStore: UserState
}

const store: Store<RootState> = createStore({
    strict: import.meta.env.NODE_ENV !== 'production',
    modules: {
        itemStore,
        userStore
    }
})

export default store