const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = {

    userid: {
        type: String,
        default: '12345'
    },
    username: {
        type: String,
        default: 'user'
    },
    name:{
        type: String,
        default: "No name"
    },
    thumbnail: {
        type: String,
        default: 'profile-pic'
    }
}
const User = mongoose.model('user', UserSchema)

module.exports = User