/**
 * File:            webgl-handler.js
 * Created By:      Emad Bin Abid
 * Created On:      15/09/2019
 * Description:     This file implements WebGLHandler class to handle WebGL related operations 
*/

class WebGLHandler {
    /**
     * @summary
     * A class to handle all WebGL related operations
     */

    constructor(canvasId) {
        this.canvasId = canvasId;
        this.glContext = WebGLUtils.setupWebGL(getElement(this.canvasId));
        this.program = initShaders(this.glContext, "vertex-shader", "fragment-shader");
        this.canvasColor;
        this.isRotationX = false;
        this.isRotationY = false;
        this.isRotationZ = false;
        this.angleOfRotation = 2.0;
        this.thetaLocation;
        this.thetaVector = vec3(0.0, 0.0, 0.0);
    }

    getWebGLHandler() {
        /**
         * @summary
         * Function to return the current class instance
         
         * @returns
         * Current class instance
        */
        return this;
    }

    setupWebGLContext() {
        /**
         * @summary
         * A function to set up WebGL context variable
         */
        this.glContext = WebGLUtils.setupWebGL(getElement(this.canvasId));
    }

    getWebGLContext() {
        /**
         * @summary
         * A function to return WebGL context variable
         * 
         * @returns
         * WebGL context variable
         */
        return this.glContext;
    }

    getCanvas() {
        /**
         * @summary
         * A function to return HTML canvas element by ID
         * 
         * @returns
         * HTML canvas element
         */
        return getElement(this.canvasId);
    }

    setCanvasBackgroundColor(canvasColor) {
        /**
         * @summary
         * A function to set HTML canvas color
         * 
         * @param canvasColor
         * vec4 containing RGBA values
         */
        this.canvasColor = canvasColor;
    }

    loadContext() {
        /**
         * @summary
         * A function to load WebGL configurations
         * 
         * @returns
         * WebGL context variable
         */

        this.setupWebGLContext();

        if (!this.glContext) {
            Logger.LOGERROR("webgl-handler.js", "WebGLHandler::loadContext()", "WebGL is not available in current context.");
            alert("WebGL isn't available");
        }
        else {
            this.glContext.viewport(0, 0, this.getCanvas().width, this.getCanvas().height);

            if (this.canvasColor) {
                this.glContext.clearColor(this.canvasColor[0], this.canvasColor[1], this.canvasColor[2], this.canvasColor[3]);
            }
            else {
                this.glContext.clearColor(1.0, 1.0, 1.0, 1.0);
            }

            this.glContext.useProgram(this.program);
        }
        return this.glContext;
    }

    setProgram() {
        this.glContext.useProgram(this.program);
    }

    handleVertexBuffer(data) {
        /**
         * @summary
         * A function to load shape data into buffer which then passes it to the GPU
         * 
         * @param data
         * vec2 shape data
         */

        var bufferId = this.glContext.createBuffer();
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, bufferId);
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, flatten(data), this.glContext.STATIC_DRAW);
    }

    bindVertexVariables(vertexDimension, variables) {
        /**
         * @summary
         * A function to bind vertex shader variable with JavaScript variable
         * 
         * @param variables
         * variable name from vertex shader
         */

        var vertexPosition = this.glContext.getAttribLocation(this.program, variables);
        this.glContext.vertexAttribPointer(vertexPosition, vertexDimension, this.glContext.FLOAT, false, 0, 0);
        this.glContext.enableVertexAttribArray(vertexPosition);
    }

    handleColorBuffer(data) {
        /**
         * @summary
         * A function to load color data into buffer which then passes it to the GPU
         * 
         * @param data
         * vec4 color data
         */

        var bufferId = this.glContext.createBuffer();
        this.glContext.bindBuffer(this.glContext.ARRAY_BUFFER, bufferId);
        this.glContext.bufferData(this.glContext.ARRAY_BUFFER, flatten(data), this.glContext.STATIC_DRAW);
    }

    bindColorVariables(vertexDimension, variables) {
        /**
         * @summary
         * A function to bind fragment shader variable with JavaScript variable
         * 
         * @param variables
         * variable name from fragment shader
         */

        var vertexColor = this.glContext.getAttribLocation(this.program, variables);
        this.glContext.vertexAttribPointer(vertexColor, vertexDimension, this.glContext.FLOAT, false, 0, 0);
        this.glContext.enableVertexAttribArray(vertexColor);
    }

    bindUniformVariables(variables) {
        var thetaLocation = this.glContext.getUniformLocation(this.program, variables);
        this.thetaLocation = thetaLocation;
    }

    bindAndGetUniformVariables(variables) {
        var thetaLocation = this.glContext.getUniformLocation(this.program, variables);
        this.thetaLocation = thetaLocation;
        return thetaLocation;
    }

    setRotationX(isRotation) {
        this.isRotationX = isRotation;
    }

    setRotationY(isRotation) {
        this.isRotationY = isRotation;
    }

    setRotationZ(isRotation) {
        this.isRotationZ = isRotation;
    }

    setRotationAngle(angleOfRotation) {
        this.angleOfRotation = angleOfRotation;
    }

    render(shape, startIndex, numberOfPoints, clearContext = true) {
        /**
         * @summary
         * A function to render shape onto screen
         * 
         * @param shape
         * ENUM of shape to be drawn
         * @param startIndex
         * Position of buffer to start capturing points from
         * @param numberOfPoints
         * Number of points to capture for a single render
         * @param clearContext
         * A bool value to check if color buffer should be cleared
         */

        if (clearContext) {
            this.glContext.clear(this.glContext.COLOR_BUFFER_BIT);
        }

        if (this.isRotationX) {
            this.thetaVector[0] += this.angleOfRotation;
            this.glContext.uniform3fv(this.thetaLocation, this.thetaVector);
        }

        if (this.isRotationY) {
            this.thetaVector[1] += this.angleOfRotation;
            this.glContext.uniform3fv(this.thetaLocation, this.thetaVector);
        }

        if (this.isRotationZ) {
            this.thetaVector[2] += this.angleOfRotation;
            this.glContext.uniform3fv(this.thetaLocation, this.thetaVector);
        }

        this.glContext.drawArrays(shape, startIndex, numberOfPoints);

        if (this.isRotationX || this.isRotationY || this.isRotationZ) {
            requestAnimFrame(this.render.bind(this, shape, startIndex, numberOfPoints, clearContext));
        }
    }
}
