import type { Wap } from "./Wap.model"

export interface User {
    _id?: string
    fullname?: string
    username?: string
    password?: string
    img?: string
    waps?: Wap[]
}