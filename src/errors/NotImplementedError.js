const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("NotImplemented", `${methodName} not implemented`, {}, StatusCodes.NOT_IMPLEMENTED);
    }
}

module.exports = NotImplemented;