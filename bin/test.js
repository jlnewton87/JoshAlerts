var model = require('../model.js');
var assert = require('assert');
var async = require('async');

function getFirstAlert(callback){
	model.Alert.findOne({title: 'New Alert'}, function(err, alert){
		debugger;
		assert.equal(
			alert.priority,
			1,
			'Expected 1, got: ' + alert.priority	
		);
	});
}

