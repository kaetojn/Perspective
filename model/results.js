const mongoose = require('mongoose');
const Schema = mongoose.Schema


//Schema
const resultSchema = new Schema({
	email:{
		type: String
	}, 
	q1:{
		type: Number
	}, 
	q2:{
		type: Number
	}, 
	q3:{
		type: Number
	}, 
	q4:{
		type: Number
	}, 
	q5:{
		type: Number
	}, 
	q6:{
		type: Number
	}, 
	q7:{
		type: Number
	}, 
	q8:{
		type: Number
	}, 
	q9:{
		type: Number
	}, 
	q10:{
		type: Number
	}
})

module.exports = Result = mongoose.model('results', resultSchema);
