const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotFoundError extends BaseError {
    constructor(resourceName, resourceValue) {
        super("NotFound", `${resourceName} with value ${resourceValue} is not found`, {}, StatusCodes.NOT_FOUND);
    }
}

module.exports = NotFoundError;