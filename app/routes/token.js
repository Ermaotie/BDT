module.exports = function(app,db) {
    collection = db.collection("token");
    app.post('/token',(req,res)=>{
        collection.insertOne(req.body,function(err,res1){
            if(err){
                res.send("Failed")
            } else {
                res.send(res1)
            }
        })
    })

    app.get('/token',(req,res)=>{
        collection.find({}).sort({"createTime":-1}).toArray(function(err,res1){
            if(err){
                res.send("Failed")
            } else {
                res.send(res1[0])
            }
        })
    })
}