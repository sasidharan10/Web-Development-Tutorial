const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STuFFS
app.use("/static", express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFFS
app.set('view engine', 'pug');  // set the template engine as pug
app.set('views', path.join(__dirname, 'views'));  // for setting views directory

// ENDPOINTS

app.get("/", (req, res) => {
    const con = "This is a content you will ever see in your life";
    const params = {
        'title': "PUG Website",
        'content': con
    };
    res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
    console.log(req.body)
    let form = req.body;
    let name = form.name;
    let age = form.age;
    let gender = form.gender;
    let address = form.address;
    let OutputToWrite = `Name :  ${name} \n Age : ${age} \n Gender : ${gender} \n Address : ${address}`;
    fs.writeFileSync('output.txt', OutputToWrite);
    const params = { 'message': "The given data is stored successfully" };
    res.status(200).render("index.pug", params);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`the application started successfully at port : ${port}`);
});