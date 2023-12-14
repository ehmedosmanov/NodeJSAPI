import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import movieRoutes from './routes/movieRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())



const URL = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)
const PORT = process.env.PORT

mongoose.connect(URL).catch((err) => console.log(err))

app.use('/movies', movieRoutes)

app.use('/categories', categoryRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT - ${PORT}`);
})