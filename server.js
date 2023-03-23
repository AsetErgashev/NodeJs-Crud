import express from 'express'
import mongoose from 'mongoose'
import postRoutes from './posts/posts.routes.js'

const db = `mongodb+srv://aset:test123@merndb.ohcrb54.mongodb.net/?retryWrites=true&w=majority`
const app = express()
const port = 6000

app.use(express.json())

app.use('/api', postRoutes)

async function start() {
    await mongoose.connect(db)
    app.listen(port,()=> (
        console.log('Server running on port 6000')
    ))
}

start()
