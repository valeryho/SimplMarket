var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    return  hour + ":" + min 
  }
  res.render('index', { title: 'Express',time:getDateTime() });
});

module.exports = router;
