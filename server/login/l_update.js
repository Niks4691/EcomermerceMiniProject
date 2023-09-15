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
    let u_id = req.body.u_id
    let obj = {
       
        "u_name": req.body.u_name,
        "u_pwd":req.body.u_uwd
    
    }
//connect to mongodb
mcl.connect(url, (err, conn) => {
if (err)
console.log('Error in connection:- ', err)
else {
let db = conn.db('webdata')
db.collection('login').updateOne({ u_id }, { $set: obj }, (err) => {
if (err)
res.json({ 'update': 'Error ' + err })
else {
console.log('Data updated')
res.json({ 'update': 'Success' })
conn.close()
}
})
}
})
})
//export router
module.exports = router