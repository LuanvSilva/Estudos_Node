const htpp = require('http')

const port = 8080

const server =  htpp.createServer((req, res) =>{
    if(req.url == "/home" ){
        res.writeHead(200,{"Content-Type": "text/html"})
        res.end("<h1>Home page</h1>")
    }
})
server.listen(port,()=> console.log(`Rodando na porta ${port}`))
