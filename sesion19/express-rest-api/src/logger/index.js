import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
const { timestamp, errors, printf } = format

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    timestamp({
      format: 'YYYY-MM-DDTHH:mm:ss'
    }),
    errors({ stack: true }),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} | ${level} | ${message}`
    })
  ),
  transports: [
    new (DailyRotateFile)({
      filename: './logs/application-error-%DATE%.log',
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    }),
    new (DailyRotateFile)({
      filename: './logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }))
}

module.exports = logger