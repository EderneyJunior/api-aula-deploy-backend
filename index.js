require('dotenv').config()
const express = require('express')
const cors = require('cors')
const knex = require('./conexao')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    const carros = await knex(process.env.BD_NAME)
    return res.json(carros)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))