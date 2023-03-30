const { error } = require('console')
const fs = require('fs')
const path = require('path')

//Criar uma pasta
/*fs.mkdir(path.join(__dirname, '/teste'),(error) =>{
    if(error){
        return console.log('Erro', error)
    }
    console.log('Pasta criada com sucesso')
})
 */
//Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste' , 'test.txt'), 'Hello Node' ,(error) => {
    if(error){
        return console.log('Erro', error)
    }
    console.log('arquivo Criado com sucesso')
})