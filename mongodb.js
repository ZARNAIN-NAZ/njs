const { MongoClient } = require("mongodb")
// const mongoClient= require("mongodb").mongoClient
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);
const database = "e-comm"

async function dbconnect() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection("products")
}
module.exports=dbconnect;