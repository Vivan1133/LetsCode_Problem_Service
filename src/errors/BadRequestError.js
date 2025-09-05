const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class BadRequest extends BaseError {
    constructor(propertyName, details) {
        super("BadRequest", `Invalid structure for ${propertyName} provided`, details, StatusCodes.BAD_REQUEST);
    }
}

module.exports = BadRequest;