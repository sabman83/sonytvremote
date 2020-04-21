const Bravia = require('bravia');
const appCommands = require('./server/appCommands');

const tv = new Bravia('192.168.0.105', '80', 'presharedkey');


const express = require('express')
const app = express();
const path = require('path');
app.use(express.static('src'))


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'src','remote.html'));
});

app.get('/app',function(req,res){
  appCommands.setApp(tv, req.query.name)
    .then(success => {
      console.log("SUCCESS with " + req.query.name);
      res.sendStatus(200)
    }
    , error => {
      console.log("ERROR : " + error);
      res.sendStatus(400);
    });
});
app.get('/action',function(req,res){

  if(req.query.name=="Power") {
    tv.system.invoke('getPowerStatus')
      .then(status => {
        if(status.status == "active") {
          sendAndRespond(tv, "PowerOff", res);
        } else {
          sendAndRespond(tv, "WakeUp", res);
        }
      })
      .catch(error => console.error(error));
  }
  else {
    sendAndRespond(tv, req.query.name, res);
  }
});

function sendAndRespond(tv, action, res) {
  tv.send(action)
    .then(success => {
      console.log("SUCCESS with " + action);
      res.sendStatus(200)
    }
    , error => {
      console.log("ERROR : " + error);
      res.sendStatus(400);
    });
}
