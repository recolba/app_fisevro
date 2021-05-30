const mongoose = require('../database');

const FisevroSchema =  new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    fisevro: {
        type: String,
        lowercase: true,

    },
    description: {
        description: String,
    },
    stars:{
        stars: Number,
    },
    createdAt: {
        type: String,
        require: true,
    },
});

const fisevro = mongoose.model('Fisevro', FisevroSchema);

module.exports = fisevro;
