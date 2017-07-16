var express = require("express");
var orderRouter = express.Router();
var Order = require("../models/order");

orderRouter.route("/")
    .get(function (req, res) {
        // Filter for only order items with a 'user' property with the current user's id.
        Order.find({user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        });
    })
    .post(function (req, res) {
        var order = new Order(req.body);

        // Set the user property of an order to req.user (logged-in user)
        order.user = req.user;
        
        order.save(function (err, newOrder) {
            if (err) res.status(500).send(err);
            res.status(201).send(newOrder);
        })
    });

orderRouter.route("/:orderId")
    .get(function (req, res) {
        Order.findOne({_id: req.params.orderId, user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            if (!order) res.status(404).send("No order found.");
            else res.send(order);
        });
    })
    .put(function (req, res) {
        Order.findOneAndUpdate({_id: req.params.orderId, user: req.user._id}, req.body, {new: true}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        });
    })
    .delete(function (req, res) {
       Order.findOneAndRemove({_id: req.params.orderId, user: req.user._id}, function (err, order) {
            if (err) res.status(500).send(err);
            res.send(order);
        })
    });

module.exports = orderRouter;