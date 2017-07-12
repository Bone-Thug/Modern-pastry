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
	},
	email: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true,
	},
	birthday: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	special_dates: {
		type: [String],
	},
	phone: {
		type: Number,
	},
	Bank_account: {
		type: String,
		required: true,
	},

})

module.exports = mongoose.model("User", userSchema);
