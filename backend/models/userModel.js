const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    phone: {
        type: String,
        unique: true,
        sparse: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);
