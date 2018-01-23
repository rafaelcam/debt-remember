// User.js
var mongoose = require('mongoose');  

var DebtSchema = new mongoose.Schema({  
  description: String,
  value: Number
});
mongoose.model('Debt', DebtSchema);

module.exports = mongoose.model('Debt');