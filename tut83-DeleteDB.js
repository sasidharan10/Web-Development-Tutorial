// deletion in mongo db

//deletes the first entry having the given criteria

db.items.deleteOne({price:12000})

// deleting multiple items having same key:value

db.items.deleteMany({price:120000})