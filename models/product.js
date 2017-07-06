var mongoose = require("mongoose");
var Scehma = mongoose.Schema;

var productSchema = new Scehma({
    
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model("product", productSchema);

