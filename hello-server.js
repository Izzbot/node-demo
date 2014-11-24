/*
    hello-server.js

    The most basic web server you can write using Node.js
*/

'use strict';

var express = require('express');

var app = express();


// Root application
app.get('/', function(req, res) {

   res.send('Destroy the patriarchy!');
});

// respond to /foo GET
app.get('/foo', function(req, res) {

    res.send('Destroy the fooiarchy!');
});


// respond to /foo POST
app.post('/foo', function(req, res) {


});






// Listener
app.listen(8080, function() {

   console.log('localhost listening at port 8080');
});