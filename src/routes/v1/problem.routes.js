const express = require("express");
const { ProblemController } = require("../../controllers/index");

const router = express.Router();

// /api/v1/problems

router.get("/ping", ProblemController.pingProblemController);
router.get("/:id", ProblemController.getProblem);
router.get("/", ProblemController.getProblems);
router.post("/", ProblemController.addProblem);
router.put("/:id", ProblemController.updateProblem);
router.delete("/:id", ProblemController.deleteProblem);


module.exports = router;