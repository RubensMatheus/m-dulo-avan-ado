const express = require('express')
const router = express.Router()
const produtosMid = require('../middewere/validarProduto.middewere')
const { produtos } = require('../db/models')

router.post('/', produtosMid)
router.put('/', produtosMid)

//const produtos = {}

router.get ('/', async (req, res) => {
    const produto = await produtos.findAll()
    res.json({produtos: produto})
})

router.post('/', async (req, res) => {

    const produto = await produtos.create(req.body)
    res.json({msg: "produto adicionado com sucesso!"})       

})

router.put('/', async (req, res) => {

    const id = req.query.id
    const produto = await produtos.findByPk(id)

    if (produto) {
        produto.nome = req.body.nome
        produto.descricao = req.body.descricao
        produto.preco = req.body.preco
        produto.tags = req.body.tags
        await produto.save()
        res.json({msg: "produto atualizado com sucesso!"})
    }else{
        res.status(400).json({msg: "Aluno não encontrado!"})
    }
})

router.delete('/', async (req, res) => {

    const id = req.query.id
    const produto = await produtos.findByPk(id)

    if (produto) {
        await produto.destroy() 
        res.json({msg: "produto deletado com sucesso!"})
    }else{
        res.status(400).json({msg: "Aluno não encontrado!"})
    }
})

module.exports = router