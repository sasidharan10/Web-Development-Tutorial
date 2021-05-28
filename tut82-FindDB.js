// mongo DB Queries

// for finding items having a particular key:value
db.items.find({rating:3.5})
db.items.find({price:12000})

// for greater and less than

db.items.find({rating:{$gt:3.5}})  
db.items.find({rating:{$gte:3.5}})  // greater and equal
db.items.find({rating:{$lt:4.5}})   // less than
db.items.find({rating:{$lte:3.5}})  // less than and equal

// AND operator

db.items.find({rating:{$gt:3.5},price:{$gte:100000}})  

// OR operator (little complicated)

db.items.find({$or:[{rating:{$gt:4.6},price:{$lte:20000}}]})

// to show only necessary attributes
 
db.items.find({rating:{$gte:4}},{name:1})
db.items.find({rating:{$gte:4}},{name:1,price:1})