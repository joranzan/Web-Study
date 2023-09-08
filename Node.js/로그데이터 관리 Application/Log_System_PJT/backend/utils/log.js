const winston = require('winston');

require('winston-daily-rotate-file');

const transport = new winston.transports.DailyRotateFile({

    //log.debug()로 호출해도 info 레벨이라 지정되지 않는다
    level : "info",
    filename: "./logs/%DATE%.log",
    datePattern: "YYYY-MM-DD",
    // 특정 설정 일이 지나면 삭제 or zip파일로 만드는것
    zippedArchive: true,
    maxSize : "20m",
    maxFiles: "1d",
    format: winston.format.combine(
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.printf((log) => {
            console.log(log.message);
            return `${log.timestamp} ${log.level} ${log.message}`;
        })
    )
})

const logger = winston.createLogger({
    transports : [transport]
});

module.exports = logger;