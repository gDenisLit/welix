import fs from 'fs'
import asyncLocalStorage from './als.service'
import { Args, Logger } from '../models/Logger.model'

const logsDir = './logs'
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

function getTime() {
    const now = new Date()
    return now.toLocaleString('he')
}

function doLog(level: string, ...args: Args) {

    let info: string = args.map(arg =>
        (typeof arg === 'string') ?
            arg :
            JSON.stringify(arg)
    ).join(' | ')

    const store = asyncLocalStorage.getStore()
    const userId = store?.loggedinUser?._id

    const userIdStr = userId ? `(userId: ${userId})` : ''
    info = `${getTime()} - ${level} - ${info} ${userIdStr}\n`
    console.log(info)
    fs.appendFile('./logs/backend.log', info, (err) => {
        if (err) console.error('FATAL: cannot write to log file')
    })
}

export const logger: Logger = {
    debug(...args) {
        if (process.env.NODE_NEV === 'production') return
        doLog('DEBUG', ...args)
    },
    info(...args) {
        doLog('INFO', ...args)
    },
    warn(...args) {
        doLog('WARN', ...args)
    },
    error(...args) {
        doLog('ERROR', ...args)
    }
}