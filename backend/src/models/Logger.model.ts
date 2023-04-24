import { FilterBy } from "./FilterBy.model"
import { Item } from "./Item.model"
import { User } from "./User.model"

type LogLevel = "debug" | "info" | "warn" | "error"

export type Logger = {
    [level in LogLevel]: (...args: Args) => void
}

export type Args = (Item | Item[] | User | User[] | FilterBy | Error | string | number)[]