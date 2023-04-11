const readline = require('readline')

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

leitor.question('Escreva um x para função: ', function (resposta) {

    let x = parseFloat(resposta)

    if(isNaN(resposta)){
        console.log('A entrada informada não é um número!')
    }else{
        var y = (x**2) + (5 * x) + 100
        console.log(y)
    }

    leitor.close()
})