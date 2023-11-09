import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './Database/dbconfig.js'
import router from './Routers/user.router.js'

const app = express()

dotenv.config()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json())

dbConnect()
app.get('/', (req, res) => { 'The password reset App is working' })

app.use('/api/user',router)

app.listen(PORT,()=>{
    console.log('The app is listening with PORT:',PORT); 
     
})