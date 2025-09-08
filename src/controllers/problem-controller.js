const NotImplementedError = require("../errors/NotImplementedError");
const { ProblemService } = require("../services/index");
const { ProblemRepository } = require("../repositories/index");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

const pingProblemController = (req, res) => {
    return res.json({message: "problem controller is up"});
}

const addProblem = async (req, res, next) => {
    try {
        console.log("request body: ", req.body);
        const response = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "successfully created a new problem",
            error: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

const getProblem = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

const getProblems = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

const updateProblem = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

const deleteProblem = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProblem,
    getProblems,
    addProblem,
    updateProblem,
    deleteProblem,
    pingProblemController
}

