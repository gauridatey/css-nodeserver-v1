const winston = require('winston');

// instantiate a new Winston Logger for generic logging
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'info',
  maxsize: 5242880,
  maxFiles: 5,
  transports: [
    new winston.transports.File({ level: 'error', filename: 'logs/error.log' }),
    new winston.transports.File({ filename: 'logs/all.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),

      colorize: true,
    })
  );
}

module.exports = logger;
