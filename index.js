// console.log("s")
// var a =90;
// var s=89
// var t =8;
// var sum = a+s+t;
// console.warn(sum)
// var z= require('./import')
// var a =20;
// if(a==20){
//     console.log("matched")
// }
// for(i=0; i<10;i++){
//     console.log(i)
// }
// const arr =[ 78,343,23,242]
// // console.log(arr[3]-arr[1])
// // console.log(z)
// // console.log(z.ali())
//  var r =arr.filter((i)=>{
// return i<90;
// }) 
// console.log(r)
// const s = require("fs").writeFileSync;
// s("z.js","practice")
// console.log("code hello")
// console.log("-->" , __dirname);
// s.writeFileSync("hello.txt2" , "zarnain")
//------------------------------------------------https  create server------------------------
// const h = require("http")
// h.createServer((req,res)=>{
//  res.write("this is zarnain");
//  res.end();
// }).listen(3000)

// let t = require("http");
// const { Http2ServerRequest } = require("http2");
// const { Http2ServerRequest } = require("http2");
// let d=(req,res)=>


// // function d (res,rep)
// {
//    rep.write("hello i am zarnain")
//    rep.end()
// }
// t.createServer(d).listen(3000);
// function tt(q){
//    return q* 900;
// }
// let r = (o)=>{
//    a*100
// }
// t.createServer((req,res)=>{
//    res.write("hello")
//    res.end()
// }).listen(3000);
//---------------------------------package json ------------------------
// console.log("pkg json")
// const co = require("colors")
// console.log("hello".bgBlue)

// console.log("zarnain naz here  pp")
// const http = require("http")
// const data =require("./data")
// http.createServer((req , res)=>{
//    res.writeHead(200, {'Content-Type' :'application\json'})
// res.write(JSON.stringify(data))
// res.end();
// }).listen(5000)
//-------------------input from command line -----
// const z=require("fs")
// const input =process.argv;
// if(input[2]=="add"){
//    z.writeFileSync(input[3], input[4])
// }
// else if(input[2]=="remove"){
// z.unlinkSync(input[3])

// }
// else{
//    console.log("invalid ")
// }
//---------------------create multiple files in folde(show file list)r-------

// const f = require("fs")
// const p = require("path")
// const d= p.join(__dirname,"files")
// // for(i=0; i<5;i++){
// //    f.writeFileSync(d+"/hello"+i+".txt" , "a simple file ")
// // }
// f.readdir(d,(error, files)=>{
// files.forEach((item)=>{
//    console.log(item)
// })
// })
//---------------------crud file system---------------------------------
// const f = require("fs")
// const p =require('path')
// const d =p.join(__dirname , "crud")
// const t = `${d}/f.txt`
// f.writeFileSync(`${d}/f.txt` , "this is creating file" )
// f.readFile(t , (e,f)=>{
//    console.log(f)
// })
// f.appendFile(t, "and file name is f.txt",(err)=>{
//    if(!err){
//       console.log("file updated!")
//    }
// })
// f.rename(t,`${d}/fxx.txt` , (err)=>{
//    if(!err){
//             console.log("file rename")
//          }
// }
// )
// f.unlinkSync(`${d}/fxx.txt`)
//---------------------asynchronous basics ------------ 
// var a = 2;
// var b= 3;
// let w =new Promise((res,rej)=>{
//     setTimeout(()=>{  
//        res(30)
//     },1000)
// })
// w.then((data)=>{
//     b=data;

//  console.log(a+b)
// })
// console.log(a+b)
//------------------------------------call stack , node API'S , callback queue (event loop)
// console.log("1st run")
// setTimeout(()=>{
//     console.log("4th")
// },2000)
// setTimeout(()=>{
//     console.log("3rd")
// },0)
// console.log("2nd run ")
//-----------------------------------------ExpressJS----------------
// const express =require('express')
// const app = express()
// app.get("" , (req, res)=>{
//     console.log("<h1>data sent by browser<h1>" ,req.query.name)
// res.send("hello ",+req.query.name)
// })
// app.get("/about" , (req, res)=>{
//     res.send("hello , this is about page!")
//     })
//     app.listen(5000)
//====================render html and json--------------------------
// const express =require('express')
//     const app = express()
//     app.get("" , (req, res)=>{

//         res.send(`<h1>hello this is home page <h1> <a href= "/about"> GO TO ABOUT</a> `)
//     });
//         app.get("/about" , (req, res)=>{
//     res.send(`
//     <input type ="text"
//  placeholder ="username"  
//  value= "${req.query.name}" /> 
//  <button>Click Me</button>
//  <a href="/help">GO TO HOME </a>
//     `)
//     })
//     app.get("/help" , (req,res)=>{
//         res.send([{
//             name:"zarnain",
//             email:"abc@gmail.com"
//         }])
//     })
//     app.listen(5000)
//---------------------------make html pages------------------------------
// const express =require("express");
// const path = require("path")
// const app  = express()
// // console.log(__dirname)
// const publicpath = path.join(__dirname , "public")

// app.set("view engine" , "ejs")
// // app.use(express.static(publicpath))
// app.get('/home',(req,res)=>{
// res.sendFile(`${publicpath}/index.html`)
// })

// app.get('/profile',(req,res)=>{
// //    res.render("profile")
// const user={
// name:"zarnain",
// email:"zar@gmail.com",
// country:"pakistan",
// skills:["php" , "js" , "c++"]
// }
// res.render("profile" ,{user})
//     })
//     app.get("/login" ,(_,res)=>{
// res.render("login")
//     })



// app.get("*",(res,req)=>{
// req.sendFile(`${publicpath}/nopage.html`)
// })
// app.listen(4000)
//--------------------------------middleware----------------------------------------
// const express = require('express')
// const reqfilter = require("./middleware")
// const app = express()
// const route= express.Router( )

// const reqfilter = (req,res,next)=>{
// console.log(reqfilter)
//     if(!req.query.age){
// res.send("please provide age")
//     }
//     else if(req.query.age<18){
// res.send("you cant access the account ")
//     }
//    else{
//     next()
//    }
// }

// route.use(reqfilter);
// app.get("/" , (req,res)=>{
//     res.send("Welcome to home page")
// })

// app.get("/users" , (req,res)=>{
//     res.send("welcome to users page")
// })
// route.get("/about" , (req,res)=>{
//     res.send("welcome to about  page")
// })
// route.get("/contact" , (req,res)=>{
//     res.send("welcome to  contact page")
// })
// app.use("/" , route)
// app.listen(5000)
//---------------------connect node with mongodb---------------
// const { MongoClient, Collection, Db } = require("mongodb")
// const mongoClient= require("mongodb").mongoClient

// const dbconnect =require("./mongodb")
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url);
// const database = "e-comm"


//  async function getData(){
//     let result = await client.connect();
//     let  db =  result.db(database);
//     let  collection=db.collection("products")
//     let response= await collection.find({name:"n.40"}).toArray()
//     console.log(response)
// }
// getData();

// async function dbconnect() {
//     let result = await client.connect();
//     db = result.db(database);
//     return db.collection("products")
// }
// dbconnect().then((res) => {
//     // console.log(res.find().toArray())
//     res.find({ brand: "samsung" }).toArray().then((data) => {
//         console.log(data)
//     })
// })

// const main= async()=>{
// let data= await dbconnect()
// data =await  data.find().toArray();
// console.log(data)
// }
// main()
// ---------------------------mongoose---------------
// const mongoose = require("mongoose")
// // const saveindb = async () => {
//      mongoose.connect("mongodb://localhost:27017/e-comm")
//     const productSchema = new mongoose.Schema({
//         name: String,
//         price:Number,
//         catogory : String,
//         brand: String
//     })
//     const saveindb = async () => {
//     const productsModel = mongoose.model("products", productSchema)
//     let data = new productsModel({ name: "moto", price:56000,catogory:"motoe4", brand: "moto" })
//     let result = await data.save()
//     console.log(result)
// }
// // --------------updAte in db ---------------
// const updateInDb = async()=>{
//     let product  =  mongoose.model("products" , productSchema)
//     let data =await product.updateOne(
//        { name:"moto"},
//  {$set:{price:700}}
//     )
//     console.log(data)
// }
// updateInDb()

// //----------------delete in db--------------------------------------------
// const DeleteInDb = async()=>{
//     let product = mongoose.model("products " , productSchema)
// let data = await product.deleteOne({
//     name:"oppo"
// })
// console.log(data)
// }
// // DeleteInDb()

// //-----------------------------find in db---------------------
// const FindInDb = async()=>{
// let product = mongoose.model("products" , productSchema)
// let data = await product.find({name:"oppo"})
// console.log(data)
// }
// FindInDb()
// ----------------api connenction with diiff pages--------
// const express = require("express")
// require("./config")
// const product =require("./product")
// const app = express()

// app.use(express.json())
// app.post("/create",async(req,res)=>{
//     let data = new  product(req.body)
//     let result =await data.save()
//     console.log(req.body)
//     res.send(result)
//     // res.send("finally")
//     // res.send("done")
// })

// app.get("/list",async(req,res)=>{
// let data = await  product.find()
// res.send(data)
// })

// app.put("/update/:_id",async(req,res)=>{
//     console.log(req.params)
//     // let data = await  product.deleteOne(req.params)
//     let data = await  product.updateOne(
//          req.params,
//          {
//             $set:req.body
//         })
//     res.send(data)

//     })
// app.listen(5000) 
//---------------search api's with nodejs mongodb----------------------------------------
// const express = require('express')
// require("./config")
// const product= require("./product")
// const app = express();
// app.use(express.json())
// app.get("/search/:key" , async (req,res)=>{
//     // cosnole.log(req.params.key)
//     let data =await  product.find(
//         {
//             "$or":[{"name":{$regex:req.params.key}},{"brand":{$regex:req.params.key}}]
//         }
//     )
//     // res.send("serach done")
//     res.send(data)
// })
// app.listen(5000)
//---------------------upload file with multer----------------
// const express= require("express")
// const multer = require("multer")
// const app = express()

// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"uploads")
//         },
//             filename:function(req,file,cb)
//         {
//             cb(null,file.fieldname+ "-" +Date.now()+ ".jpg")
//         }
//     })
// }).single("user_file");

// app.post("/upload",upload , (req,res)=>{
//     res.send("file uploading")
// })
// app.listen(5000)
//------------------------------------os module-----------------------
// const os  = require("os")
// // console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())

//--------------------------Events and event emitter in nodejs--------------------
// const express = require("express")
// const EventEmitter = require("events")
//  const app  = express()

//  const event = new EventEmitter()
//  let count =0;


// event.on("countAPI" , ()=>{
//     count++;
//     console.log("event called" , count)
// })
 
// app.get("/" ,(req,res)=>{
//     res.send("  api called")
//     event.emit("countAPI")
// })

// app.get("/" ,(req,res)=>{
//     res.send("api called")
//     event.emit("countAPI")
// })

// app.get("/search" ,(req,res)=>{
//     res.send(" search api called")
//     event.emit("countAPI")
// })


// app.get("/update" ,(req,res)=>{
//     res.send(" update api called")
//     event.emit("countAPI")
// })

// app.listen(4000)

//-----------REPL(read -eval-print - loop)------------------
// let a =90;
// console.log(a++); //90
// all work done in cmd like vscode (eval = evaluation)
