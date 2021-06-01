const express = require('express');
const authMiddleware = require('../middlewares/auth');
const user = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => {
    user.find({}, function(err, user) {
        if(err) {
            res.send(err)
        }
        res.json(user)
    })
})

router.get('/:userId', (req, res) => {
   user.findOne({"_id": req.params.userId}, function(err, user) {
        if(err) {
            res.send(err)
        }
        res.json(user)
    })
})

router.delete('/delete/:userId', (req, res) => {
    user.deleteOne({_id: req.params.userId}, function(err, user){
         if(err) {
            res.send(err)
        }
        res.json(user)
    })
})

module.exports = app => app.use('/fisevro/users', router);

