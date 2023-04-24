import { AsyncLocalStorage } from 'async_hooks'
import { User } from '../models/User.model'

export interface Store {
    loggedinUser: User
}

const asyncLocalStorage: AsyncLocalStorage<Store> = new AsyncLocalStorage()
export default asyncLocalStorage