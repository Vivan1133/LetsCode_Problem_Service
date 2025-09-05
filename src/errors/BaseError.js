class BaseError extends Error {
    constructor(name, message, details, statusCode) {
        super(message);
        this.name = name;
        this.details = details;
        this.statusCode = statusCode;
    }
}

module.exports = BaseError;