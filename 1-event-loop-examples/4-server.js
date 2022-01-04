const http = require('http')

const server = http.createServer((req,res)=>  {
    console.log('Request Event');
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('server listening on port 5000 .....');
})