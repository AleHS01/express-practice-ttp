const router = require("express").Router();

// Get route
router.get("/", (req, res, next) => {
  console.log("I'm Pizza.js");
  res
    .status(200)
    .send("I'm a pizza, and some People don't like me with pineapple");
});

module.exports = router;
