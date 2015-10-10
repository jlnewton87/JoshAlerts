var express = require('express');
var model = require('../model.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET latest alerts */
router.get('/band/alerts', function(req, res, next){
  model.Alert.find()
    .limit(10)
    .exec(function(err, alerts){
      var alertsToSend = {Alerts: alerts};
      res.end(JSON.stringify(alertsToSend));
    });
});

module.exports = router;
