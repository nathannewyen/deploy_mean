const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product title is required!"],
        minlength: [3, "Name must be a minimum of 3 characters!"]
    },
    qty: {
        type: Number,
        required: true,
        min: [1, "Qty must be a minimum 1"]
    },
    price: {
        type: Number,
        required: true,
        min: [1, "Price must be a minimum 1"]
    },
})

module.exports = {
    Product: mongoose.model('Product', ProductSchema),
}