// Updation in mongo DB

//it has two identifiers
db.items.updateOne({name:"Samsung s10"},{$set:{name:"samsung s10"}})

// to update many items having same key:value

db.items.updateMany({name:"oneplus 8t"},{$set:{price:1,rating:1}})