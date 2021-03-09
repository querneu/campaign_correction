const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

var transport = new winston.transports.DailyRotateFile({

    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '200m',
    maxFiles: '14d'
});
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

//
// Replaces the previous transports with those in the
// new configuration wholesale.
//
logger.configure({
    level: 'verbose',
    transports: [
        new DailyRotateFile(transport)
    ]
});

module.exports = logger;