const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema( {
    catrgory: { type: String}
});
//name of the schema, usersSchema (the var)
module.exports = mongoose.model('category', categorySchema);