/**
 * The Challenge.
 * In this example,
 * consider an errorDecoratorThe above scenario works fine as long 
 * as you don't need to switch to a different logger in the near future. 
 * But let's say you do — for better compatibility, pricing, etc. 
 * The immediate solution then would be to simply use a RedisLog class instead of GrayLog.
 * But the `RedisLog` implementation is probably different from that of
 * GrayLog - perhaps it uses the sendLog function instead of saveLog 
 * and accepts a string parameter instead of an object param.
 */


 class RedisLog {
    sendLog(logMessage: string) {
      console.log(`Log Sent to Redis for logMessage`);
    }
  }
  
  const errorDecorator = (error: Error) => {
    const log = new RedisLog();
    log.sendLog(JSON.stringify(error));
  };
  
  const main = () => {
    errorDecorator(new Error("Error Message"));
  };
  
  main();
  