const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class InternalServerError extends BaseError {
    constructor(details) {
        super("InternalServerError", "something went wrong", details, StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = InternalServerError;