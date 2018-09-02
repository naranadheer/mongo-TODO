var express=require('express');
var bodyParser=require('body-parser')


var mongoose=require('./db/mongoose')
var {user}=require('./models/users')

var app=express()
app.use(bodyParser.json())

app.post('/users',(req,res)=>{
    var userToDo=new user({
        email: req.body.text
    });

 userToDo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.sendStatus(400)
    })

})

app.listen(3000,()=>{
 console.log("Started")    
})