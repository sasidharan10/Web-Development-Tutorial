// require() is used to import modules in js.

const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync("tut36-Animation.html");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent);
});
// server is created

server.listen(80,'127.0.0.1',()=>{
    console.log('Listening on port 80');
    console.log(`Server running at http://127.0.0.1:80`);
});