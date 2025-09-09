const winston = require("winston");

const allowedTransports = [];

// loggin on console
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: `YYYY-MM-DD HH:mm:ss`
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// loggin in the file
allowedTransports.push(new winston.transports.File({
    filename: `app.log`
}))

const logger = winston.createLogger({
    // default formatting
    format: winston.format.combine(
    
        // first argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: `YYYY-MM-DD HH-mm-ss`
        }),


        // second argument to the combine method, defines what is going to be printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)

    ),

    transports: allowedTransports
});

module.exports = logger;