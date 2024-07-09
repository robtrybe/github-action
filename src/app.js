const express = require('express');

const app = express();

app.get('/', function(_req, res) {
    res.send('<h1>Hello World!!</h2>');
})

module.exports = app;