// server.js


const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const db             = require('./config/db')
const conf           = require('./config');
const bodyParser     = require('body-parser');
const app            = express();
const port = process.env.PORT || 8443;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


// if you use the mongodb
MongoClient.connect(db.url,{ useUnifiedTopology: true ,useNewUrlParser: true}, (err, database) => {
    if (err) return console.log(err)
                        
    // Make sure you add the database name and not the collection name
    const BDT = database.db("BDT")
    require('./app/routes')(app, BDT);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })
