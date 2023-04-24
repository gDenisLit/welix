import type { Cmp } from "./Cmp.model"
import type { User } from "./User.model"

export interface Wap {
    _id?: string
    name: string
    imgUrl: string
    type: string
    style: Object
    createdBy?: User
    usersData: Object
    theme: string
    isPublic: boolean
    cmps: Cmp[],
    class: string
}