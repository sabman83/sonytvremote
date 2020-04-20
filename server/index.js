const Bravia = require('bravia');
const appCommands = require('./appCommands');

const tv = new Bravia('192.168.0.105', '80', 'presharedkey');


const express = require('express')
const app = express();

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

app.get('/app',function(req,res){
  appCommands.setApp(tv, req.query.name)
    .then(success => {
      console.log("SUCCESS with " + req.query.name);
      res.sendStatus(200)
    }
    , error => {
      cosole.log("ERROR : " + error);
      res.sendStatus(400);
    });
});
app.get('/action',function(req,res){
  tv.send(req.query.name)
    .then(success => {
      console.log("SUCCESS with " + req.query.name);
      res.sendStatus(200)
    }
    , error => {
      cosole.log("ERROR : " + error);
      res.sendStatus(400);
    });
});

