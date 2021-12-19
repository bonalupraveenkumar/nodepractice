const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our Homepage !')
}
if(req.url === '/aboutUs'){
    res.end('This is aboutus page')
}
res.end(`
<h1>OOOPS !</h1>
<p>we can't seem to find the page you are looking for</p>
<a href="/">Back Home</a>
`)
})
server.listen(5000)