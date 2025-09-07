const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class UnauthorisedError extends BaseError {
    constructor(details) {
        super("UnauthorisedError", "you are not authorised", details, StatusCodes.UNAUTHORIZED);
    }
}

module.exports = UnauthorisedError;