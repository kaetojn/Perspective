const express = require('express');
const router = express.Router();


//result model

const Result = require('../../model/results')

router.get('/', function(req, res) {
	Result.find()
		.then(result => res.json(result))
});

router.post('/', function(req, res) {
	const newResult = new Result({
		email: req.body.email,
		q1: req.body.q1,
		q2: req.body.q2,
		q3: req.body.q3,
		q4: req.body.q4,
		q5: req.body.q5,
		q6: req.body.q6,
		q7: req.body.q7,
		q8: req.body.q8,
		q9: req.body.q9,
		q10: req.body.q10
	});

	newResult.save().then(result => res.json(result));


});

router.get('/:email', function(req, res){
  Result.findOne({ _email: req.params.id}, function(err, user){
    if (err) {
      return res.send(err);
    }
    res.json(user);
    });
});

module.exports = router 