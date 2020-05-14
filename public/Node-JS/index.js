const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    console.log(req);
});
app.listen(8000);