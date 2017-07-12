var express = require("express");
var orderRouter = express.Router();
var order = require("../models/order")

//orderRouter.route("/")
//    .get(function(req, res) {
//        order.find(function(err, order) {
//            if(err) {
//                res.status(500).send(err);
//            } else {
//                res.send(order);
//            }
//        });
//    })
orderRouter.route("/")
	.post(function (req, res) {
		var neworder = new order(req.body);
		neworder.save(function (err, neworder) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(neworder);
			}
		});
	});
orderRouter.route("/")
    .get(function(req, res) {
        order.find()
	.populate("products")
	.exec(function(err,order){
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(order);
            }
        });
    })
orderRouter.route("/:id")
	.delete(function (req, res) {
		order.findByIdAndRemove(req.params.id, function (err, deletedorder) {
			if (err) {
				res.status(500).send(err);
			} else {
				var responseObj = {
					success: true,
					message: "Successfully deleted the ordered",
					order: deletedorder
				};
				res.send(responseObj);
			}
		});
	})

	.put(function (req, res) {
		console.log(req.body);
		order.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updatedorder) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(updatedorder);
			}
		})
	})
module.exports = orderRouter;