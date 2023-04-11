const express = require('express')
const rotaProdutos = require('./rotas/produtos.rotas')

const app = express()
app.use(express.json())

app.use('/produtos', rotaProdutos)


app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})