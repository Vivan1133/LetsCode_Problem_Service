const { Problem } = require("../models/index");

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });
            
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async getAllProblems() {
        try {
            const response = await Problem.find({});
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ProblemRepository;