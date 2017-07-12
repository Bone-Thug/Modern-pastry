var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	user: {
		type: String,
	},
	products: [{type: Schema.ObjectId,ref: 'product'}],
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
//var product  = mongoose.model('product', productSchema);
module.exports = mongoose.model("order", orderSchema);
