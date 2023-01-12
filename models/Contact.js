//1 require mongoose
const mongoose = require("mongoose");

//2 create schema
const schema = mongoose.Schema;

const contactSchema = new schema ({
    name : {
        type : String,
        required : true,
    },
    age : Number,
    email : {
        type : String,
        required : true,
        unique : true,
    },
    phone : Number,
});

module.exports = contact = mongoose.model("contact", contactSchema);