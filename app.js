var express = require('express');
var app = express();
var j5 = require("johnny-five");
var myBoard, leds=[], ledPins = [2,3,4,5,6,7,8,9], lightswitch=[];

myBoard = new j5.Board();
myBoard.on("ready", function() {

  // initialize LEDs using a for loop
  for (var i = 0; i < ledPins.length; i++){
      var myLed = new j5.Led(ledPins[i]);
      leds.push(myLed);
  }
});

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});


app.get('/light/:id', function(req, res) {
    console.log("/light/" + req.params.id);
    //res.send('200 OK');

    if(lightswitch[req.params.id - 1] === false || lightswitch[req.params.id - 1] === undefined){
        lightswitch[req.params.id - 1] = true;
        leds[req.params.id - 1].on();
    } else {
      lightswitch[req.params.id - 1] = false;
      leds[req.params.id - 1].off();
    }




});

app.use(express.static('js'));
app.use(express.static('css'));

app.listen(3000);
