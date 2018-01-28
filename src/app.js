const express = require('express')
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.get('/status', (req, res)=>{
   res.send({
       message: "hello"
   })
})
sssssssssssssssssssssssssssssssssssssssssss
ssssbbsbsbbsbbsb

const port = process.env.PORT||8080;
app.listen(port)