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
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});


dbConnect()
app.get('/', (req, res) => { res.send('The password reset App is working') })

app.use('/api/user',router)

app.listen(PORT,()=>{
    console.log('The app is listening with PORT:',PORT); 
     
})