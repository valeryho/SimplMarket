var express = require('express');
var router = express.Router();
const User = require('../model/user_model');

const Sequelize = require('sequelize');

router.get('/', function(req, res, next) {
     
       User.findAll()
         .then(users => {
           res.send(users);
         })
         .catch(err => console.log(err));
});
router.post('/:id',function (req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
