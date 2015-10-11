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
      res.render('rss', {alerts: alerts});
    });
});

/* GET Init first alert*/
router.get('/band/init', function(req, res, next){
  var alert = new model.Alert({
    priority: 1,
    title: 'New Alert',
    description: 'This is a longer description.  Just in case you need more information',
    created: new Date()
  });
  alert.save();
  res.end('alert created');
});

module.exports = router;
