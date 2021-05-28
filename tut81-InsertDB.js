// inserting items in mongo db

db.items.insertOne({name:"samsung s10",price:12000,rating:4.5,stock:250,sold:1250})
db.items.insertOne({name:"oneplus 8t",price:84000,rating:4.6,stock:455,sold:1900,camera:4})

// inserting many items at once

db.items.insertMany([{name:"samsung s10",price:12000,rating:4.5,stock:250,sold:1250},{name:"moto g6",price:20000,rating:4.2,stock:163,sold:2365},{name:"iphone 12",price:120000,rating:4.0,stock:1460,sold:360}])

db.items.insertOne({name:"iphone 12",price:120000,rating:4.0,stock:1460,sold:360})