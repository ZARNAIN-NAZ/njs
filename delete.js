const dbconnect = require("./mongodb")
let deleteData =async ()=>{
    let data =await dbconnect()
let result = await data.deleteMany({
name:"areeba" , 
})
console.log(data)
if(result.acknowledged==true)
{
    console.log("deleted record")
}}
deleteData();