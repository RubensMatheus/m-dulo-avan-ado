const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //console.log(req.url)
    //console.log(req.method)
    switch (req.url) {
        case '/':
            fs.readFile('./index.html', function (err, data){
                    if (!err){
                        res.writeHead(200, { 'Content-Type': "text/html" })
                        res.write(data)
                        res.end()
                    }
                })
            break;
    
        default:
            fs.readFile('./404.html', function (err, data){
                if (!err){
                    res.writeHead(404, { 'Content-Type': 'text/html' })
                    res.write(data)
                    res.end()
                }
            })
            break;
    }
})

server.listen(8080, () => {
    console.log('Servidor pronto na porta 8080!')
})