const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.get("/:productId", (req, res, next) => {
  const productId = req.params.productId;
  if (productId === "123") {
    res.status(200).json({
      message: "You have discovered the special ID",
    });
  } else {
    res.status(200).json({
      message: `Handling GET requests to /products/${productId}`,
    });
  }
});

router.post("/:productId", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: `Handling GET requests to /products/${req.params.productId}`,
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: `Handling DELETE requests to /products/${req.params.productId}`,
  });
});

module.exports = router;
