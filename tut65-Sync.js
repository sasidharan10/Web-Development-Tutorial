// Synchronous or Blocking
// - line by line execution

// Synchronous or Blocking
// - line by line execution NOT Guaranteed

const fs = require("fs");
fs.readFile("Tutorial/reading.txt","utf-8",(err,data)=>{
console.log("Error : ",err,"\nContent : ",data);
});
console.log("This is a message ");

// readFile(file_path,encoding, callback-fn());  syntax
// (err,data) = 'err' refers to error and 'data' stores the content.
// the message is printed first because it is  asynchronous.
// the file will be reading and the call_back() will execute later while all other statement are executed.