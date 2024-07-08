const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({

    email: String,
    passwordHash: String
});

const userModel = mongoose.model('users', usersSchema);
module.exports = userModel;