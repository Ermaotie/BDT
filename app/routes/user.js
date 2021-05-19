const e = require("express");

module.exports = function(app, db) {
  collection = db.collection("user");
    app.post('/user', (req, res) => {
        // You'll create your note here.
        collection.find(req.body).toArray(function(err,res1){
          console.log(res1.length == 0);
          if(res1.length==0){
            collection.insertOne(req.body,function(err,res2){
              if(err){
                res.send("Insert Failed!")
              } else {
                res.send(req.body)
              }
            })
          }else{
            res.send("Existing")
          }
        })

      });
      app.post('/user/:id', (req, res) => {
        // You'll create your note here.
        collection.find({'id':req.params.id}).toArray(function(err,res1){
          console.log(res1.length == 0);
          if(res1.length==0){
            collection.insertOne(req.body,function(err,res2){
              if(err){
                res.send("Insert Failed!")
              } else {
                res.send(req.body)
              }
            })
          }else{
            res.send("Existing")
          }
        })

      });
    app.get('/user/:id', (req, res) => {
        // You'll create your note here.
        collection.findOne({'id':req.params.id},function(err,res1){
          if(err){
            res.send('Search Failed')
          } else {
            res.send(res1)
          }
        })
        
      });
    app.put('/user/:id', (req, res) => {
        // You'll create your note here.
        collection.update({'id':req.params.id},req.body,function(err,res1){
          if(err){
            res.send('Update Failed')
          } else {
            res.send('Success')
          }
        })
        
      });
    app.delete('/user/:id', (req, res) => {
        // You'll create your note here.
        collection.deleteOne({'id':req.params.id},function(err,res1){
          if(err){
            res.send('Delete failed!')
            console.log(err)
          } else {
            res.send('Success')
          }
        })
      });
};