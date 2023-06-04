import winston from "winston"
import DailyRotateFile from "winston-daily-rotate-file"
import config from "config"

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

const level = () => {
  const env = config.get<string>("env") || "development"
  const isDevelopment = env === "development"
  return isDevelopment ? "debug" : "warn"
}

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} - ${info.level} - ${info.message}`
  )
)

const transports = [
  new winston.transports.Console(),
  new DailyRotateFile({
    filename: "logs/all-%DATE%.log",
    datePattern: "YYYY-MM-DD-HH",
    maxSize: "1m",
    maxFiles: "7d",
  }),
  new DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    level: "error",
    datePattern: "YYYY-MM-DD-HH",
    maxSize: "1m",
    maxFiles: "7d",
  }),
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})

export default Logger
