const main = require('../models/main.model');

exports.getAll = function (req, res) {
    let result;
    try {
        result = main.getAll();
        res.statusMessage = "OK";
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.statusMessage = "Internal Server Error";
        res.status(500).send();
    }
};

exports.add = function (req, res) {
    let result;
    try {
        result = main.add(req.body.value);
        res.statusMessage = "Created";
        res.status(201).send(result);
    } catch (err) {
        console.log(err);
        res.statusMessage = "Internal Server Error";
        res.status(500).send();
    }
};

exports.makeclean = function (req, res) {
    let result;
    try {
        result = main.makeclean();
        res.statusMessage = "Created";
        res.status(201).send(result);
    } catch (err) {
        console.log(err);
        res.statusMessage = "Internal Server Error";
        res.status(500).send();
    }
};