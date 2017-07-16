var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");

mongoose.connect(config.database);


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/Modernpastry/users", require("./routes/userRoutes"));
app.use("/api/Modernpastry/products", require("./routes/productRoutes"));
app.use("/api", expressJwt({secret: config.secret}));
app.use("/api/Modernpastry/orders", require("./routes/orderRoutes"));
app.use("/auth", require("./routes/authRoutes"));



app.use(express.static(path.join(__dirname, "public")));


mongoose.connect("mongodb://localhost/customers-data", function() {
    console.log("Database is connected");
})

app.listen(5000, function() {
    console.log("server listening on port 8000");
});