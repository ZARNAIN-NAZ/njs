const dbconnect = require("./mongodb")
const updatedata= async()=>{
let data = await  dbconnect()
let result = await data.updateOne(
    { name:"areeba" },
    { $set:{name:"areebakhan" } }
)
if(result.acknowledged == true){
    console.log("updated!")
    }
console.log(result)
}

updatedata()