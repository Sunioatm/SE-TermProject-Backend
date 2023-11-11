const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Favourite", favouriteSchema);
