var express = require('express');
var app = express();
var path = require("path")

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get(/user/', (req, res) ==>
app.listen(3000, function(){
    console.log('Listening to port: '+ 3000 );
});
