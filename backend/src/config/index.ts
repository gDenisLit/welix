import * as dotenv from 'dotenv'
dotenv.config()

export default {
    dbURL: process.env.ATLAS_URL,
    dbName: process.env.DB_NAME,
    cryptrKey: process.env.CRYPTER_KEY,
    port: process.env.PORT || 3030,
    corsOptions: {
        origin: [
            'http://127.0.0.1:5173',
            'http://localhost:5173'
        ],
        credentials: true
    },
}
