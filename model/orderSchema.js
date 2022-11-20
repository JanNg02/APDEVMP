const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema( {
    pname:[String],
    username: String,
    date: String,
    price: Number,
    items: Number,
    payment: String,
});
//name of the schema, orderSchema (the var)
module.exports = mongoose.model('order', orderSchema);