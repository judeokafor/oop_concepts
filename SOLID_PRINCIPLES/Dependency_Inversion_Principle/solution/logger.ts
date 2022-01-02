abstract class LoggerService {
    createLog: (logObject: object) => void;
  }

  class RedisLog {
    sendLog(logMessage: string) {
      console.log(`Log Sent to Redis for logMessage`);
    }
  }
  class GrayLog {
    saveLog(logMessage: Object) {
      console.log(`Log Sent to Redis for logMessage`);
    }
  }


  class GrayLoggerService implements LoggerService {
    createLog(logObject: object) {
      const grayLog = new GrayLog();
      grayLog.saveLog(logObject);
    }
  }
  
  class RedisLoggerService implements LoggerService {
    createLog(logObject: object) {
      const logMessage = JSON.stringify(logObject);
      const redisLog = new RedisLog();
      redisLog.sendLog(logMessage);
    }
  }

  const errorDecorator = (error: Error, loggerService: LoggerService) => {
    loggerService.createLog(error);
  };
  
  const main = () => {
    errorDecorator(new Error("Error Message"), new RedisLoggerService());
  };
  
  main();