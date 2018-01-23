// app.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var DebtController = require('./debt/DebtController');
app.use('/debts', DebtController);

module.exports = app;