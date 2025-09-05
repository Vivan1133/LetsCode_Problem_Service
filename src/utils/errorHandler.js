const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/BaseError");

const errorHandler = (err, req, res, next) => {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            data: {},
            error: err.details,
            message: err.message
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "internal server error occurred",
        error: err,
        data: {}
    })
}

module.exports = errorHandler;