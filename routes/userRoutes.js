var express = require("express");
var userRouter = express.Router();
var user = require("../models/user")

userRouter.route("/")
    .get(function(req, res) {
        user.find(function(err, user) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(user);
            }
        });
    })
	.post(function (req, res) {
		var newuser = new user(req.body);
		newuser.save(function (err, newstudent) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(newuser);
			}
		});
	});
userRouter.route("/:id")
	.delete(function (req, res) {
		user.findByIdAndRemove(req.params.id, function (err, deleteduser) {
			if (err) {
				res.status(500).send(err);
			} else {
				var responseObj = {
					success: true,
					message: "Successfully deleted the user",
					user: deleteduser
				};
				res.send(responseObj);
			}
		});
	})

	.put(function (req, res) {
		console.log(req.body);
		user.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updateduser) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(updateduser);
			}
		})
	})
module.exports = userRouter;