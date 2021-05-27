const fs = require("fs");
let txt = fs.readFileSync("reading.txt", "utf-8");  // reading
txt = txt.replace("Hello"," Welcome"); // editing
console.log("The content of the file is",txt);

console.log("Writing and creating a new file...");
let wrt = "Hello everyone, This is java Script";
fs.writeFileSync("writing.txt",wrt);  // creating a file 
console.log("The content of the file is : ",wrt);
