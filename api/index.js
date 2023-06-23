const router = require("express").Router();

router.use("/pizza", require("./pizza"));
router.use("/lemonade", require("./lemonade"));
router.use("/sandwhich", require("./sandwhich"));
router.use("/donut", require("./donut"));

router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next();
});

module.exports = router;
