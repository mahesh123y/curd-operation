const mongoose = require("mongoose");
const validator = ("validator");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },

    email:{
        type: String,
        required: true,
        unique: [true, "Email is alredy present"]
    },

    phone:{
        type: Number,
        min: 10,
        required: true,
        unique: true
    },

    address:{
        type: String,
        required: true
    }
});


const product = new mongoose.model("Product", productSchema);

module.exports = product;