/**
 * File:            config.js
 * Created By:      Emad Bin Abid
 * Created On:      23/09/2019
 * Description:     This file entails the configuration settings of entire WebGL Wrapper project
*/

const colorVector = {
    white: vec4(1.0, 1.0, 1.0, 1.0),
    black: vec4(0.0, 0.0, 0.0, 1.0),
    red: vec4(1.0, 0.0, 0.0, 1.0),
    green: vec4(0.0, 1.0, 0.0, 1.0),
    blue: vec4(0.0, 0.0, 1.0, 1.0),
    yellow: vec4(1.0, 1.0, 0.0, 1.0),
    cyan: vec4(0.0, 1.0, 1.0, 1.0),
    orangeRed: vec4(1.0, 0.2705, 0.0, 1.0),
    magenta: vec4(1.0, 0.0, 1.0, 1.0),
    teal: vec4(0.0, 0.5019, 0.5019, 1.0),
};

const config = {
    global: {
        color: colorVector,
    },
    environment: {
        canvas: {
            canvasDefaultWidth: 512,
            canvasDefaultHeight: 512,
            canvasSmallWidth: 256,
            canvasSmallHeight: 256,
            canvasLargeWidth: 512,
            canvasLargeHeight: 512,
            canvasHugeWidth: 1024,
            canvasHugeHeight: 1024,
        },
        dom: {

        }
    },
    js: {

    },
    css: {

    }
}