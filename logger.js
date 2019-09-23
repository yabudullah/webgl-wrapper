/**
 * File:            logger.js
 * Created By:      Emad Bin Abid
 * Created On:      23/09/2019
 * Description:     This file implements the logging functionality in an organised way.
**/

function LOGDEBUG(fileName, functionName, logMessage)
{
    console.log("[!]DEBUG.\t" + fileName + " " + functionName + " " + logMessage);
}

function LOGINFO(fileName, functionName, logMessage)
{
    console.log("[!]INFO.\t" + fileName + " " + functionName + " " + logMessage);
}

function LOGSUCCESS(fileName, functionName, logMessage)
{
    console.log("[!]SUCCESS.\t" + fileName + " " + functionName + " " + logMessage);
}

function LOGERROR(fileName, functionName, logMessage)
{
    console.log("[!]ERROR.\t" + fileName + " " + functionName + " " + logMessage);
}