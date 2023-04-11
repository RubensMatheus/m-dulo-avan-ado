const produtosSchema = require('..//schema/produtos.schema')
const Ajv = require('ajv')
const ajv = new Ajv()

function validarProduto(req, res, next){
    const produto = req.body

    const validate = ajv.compile(produtosSchema)
    const valid = validate(produto)

    if (valid) {
        next()
    }else{
        res.status(400).json({msg: "Dados inválidos", errors: validate.errors})
    }

}

module.exports = validarProduto