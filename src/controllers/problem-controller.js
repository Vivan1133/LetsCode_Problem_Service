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

const getProblem = async (req, res, next) => {
    try {
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            error: {},
            message: "successfully fetched a problem",
            data: response
        })
    } catch (error) {
        next(error);
    }
}

const getProblems = async (req, res, next) => {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully fetched all the problems",
            error: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

const updateProblem = async (req, res, next) => {
    try {
        const response = await problemService.updateProblem(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully updated the problem",
            error: {},
            data: response
        });
    } catch (error) {
        next(error);
    }
}

const deleteProblem = async (req, res, next) => {
    try {
        const response = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "successfully deleted the problem",
            error: {},
            data: response
        })
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

