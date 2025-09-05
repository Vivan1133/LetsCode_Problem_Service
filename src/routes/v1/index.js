const express = require("express");
const router = express();
const problemRouter = require("./problem.routes");

router.use("/problems", problemRouter);

module.exports = router;