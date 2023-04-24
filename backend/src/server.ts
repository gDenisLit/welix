import express from 'express'
import _http from 'http'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import config from './config/index'
import asyncLocalStorage from './middlewares/als.middleware'
import authRoutes from './api/auth/auth.routes'
import userRoutes from './api/user/user.routes'
import itemRoutes from './api/item/item.routes'
import { logger } from './services/logger.service'

const app = express()
const http = _http.createServer(app)

app.use(express.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    app.use(cors(config.corsOptions))
}

// Declare routes
app.all('*', asyncLocalStorage)
app.use('/api/item', itemRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

app.get('/*', (req, res) => {
    const publicPath = path.join(process.cwd(), 'public')
    res.sendFile(path.join(publicPath, 'index.html'))
})

http.listen(config.port, () => {
    logger.info('Server Ready on: http://127.0.0.1:' + config.port)
})