var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/'));
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './index.js'));
});
app.listen(process.env.PORT || 8080);

const host = '0.0.0.0';
const PORT = process.env.PORT || 8080;