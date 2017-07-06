var mongoose = require("mongoose");
var Scehma = mongoose.Schema;

var productSchema = new Scehma({
<<<<<<< HEAD
    
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
    

=======
>>>>>>> 68b930339708cbfe5914e4fa7d19f48a003fa57f

})

<<<<<<< HEAD
module.exports = mongoose.model("product", userSchema);
=======
module.exports = mongoose.model("product", productSchema);
>>>>>>> 68b930339708cbfe5914e4fa7d19f48a003fa57f
