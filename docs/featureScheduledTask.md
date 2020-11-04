---
id: featureScheduledTask
title: Scheduled Tasks
sidebar_label: Scheduled Tasks
---

## ScheduledTask
To define a instance with a task that will be executed periodically.

**Parameters**

|       Parameters       |                      Description                       |
| :--------------------: | :----------------------------------------------------: |
|          log           | logger will be used for inform (slf4j logger instance) | . |
|       threadName       |                   Name of the thread                   |
|     threadInterval     |         Interval of the thread in milliseconds         |
| errorTryCountThreshold |          Threshold to try on error condition           |
|     errorSleepTime     |         Time to sleep on error in milliseconds         |

### Example

The following example logs "Hello World" to the consle for each 2 seconds

```java

@Component
@Slf4j
public class MyScheduledTask extends ScheduledTask {

    public MyScheduledTask() {
        super(log
                , "MyThread"
                , 2 * 1000
                , 0
                , 1000 * 15);
    }

    @Override
    protected void doThreadJob() throws Exception {
        log.info("Hello World!!");
    }
}

```