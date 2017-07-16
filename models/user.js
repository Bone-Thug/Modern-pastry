var mongoose = require("mongoose");
var Scehma = mongoose.Schema;
var bcrypt = require("bcrypt");

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
userSchema.pre("save", function(next) {
    var user = this;
    if (!user.isModified("password")) return next();
    
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);
        
        user.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, function(err, isMatch) {
        if(err) return callback(err);
        callback(null, isMatch);
    });
};

userSchema.methods.withoutPassword = function () {
    var user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model("User", userSchema);
