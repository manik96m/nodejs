const express = require("express");
const app = express();

const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

// Setting a middleware
// Send requests with /products to productRoutes handler
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
