const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var registerSchema = new Schema({
    email: String,
    username: String,
    password: String
});

var Register = mongoose.model('registers', registerSchema);

module.exports = Register;