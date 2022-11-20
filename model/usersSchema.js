const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema( {
    name: String,
    address: String,
    username: String,
    password: String,
    contact_no: String,
});
//name of the schema, usersSchema (the var)
module.exports = mongoose.model('users', usersSchema);