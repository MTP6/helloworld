// ************************************************************************************************************
// Example for hello world
//

var express = require('express');
var app = express();

app.get('/', function(req, res){

    res.send('Hello World! No 2');
  
})

app.listen(3000, function(){
    console.log('----------------------------------------------------');
    console.log('Example app listening on port 3000!');
});