const router = require("express").Router();

// Get route
router.get("/", (req, res, next) => {
  console.log("I'm Lemonade.js");
  res.status(200).send("If life give you lemons, make a lemonade, right?");
});

module.exports = router;
