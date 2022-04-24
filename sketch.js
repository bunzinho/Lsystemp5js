let angleIncrement = 20;
let len = 120;
let axiom = "F";

let angle;
let generationLen = len;
let sentence = axiom;
let transparency = 100;
let colorPicker;

let rules = [{
    a: "F",
    b: "FF[-F--F[++FF]][+F+++F[--F-F]]"
}];


function setup() {
    let c = createCanvas(windowWidth, windowHeight * 0.9);
    c.style('display', 'block');
    colorPicker = createColorPicker("#FF135D");
    createButton("Generate").mousePressed(generate);
    createButton("Clear").mousePressed(setupSystem);
    setupPresets()
    setupSystem();

}

function setupSystem() {
    generationLen = len;
    sentence = axiom
    angle = radians(angleIncrement);
    background(51);
    turtle();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight * 0.9);
    turtle();
}

function generate() {
    generationLen *= 0.5;
    var nextSentence = "";

    for (const char of sentence) {
        nextSentence += getRuleFromChar(char);
    }
    sentence = nextSentence;
    turtle();
}

function getRuleFromChar(c) {
    for (const rule of rules) {
        if (c == rule.a) {
            return rule.b;
        }
    }
    return c;
}

function turtle() {
    background(0);
    resetMatrix();
    translate(width / 2, height);

    let color = colorPicker.color();
    color.setAlpha(transparency);
    stroke(color);

    let startTime = Date.now();

    for (const char of sentence) {
        if (char == "F") {
            line(0, 0, 0, -generationLen);
            translate(0, -generationLen);
        } else if (char == "+") {
            rotate(angle);
        } else if (char == "-") {
            rotate(-angle);
        } else if (char == "[") {
            push();
        } else if (char == "]") {
            pop();
        }
    }
    console.log("turtle() time", Date.now() - startTime, "ms");
}