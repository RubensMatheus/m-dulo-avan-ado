const http = require('http')
const { v4: uuidv4 } = require('uuid')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/aluno":
      aluno(res, req)
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/json' })
      res.write(JSON.stringify({ "msg": "Path não encontrado", "path": req.url }))
      res.end()
  }
})

server.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080')
})

function aluno(res, req) {
  console.log(req.method)
  switch (req.method){
    case 'GET':
        res.writeHead(200, { 'Content-Type': "text/json" })
        res.write(JSON.stringify({ alunos: ["Gustavo", "João"]  }))
        res.end()
        break;
    case 'POST':
        res.writeHead(200, { 'Content-Type': "text/json" })
        res.write(JSON.stringify({ msg: "Aluno criado" }))
        res.end()
        break
    default:
        res.writeHead(400, { 'Content-Type': "text/json" })
        res.write(JSON.stringify({ msg: "Operação não suportada!" }))
        res.end()
        break
}
}
