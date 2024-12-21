const mongoose = require('mongoose');

module.exports = () => {



    mongoose.connect('mongodb://0.0.0/n20-production').then(() => {
        console.log('Connected to the database')
    }).catch((err) => {
        console.log('Failed to connect to the database', err)
    })




}