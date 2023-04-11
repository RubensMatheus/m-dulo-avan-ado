const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
app.use(express.json())

const produtos = {}

app.get('/', (req, res) => {
    res.json({msg: "Hello from Express!"})
})

app.get('/produtos', (req, res) => {
    res.json({produtos: Object.values(produtos)})
})

app.post('/produtos', (req, res) => {
    const produto = req.body
    const idProduto = uuidv4()
    produto.id = idProduto
    produtos[idProduto] = produto
    res.json({msg: "produto adicionado com sucesso!"})
})

app.put('/produtos', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]) {
        const produto = req.body
        console.log(req.body)
        produto.id = id
        produtos[id] = produto
        res.json({msg: "produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Aluno não encontrado!"})
    }
})

app.delete('/produtos', (req, res) => {
    const id = req.query.id
    if (id && produtos[id]) {
        delete produtos[id]
        res.json({msg: "produto deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Aluno não encontrado!"})
    }
})

app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})