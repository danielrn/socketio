var app = require('express')();
var express = require('express');

var path = require('path');
var http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'css')));

app.get('/',function(req,res){
    //res.send('<h1>Hola mundo</h1>');
    res.sendFile(__dirname+'/index.html');
});

http.listen(3000,function(){
    console.log('escuchando en puerto 3000')
});