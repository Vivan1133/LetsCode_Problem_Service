const NotImplementedError = require("../errors/NotImplementedError");



const pingProblemController = (req, res) => {
    return res.json({message: "problem controller is up"});
}

const addProblem = (req, res, next) => {
    try {
        throw new NotImplementedError("addProblem");
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

