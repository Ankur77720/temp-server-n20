const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, 'Please provide a username' ]
    },

    password: {
        type: String,
        required: [ true, 'Please provide a password' ]
    }
})

userSchema.statics.hashPassword = async function (password) {
    return bcrypt.hash(password, 10)
}

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, 'secret')
}


/*  

loggedInuser = await userModel.findOne({ username: 'admin' })

userModel.hashPassword('adminpassword')

token = loggedInuser.generateAuthToken()

 */



const userModel = mongoose.model('user', userSchema)



module.exports = userModel