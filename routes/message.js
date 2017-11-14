const express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

const Message = require('../models/message');

// Get messages
router.get('/', function(req, res, next){
  Message.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        })
      }
      res.status(200).json({
        message: 'Success',
        obj: messages
      });
    });
});

// Check is user authenticated
router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  })
});

// Save message
router.post('/', function(req, res, next){
  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      })
    }
    res.status(201).json({
      message: 'Saved message',
      obj: result
    });
  });
});

// Update message
router.patch('/:id', function(req, res, next){
  Message.findById(req.params.id, function(err, message){
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if (!message) {
        return res.status(500).json({
          title: 'No Message Found!',
          error: {message: 'Message not found'}
        });
      }
      message.content = req.body.content;
      message.save(function(err, result){
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        }
        res.status(200).json({
          message: 'Updated message',
          obj: result
        });
      })
    })
});

// Delete message
router.delete('/:id', function(req,res, next){
  Message.findById(req.params.id, function(err, message){
      if (err) {
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if (!message) {
        return res.status(500).json({
          title: 'No Message Found!',
          error: {message: 'Message not found'}
        });
      }
      message.remove(function(err, result){
        if (err) {
          return res.status(500).json({
            title: 'An error occured',
            error: err
          })
        }
        res.status(200).json({
          message: 'Deleted message',
          obj: result
        });
      })
    })
});

module.exports = router;
