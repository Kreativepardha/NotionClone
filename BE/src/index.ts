import express from 'express'
import 'dotenv/config'
import { mainRouter } from './routes/mainRouter'
import { generalLimiter } from './utils/config/rateLimit'


const app = express()
const PORT = process.env.PORT || 2000

app.use(generalLimiter)

app.use('/api/v1', mainRouter)


app.listen(PORT, () => console.log(`PORT connected at PORT: ${PORT}`))

