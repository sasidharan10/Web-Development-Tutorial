const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = '80';

const home = fs.readFileSync('home.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    let url = req.url;
    if (url == '/')
        res.end(home);
    else if (url == '/about.html')
        res.end(about);
    else if (url == '/services.html')
        res.end(services);
    else if (url == '/contact.html')
        res.end(contact);
    else {
        res.statusCode = 404;
        res.end('Error 404 Not Found!!!');
    }
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});
