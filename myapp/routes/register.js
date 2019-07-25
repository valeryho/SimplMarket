var express = require('express');
var router = express.Router();
const User = require('../model/user_model');

const Sequelize = require('sequelize');

router.get('/', function (req, res, next) {
    // res.send("register")
    res.render("register");

});
router.post('/', function (req, res, next) {
    res.send(req.body);
});


module.exports = router;
