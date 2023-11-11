const mongoose = require("mongoose");
const Favourite = require("./favouriteModel.js")

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
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favourite"
    }]
});

module.exports = mongoose.model("User", userSchema);
