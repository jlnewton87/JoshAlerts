var mongoose = require('mongoose');

function Model(){
	this.db = mongoose.connect('mongodb://localhost/JoshAlerts');
	this.Alert = mongoose.model('Alert', new mongoose.Schema({
		priority: Number,
		title: String,
		description: String,
		created: Date
	}));
};

module.exports = new Model();