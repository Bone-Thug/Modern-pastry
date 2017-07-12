var express = require("express");
var productRouter = express.Router();
var product = require("../models/product")

productRouter.route("/")
    .get(function(req, res) {
        product.find(function(err, product) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(product);
            }
        });
    })
	.post(function (req, res) {
		var newproduct = new product(req.body);
		newproduct.save(function (err, newproduct) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(newproduct);
			}
		});
	});
productRouter.route("/:id")
	.delete(function (req, res) {
		product.findByIdAndRemove(req.params.id, function (err, deletedproduct) {
			if (err) {
				res.status(500).send(err);
			} else {
				var responseObj = {
					success: true,
					message: "Successfully deleted the product",
					product: deletedproduct
				};
				res.send(responseObj);
			}
		});
	})
.put(function (req, res) {
		console.log(req.body);
		product.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updatedproduct) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(updatedproduct);
			}
		})
	})
module.exports = productRouter;