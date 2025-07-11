import express from 'express'
import receitasRoute from './src/routes/receitasroute.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(express.json())

app.use('/api/receitas', receitasRoute)
app.listen(PORT, () =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})