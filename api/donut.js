const router = require("express").Router();

// Get route
router.get("/", (req, res, next) => {
  console.log("I'm Donut.js");
  res.status(200).send("I wish I can be sweet as a Donut!");
});

module.exports = router;
