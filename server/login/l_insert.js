//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//create rest api
router.post("/", (req, res) => {
let obj = {
    "u_id":req.body.u_id,
    "u_name": req.body.u_name,
    "u_pwd":req.body.u_pwd,
    "u_email":req.body.u_email,
    // "u_mobileno":req.body.u_mobileno,
    // "u_addrees": req.bodyu_addrees,
  
}
//connect to mongodb
mcl.connect(url, (err, conn) => {
if (err)
console.log('Error in connection:- ', err)
else {
let db = conn.db('webdata')
db.collection('login').insertOne(obj,(err)=>{
if(err)
res.json({'insert':'Error '+err})
else{
console.log('Data inserted')
res.json({'insert':'Success'})
conn.close()
}
})
}
})
})
//export router
module.exports = router
