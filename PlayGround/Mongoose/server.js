

var Todo=mongoose.model('Todo',  {
text:{
    type:String
},
completedBy:{
    type:String
},
completedAt:{
    type:Number
},
})

var newTodo=new Todo({
    text:'Rana'
})

/* newTodo.save().then((doc)=>{
console.log("saved")

},(e)=> {
    console.log("error")
}

) */




var userData=new user({
  email:'rana@gmail.com'
})

userData.save().then((doc)=>{
    console.log(doc)
},(e)=>{
    console.log(e)
})