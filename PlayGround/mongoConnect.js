const mongoClient=require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017',(err,client)=>{

    if(err){
        return console.log("Unable to connet")
    }
    console.log("Connected to DB")
     var db=client.db('ToDoApp')
    db.collection('ToDo1').insertOne({
    text:'Ranadheer',
    Completed:'Developer'   
    },(err,result)=>{
    if(err)
    {
     return  console.log("Unable to connet");
    }
      console.log(JSON.stringify(result.ops,undefined,2))

    })

client.close()

});