 var  dbconnect = require("./mongodb")
var dbconenct = require("./mongodb")
var insert= async()=>{
console.log("inserted")
const db= await dbconnect()
// // console.log(db)
var result = await db.insertMany(
    [{

    name :"realme",
    price:760000,
    version:8.343
},
{

    name :"motorola",
    price:89000,
    version:8.343
},
{

    name :"oppo",
    price:10000,
    version:2.343
}])

if(result.acknowledged){
    console.log("data inserted")
}
}
insert()