/**
 * File:            logger.js
 * Created By:      Emad Bin Abid
 * Created On:      23/09/2019
 * Description:     This file implements the logging functionality in an organised way.
**/

function LOGDEBUG(logTitle, logMessage)
{
    console.log("[!]DEBUG.\t" + logTitle + " " + logMessage);
}

function LOGINFO(logTitle, logMessage)
{
    console.log("[!]INFO.\t" + logTitle + " " + logMessage);
}

function LOGSUCCESS(logTitle, logMessage)
{
    console.log("[+]SUCCESS.\t" + logTitle + " " + logMessage);
}

function LOGERROR(logTitle, logMessage)
{
    console.log("[-]ERROR.\t" + logTitle + " " + logMessage);
}