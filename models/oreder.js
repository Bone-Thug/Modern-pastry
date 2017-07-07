var mongoose = require("mongoose");
var Scehma = mongoose.Schema;
var orderSchema = new Scehma({
	user: {
		type: String,
	},
	products: [{
		type: Schema.ObjectId,
		ref: 'product'
	}],
	discount_percentage: {
		type: Number,
		default: 0
	},
	total_price: {
		type: Number,
	},
	date_time: {
		type: String,
	}

})
module.exports = mongoose.model("order", orderSchema);
