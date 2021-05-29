module.exports = function(app, db) {
  collection = db.collection("goods");
    app.post('/goods', (req, res) => {
      collection.find({"id":req.body.id}).toArray(function(err,res1){
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
    app.get('/goods/all',(req,res) => {
      collection.find({}).sort({"_id":-1}).toArray(function(err,res1){
        if(err){
          res.send('Search Failed')
        } else {
          res.send(res1)
        }
    })
  })
    app.get('/goods/user/:id', (req, res) => {
        collection.find({'uid':req.params.id}).sort({"_id":-1}).toArray(function(err,res1){
          if(err){
            res.send('Search Failed')
          } else {
              res.send(res1)
          }
        })
      });
    app.get('/goods/:id', (req, res) => {
      collection.findOne({'id':req.params.id},function(err,res1){
        if(err){
          res.send('Search Failed')
        } else {
          res.send(res1)
        }
      })
    });
    app.put('/goods/:id', (req, res) => {
      collection.update({'id':req.params.id},req.body,function(err,res1){
        if(err){
          res.send('Update Failed')
        } else {
          res.send("Update Success")
        }
      })
      });
    app.delete('/goods/:id', (req, res) => {
      collection.deleteOne({'id':req.params.id},function(err,res1){
        if(err){
          res.send('Delete failed!')
          console.log(err)
        } else {
          res.send('Delete Success')
        }
      })
      });
    app.delete('/goods/all', (req, res) => {
        collection.deleteMany({},function(err,res1){
          if(err){
            res.send('Delete failed!')
            console.log(err)
          } else {
            res.send('Delete Success')
          }
        })
    });
};