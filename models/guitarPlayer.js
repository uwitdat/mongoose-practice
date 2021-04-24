const mongoose = require('mongoose');

const GuitarPlayer = new mongoose.Schema({
    name: {type: String, trim:true, default: ''},
    band: {type: String, trim:true, default: ''},
    era: {type: Number, default: 0},
    guitar: {type: String, trim:true, default: ''}


})

module.exports = mongoose.model('Player', GuitarPlayer)