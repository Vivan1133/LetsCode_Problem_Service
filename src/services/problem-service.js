const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            console.log("before sanitization: ", problemData.description);
            // sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            console.log("after sanitization: ", problemData.description);
            

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const response = await this.problemRepository.getAllProblems();
            return response;
        } catch (error) {
            throw error;
        }
    }

    
}


module.exports = ProblemService;