//import modules express body-parser cors
let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({extended:false}))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 8070
//import fetch insert update delete modules for products
let fetch = require('./products/p_fetch')
let insert = require('./products/p_insert')
let update = require('./products/p_update')
let remov = require('./products/p_delete')
//use above module
app.use('/p_fetch',fetch)
app.use('/p_insert',insert)
app.use('/p_update',update)
app.use('/p_delete',remov)
//***************************************************************** */
//import fetch insert update delete modules for login
let fetch1 = require('./login/l_fetch')
let insert1 = require('./login/l_insert')
let update1 = require('./login/l_update')
let remov1= require('./login/l_delete')
//use above module
app.use('/l_fetch',fetch1)
app.use('/l_insert',insert1)
app.use('/l_update',update1)
app.use('/l_delete',remov1)
//************************************************************************** */
//import fetch insert update delete modules
let fetch2 = require('./cart/c_fetch')
let insert2 = require('./cart/c_insert')
let remov2 = require('./cart/c_delete')
let update2 = require('./cart/c_update')
// let remov1= require('./login/l_update')
//use above module
app.use('/c_fetch',fetch2)
app.use('/c_insert',insert2)
 app.use('/c_update',update2)
app.use('/c_delete',remov2)
//************************************************************************************* */

let fetch3 = require('./probuy/b_fetch')
let insert3 = require('./probuy/b_insert')
let remov3= require('./probuy/b_delete')
let update3= require('./probuy/b_update')
//use above module
app.use('/b_fetch',fetch3)
app.use('/b_insert',insert3)
app.use('/b_delete',remov3)
app.use('/b_upadte',update3)
//assign port no
app.listen(port,()=>{
console.log("Server running on port no :- ",port)
})