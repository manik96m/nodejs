const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// Setting logging middleware
app.use(morgan("dev"));

// Setting body parser middleware
app.use(bodyParser.urlencoded({ extender: false }));
app.use(bodyParser.json());

// CORS handling middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Options Request made by browser to check if a certain request method is allowed
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
});

// Send requests with /products to productRoutes handler
app.use("/products", productRoutes);
// Send requests with /orders to productRoutes handler
app.use("/orders", orderRoutes);

// Request is not for products or orders
// Manually throw an error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message || "Error",
    },
  });
});

module.exports = app;
