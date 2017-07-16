var express = require("express");
var orderRouter = express.Router();
var order = require("../models/order");

orderRouter.route("/")
    .get(function (req, res) {
        // Filter for only order items with a 'user' property with the current user's id.
        order.find({user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        });
    })
    .post(function (req, res) {
        var order = new order(req.body);

        // Set the user property of an order to req.user (logged-in user)
        order.user = req.user;
        
        order.save(function (err, neworder) {
            if (err) res.status(500).send(err);
            res.status(201).send(neworder);
        })
    });

orderRouter.route("/:orderId")
    .get(function (req, res) {
        order.findOne({_id: req.params.orderId, user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            if (!order) res.status(404).send("No order found.");
            else res.send(order);
        });
    })
    .put(function (req, res) {
        order.findOneAndUpdate({_id: req.params.orderId, user: req.user._id}, req.body, {new: true}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        });
    })
    .delete(function (req, res) {
        order.findByOneAndRemove({_id: req.params.orderId, user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        })
    });

module.exports = orderRouter;