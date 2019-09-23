/**
 * File:            maxwell.js
 * Created By: 		Emad Bin Abid, Mir Mehdi Ali Baqri
 * Created On:      23/09/2019
 * Description:     Sample program to demonstrate Maxwell Triangle using WebGL Wrapper 
*/

"use strict";

const dom = config.environment.dom;
const environment = config.environment;
const color = config.global.color;

let webglHandler;

window.onload = initProgram;

function initProgram() {
    try {
        createCanvas(dom.maxwellCanvas, environment.canvas.canvasSmallHeight, environment.canvas.canvasSmallHeight);
    }
    catch {
        LOGERROR("maxwell.js", "initProgram()", "Sorry; your web browser does not support HTML5's canvas element.");
        alert("Sorry; your web browser does not support HTML5's canvas element.");
    }

    const vertices = [vec2(-1, -1), vec2(0, 1), vec2(1, -1)];
    const colors = [color.blue, color.red, color.green];

    try {
        webglHandler = new WebGLHandler(dom.maxwellCanvas);
        webglHandler.setCanvasBackgroundColor(color.white);
        webglHandler.loadContext();
        webglHandler.handleVertexBuffer(vertices);
        webglHandler.bindVertexVariables("vertexPosition");
        webglHandler.handleColorBuffer(colors);
        webglHandler.bindColorVariables("vertexColor");
        webglHandler.render(webglHandler.getWebGLContext().TRIANGLES, 0, 3);
    }
    catch {
        LOGERROR("maxwell.js", "initProgram()", "Unable to render.");
    }
}