var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.use("/api/Modernpastry/users", require("./routes/userRoutes"));
app.use("/api/Modernpastry/products", require("./routes/productRoutes"));
app.use("/api/Modernpastry/orders", require("./routes/orderRoutes"));

mongoose.connect("mongodb://localhost/customers-data", function() {
    console.log("Database is connected");
})

app.listen(8000, function() {
    console.log("server listening on port 8000");
});