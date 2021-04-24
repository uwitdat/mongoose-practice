var express = require('express');
var router = express.Router();
const GuitarPlayer = require('../models/guitarPlayer')

/* GET users listing. */
router.get('/', (req, res) => {

    GuitarPlayer.find()
    .then(players => {
      res.json({
        confirmation: 'success',
        data: players
      })

    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })

    })


})


module.exports = router;
