const express = require("express")
const dbconnect =require("./mongodb")
const app = express()
app.use(express.json)
app.get("/", async(req,res)=>{
    let  data =await dbconnect()
    data = await data.find().toArray()
    console.log(data)
res.send({data})

})


app.post("/" , async(req,res)=>{
    // console.log(req.body)
    let data =await dbconnect();
let result = data.insertOne(req.body)
    
    res.send(result)
})
app.listen(5000)