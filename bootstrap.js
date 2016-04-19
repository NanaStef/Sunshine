"use static";

var express = require('express'),
    app = express(),
    port = 3000;

function whenStartListening() {
    console.log("start listening on port:" + port);
}

app.use('/', express.static('./'));
app.listen(port, whenStartListening);