const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = '80';

// EXPRESS SPECIFIC STuFF

app.get('/', (req,res)=> {
    res.sendFile(__dirname + '/views/home.html');
   });
app.get("/about", (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});
app.get("/services", (req, res) => {
    res.sendFile(__dirname + '/views/services.html');
});

app.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});


// if using a template then use this : 

// app.engine('html', require('ejs').renderFile);

// app.get('/', function(req,res) {
//  res.render(__dirname + '/index.html');
// });
