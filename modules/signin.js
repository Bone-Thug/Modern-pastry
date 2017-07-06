var mongoose = require("mongoose");
var Scehma = mongoose.Schema;

var userSchema = new Scehma({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema);