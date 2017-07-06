var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.use("/Modern-pastry", require("./routes/userRoutes"));
app.use("/Modern-pastry", require("./routes/orderRoutes"));
app.use("/Modern-pastry", require("./routes/productRoutes"));

mongoose.connect("mongodb://localhost/customers-data", function() {
    console.log("Database is connected");
})

app.listen(8000, function() {
    console.log("server listening on port 8000");
});