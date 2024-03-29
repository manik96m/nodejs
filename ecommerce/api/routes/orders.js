const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Orders were fetched",
  });
});

router.get("/:orderId", (req, res, next) => {
  res.status(200).json({
    message: `Order with id ${req.params.orderId} was fetched`,
  });
});

router.post("/:orderId", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Order was created",
    order,
  });
});

module.exports = router;
