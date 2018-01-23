// DebtController.js
var express = require('express');
var router = express.Router();
var Debt = require('./Debt');

router.post('/', function (req, res) {
    Debt.create({
            description : req.body.description,
            value : req.body.value
        }, 
        function (err, debt) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(debt);
        });
});

router.get('/', function (req, res) {
    Debt.find({}, function (err, debts) {
        if (err) return res.status(500).send("There was a problem finding the debts.");
        res.status(200).send(debts);
    });
});

router.get('/:id', function (req, res) {
    Debt.findById(req.params.id, function (err, debt) {
        if (err) return res.status(500).send("There was a problem finding the debt.");
        if (!debt) return res.status(404).send("No debt found.");
        res.status(200).send(debt);
    });
});

router.delete('/:id', function (req, res) {
    Debt.findByIdAndRemove(req.params.id, function (err, debt) {
        if (err) return res.status(500).send("There was a problem deleting the debt.");
        res.status(200).send("Debt "+ debt.description +" was deleted.");
    });
});

router.put('/:id', function (req, res) {
    
    Debt.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, debt) {
        if (err) return res.status(500).send("There was a problem updating the debt.");
        res.status(200).send(debt);
    });
});

module.exports = router;