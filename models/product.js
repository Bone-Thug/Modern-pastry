var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({

		Name: {
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
		quantity: {
			type: Number,
		},
		rating: {
			type: Number,
		},
		rating_times: {
			types: Number,
		},
		image: {
			type: [String],
		},
		production_time: {
			type: String
		},
		comments: {
			type: [String]
		},
	users_id:{
		type: [String]
	}
	})
module.exports = mongoose.model("product", productSchema);
