var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var User = require('../models/user');


// Create User
router.post('/', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
  });
  user.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
  });
});

module.exports = router;
