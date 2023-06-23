const router = require("express").Router();

// Get route
router.get("/", (req, res, next) => {
  console.log("I'm Sandwhich.js");
  res.status(200).send("Anything taste good between two buns");
});

module.exports = router;
