use("mongodbVSCodePlaygroundDB")
// console.log(db)

// db.createCollection("course")
// db.courses.insertOne({name:"introdunction to java free course tutorial",
//     price: 0,
//     projects: 12,
//     toughness : "moderate"
// })
// db.sales.updateOne({teacher:"Avnish Srivastava"},{$set:{teacher: "Sonal Srivastava"}})
// console.log(a)

let x = db.sales.deleteMany({price: 15000})
console.log(x)