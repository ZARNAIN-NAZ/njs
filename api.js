const express = require("express")
const dbconnect =require("./mongodb")
const mongodb = require("mongodb")
const app = express()
app.use(express.json())
app.get("/", async (req,res)=>{
    let  data =await dbconnect()
    data = await data.find().toArray()
    console.log(data)
// res.send({data})
res.send(data)

})


// app.post("/" , async (req,res)=>{
//     // console.log(req.body)
//     let data =await dbconnect();
// let result = await  data.insertOne(req.body)
    
//     res.send(result)
// })

app.put("/:name", async (req,res)=>{
    let data = await dbconnect();
let result = await data.updateOne(
    // {name:"zarnain"},
    // {$set:{class:"masters"}}
    {name:req.params.name},
    { $set:req.body})
    res.send({result:"upadted"})
    })
//     console.log(req.body)
// res.send({result:"upadted"})
// })


app.delete("/:id",async (req,res)=>{
    console.log(req.params.id)
    let data =await dbconnect()
   let result = await  data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(resut)

})
app.listen(4000)