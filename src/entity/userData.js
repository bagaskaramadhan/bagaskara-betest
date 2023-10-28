const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserData = new Schema({
    // id: {
    //     type: String,
    // },
    username: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    identityNumber: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})
module.exports = mongoose.model('user-data', UserData)