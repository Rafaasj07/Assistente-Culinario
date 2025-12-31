import express from 'express'
import receitasRoute from './src/routes/receitasroute.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173', 
};

app.use(cors(corsOptions));

app.use(express.json())

app.use('/api/receitas', receitasRoute)
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})