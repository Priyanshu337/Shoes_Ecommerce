const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    name: String,
    email: String,
    passwordHash: String,
    isAdmin: { type: Boolean, require, default: false },
}, {
    timeStamp: true,
});

const User = mongoose.model('users', usersSchema);
module.exports = User;