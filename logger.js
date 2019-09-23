/**
 * File:            logger.js
 * Created By:      Emad Bin Abid
 * Created On:      23/09/2019
 * Description:     This file implements the Logger class to write logging functionality in an organised way.
**/

class Logger {
    static LOGDEBUG(fileName, functionName, logMessage) {
        console.log("[!]DEBUG.\t" + fileName + " " + functionName + " " + logMessage);
    }

    static LOGINFO(fileName, functionName, logMessage) {
        console.log("[!]INFO.\t" + fileName + " " + functionName + " " + logMessage);
    }

    static LOGSUCCESS(fileName, functionName, logMessage) {
        console.log("[!]SUCCESS.\t" + fileName + " " + functionName + " " + logMessage);
    }

    static LOGERROR(fileName, functionName, logMessage) {
        console.log("[!]ERROR.\t" + fileName + " " + functionName + " " + logMessage);
    }
}