const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/guitarPlayers', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`);
})